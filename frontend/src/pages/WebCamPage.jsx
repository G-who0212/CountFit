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
      const chatSocket = new WebSocket(`ws://43.203.223.252:8000/ws/socket-server/`);
  
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
  
          chatSocket.send(JSON.stringify({ // JSON형식으로 서버에 프레임 전달
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
        <div>
            <WebCamContainer>
            <Webcam
                audio={false}
                ref={webcamRef}
                width={1000}
            />
            </WebCamContainer>
            <div id="count-container">
              Count: <span id="count">{count}</span>
            </div>
        </div>
    );
}

const WebCamContainer = styled.div`
    height: 100vh;
    display: flex;
    
`

export default WebCamPage;