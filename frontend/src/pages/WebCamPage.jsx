// import React, { useRef, useState, useEffect } from 'react';
// import Webcam from 'react-webcam';
// import {styled} from 'styled-components';
// // import Websocket from 'react-websocket';

// function WebCamPage(props) {
//     const webcamRef = useRef(null);

//     // count값 업데이트 // 초기값은 0
//     const [count, setCount] = useState(0);

//     useEffect(() => {
//       // 웹소켓으로 AI 서버와 연결
//       const chatSocket = new WebSocket(`ws://13.124.73.55/ws/socket-server/`);
//       //const chatSocket = new WebSocket(`ws://127.0.0.1:8000/ws/socket-server/`);

//       // 웹캠 프레임을 서버로 전달하는 함수
//       const sendFrame = () => {
//         if (webcamRef.current) {
//           const videoElement = webcamRef.current.video; // 웹캠에서 비디오 요소 가져오기

//           // 비디오 프레임 캡쳐
//           // const frameData = videoElement.getScreenshot();
//           const canvas = document.createElement('canvas');
//           canvas.width = videoElement.videoWidth;
//           canvas.height = videoElement.videoHeight;
//           const ctx = canvas.getContext('2d');
//           ctx.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
//           const frameData = canvas.toDataURL('image/jpeg', 0.5);

//           // 프레임 데이터 인코딩
//           const base64Data = frameData.split(',')[1];
  
//           chatSocket.send(JSON.stringify({ // JSON 형식으로 서버에 프레임 전달
//             'type': 'video_frame',
//             'data': base64Data
//           }));
  
//           console.log('Sending frame:', base64Data); // 콘솔 확인
//         }
//       };

//       // 0.3초 간격으로 sendFrame함수 호출
//       const interval = setInterval(sendFrame, 1000);
  
//       // count값 업데이트
//       chatSocket.onmessage = function(e) {
//         const data = JSON.parse(e.data);
//         if (data.type === 'count_update') {
//           setCount(data.count);
//         }
//       };
  
//       //return () => clearInterval(interval); // 언마운트 되면 인터벌 정리

//       // GPT말로는 언마운트시 웹소켓 연결도 종료하는 게 좋다...
//       // 아래 코드처럼
//       return () => {
//         clearInterval(interval); // 언마운트 되면 인터벌 정리
//         chatSocket.close();
//       };
      
//     }, []);

//     return (
//             <WebCamContainer>
//               <WebcamBox
//                   audio={false}
//                   ref={webcamRef}
//               />
//               <CountBox>
//                 <Count>Count</Count>
//                 <CountNum>{count}</CountNum>
//               </CountBox>
//             </WebCamContainer>
//     );
// }

// const WebCamContainer = styled.div`
//     height: calc(100vh - 12vh);
//     display: flex;
//     flex-direction: row;
//     align-items: center;
//     width: 100%;
//     overflow: hidden;
// `
// const WebcamBox = styled(Webcam)`
//     flex: 7;
//     height: 80vh;
    
// `
// const CountBox = styled.div`
//     flex: 3;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     background-color: #1946A0;
//     color: white;
//     margin-right: 80px;
//     border-radius: 30px;
// `;

// const Count = styled.div`
//     font-size: 48px; 
//     font-weight: bold;
// `

// const CountNum = styled.div`
//     font-size: 80px; /* Increased font size */
//     font-weight: bold;
// `;
// export default WebCamPage;


import React, { useRef, useState, useEffect } from 'react';
import Webcam from 'react-webcam';
import {styled} from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
// import Websocket from 'react-websocket';

