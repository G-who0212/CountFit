import React, { useRef, useState, useEffect } from 'react';
import Webcam from 'react-webcam';
import {styled} from 'styled-components';
// import Websocket from 'react-websocket';

function WebCamPage(props) {
    const webcamRef = useRef(null);

    // count값 업데이트
    const [count, setCount] = useState(0);

    useEffect(() => {
      // 웹소켓으로 서버 연결
      const chatSocket = new WebSocket(`ws://13.124.73.55/ws/socket-server/`);
      //const chatSocket = new WebSocket(`ws://127.0.0.1:8000/ws/socket-server/`);

      // 웹캠 프레임을 서버로 전달하는 함수
      const sendFrame = () => {
        if (webcamRef.current) {
          const videoElement = webcamRef.current.video; // 웹캠에서 가져오고

          // 비디오 프레임 캡쳐
          // const frameData = videoElement.getScreenshot();
          const canvas = document.createElement('canvas');
          canvas.width = videoElement.videoWidth;
          canvas.height = videoElement.videoHeight;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
          const frameData = canvas.toDataURL('image/jpeg', 0.5);

          // 프레임 데이터 인코딩
          const base64Data = frameData.split(',')[1];
  
          chatSocket.send(JSON.stringify({ // JSON 형식으로 서버에 프레임 전달
            'type': 'video_frame',
            'data': base64Data
          }));
  
          console.log('Sending frame:', base64Data); // 콘솔 확인
        }
      };

      // 1초 간격으로 sendFrame함수 호출
      const interval = setInterval(sendFrame, 1000);
  
      // count값 업데이트
      chatSocket.onmessage = function(e) {
        const data = JSON.parse(e.data);
        if (data.type === 'count_update') {
          setCount(data.count);
        }
      };
  
      return () => clearInterval(interval); // 언마운트 되면 인터벌 정리
    }, []);

    return (
            <WebCamContainer>
              <WebcamBox
                  audio={false}
                  ref={webcamRef}
              />
              <CountBox>
                <Count>Count</Count>
                <CountNum>{count}</CountNum>
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
export default WebCamPage;