function WebCamPage(props) {
    const webcamRef = useRef(null);

    // count값 업데이트 // 초기값은 0
    const [count, setCount] = useState(0);

    // 에러 상태 초기화
    const [error, setError] = useState(null);

    const location = useLocation();
    const navigate = useNavigate();
    const { selectedExercise, targetReps } = location.state || {};
    const chatSocket = useRef(null);

    useEffect(() => {
      // 웹소켓으로 AI 서버와 연결
      chatSocket.current = new WebSocket(`ws://13.124.73.55/ws/socket-server/`);
      //const chatSocket = new WebSocket(`ws://127.0.0.1:8000/ws/socket-server/`);

      // 웹소켓 연결 성공 시, 선택된 운동 유형 서버에 전송
      chatSocket.current.onopen = () => {
        console.log("Connected to the server");

        chatSocket.current.send(JSON.stringify({
            type: 'set_exercise_type',
            exercise: selectedExercise
        }));
      };

      // 서버에서 count 업데이트 수신
      chatSocket.current.onmessage = async (e) => {
        const data = JSON.parse(e.data);

        if (data.type === 'count_update') {
            setCount(data.count);  // count 업데이트
        }

        // 서버에서 final_count 메시지를 수신하면 WebSocket 연결 종료 + 백엔드 통신
        if (data.type === 'final_count') {
            console.log("최종 운동 개수:", data.final_count);
            chatSocket.current.close();  // WebSocket 연결 종료

            // 백엔드 통신 넣기
            try {
              const accessToken = localStorage.getItem('accessToken');
              if (!accessToken) {
                  throw new Error("Access token is missing. Please log in again.");
              }

              const response = await axios.post('http://13.124.73.55/account/record/',
                {
                  sport_type: selectedExercise,
                  aim_count: parseInt(targetReps, 10),
                  done_count: data.final_count
                },
                {
                  headers: {
                      'Content-Type': 'application/json',
                      "Authorization": `Bearer ${accessToken}`,
                  }
                }
              );

          
              const responseData = response.data;
              console.log("Record response:", responseData);

              // 운동 기록이 성공적으로 저장된 후,  MyPage로 이동
              navigate('/mypage');

            } catch (err) {
              console.error("Error posting record:", err);
              if (err.response) {
                // 서버가 응답했지만 상태 코드가 2xx가 아님
                setError(`운동 기록 저장 실패: ${err.response.data.detail || err.response.statusText}`);
              } else if (err.request) {
                // 요청이 만들어졌지만 응답을 받지 못함
                setError("서버 응답이 없습니다. 네트워크 상태를 확인해주세요.");
              } else {
                // 다른 오류
                setError("운동 기록을 저장하는 중 오류가 발생했습니다.");
              }
            }
        }
      };

      // 웹소켓 연결 종료 시 인터벌 정리
      chatSocket.current.onclose = () => {
        console.log("WebSocket connection closed.");
      };

      // 웹캠 프레임을 서버로 전달하는 함수
      const sendFrame = () => {
        if (webcamRef.current) {
          const videoElement = webcamRef.current.video; // 웹캠에서 비디오 요소 가져오기

          // 비디오 프레임 캡쳐
          // const frameData = videoElement.getScreenshot();
          const canvas = document.createElement('canvas');
          canvas.width = videoElement.videoWidth;
          canvas.height = videoElement.videoHeight;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
          const frameData = canvas.toDataURL('image/webp', 0.5);

          // 프레임 데이터 인코딩
          const base64Data = frameData.split(',')[1];
  
          chatSocket.current.send(JSON.stringify({ // JSON 형식으로 서버에 프레임 전달
            'type': 'video_frame',
            'data': base64Data
          }));
  
          console.log('Sending frame:', base64Data); // 콘솔 확인
        }
      };

      // 0.3초 간격으로 sendFrame함수 호출 -> 일단 cpu에선 1초 간격으로
      const interval = setInterval(sendFrame, 1000);
  
      return () => {
        clearInterval(interval); // 언마운트 되면 인터벌 정리
        if (chatSocket.current) {
          chatSocket.current.close(); // 웹소켓 연결 종료
        }
      };
      
    }, [selectedExercise, targetReps, navigate]);

    // 운동 종료 버튼 클릭 시 종료 신호 전송
    const finishExercise = () => {
      if (chatSocket.current) {
          chatSocket.current.send(JSON.stringify({
              type: 'finish_exercise'
          }));
          console.log("Sent finish_exercise message to server");
      }
    };


    return (
            <WebCamContainer>
              <WebcamBox
                  audio={false}
                  ref={webcamRef}
              />
              <CountBox>
                <Count>Count</Count>
                <CountNum>{count}</CountNum>
                <FinishButton onClick={finishExercise}>운동 종료</FinishButton>
                {error && <ErrorMessage>{error}</ErrorMessage>}
              </CountBox>
            </WebCamContainer>
    );
}

const WebCamContainer = styled.div`
    height: calc(100vh - 12vh);
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    overflow: hidden;
`
const WebcamBox = styled(Webcam)`
    flex: 7;
    height: 80vh;
    
`
const CountBox = styled.div`
    flex: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #1946A0;
    color: white;
    margin-right: 80px;
    border-radius: 30px;
`;

const Count = styled.div`
    font-size: 48px; 
    font-weight: bold;
`

const CountNum = styled.div`
    font-size: 80px; /* Increased font size */
    font-weight: bold;
`;

const FinishButton = styled.button`
    margin-top: 20px;
    padding: 10px 20px;
    font-size: 24px;
    font-weight: bold;
    background-color: #FF6347;
    color: white;
    border: none;
    border-radius: 10px;
    cursor: pointer;

    &:hover {
        background-color: #FF4500;
    }
`;

const ErrorMessage = styled.div`
    margin-top: 20px;
    color: #FF0000;
    font-size: 18px;
    text-align: center;
`;

export default WebCamPage;