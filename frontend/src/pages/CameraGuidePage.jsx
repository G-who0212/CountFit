// import React from 'react';
// import { styled } from 'styled-components';
// import { useNavigate } from 'react-router-dom';

// function CameraGuidePage(props) {

//     const navigate = useNavigate();

//     const handleWebcamPage = () => {
//         navigate('/webcam');
//     };


//     return (
//         <Container>
//             <Title>
//                 📢 선택하신 운동 종목에 적합한 카메라 구도는 아래와 같아요!
//             </Title>
//             <ContentWrapper>
//                 <VideoPlaceholder />
//                 <Instructions>
//                 <InstructionGroup>
//                         <InstructionTitle>측면 촬영</InstructionTitle>
//                         <InstructionDescription>📸 팔의 각도, 몸통의 자세 등을 확인할 수 있어요.</InstructionDescription>
//                     </InstructionGroup>
//                     <InstructionGroup>
//                         <InstructionTitle>정면 촬영</InstructionTitle>
//                         <InstructionDescription>📸 팔의 펼침 정도, 몸통의 기울기 등을 확인할 수 있어요.</InstructionDescription>
//                     </InstructionGroup>
//                     <InstructionGroup>
//                         <InstructionTitle>45도 각도 촬영</InstructionTitle>
//                         <InstructionDescription>📸 팔의 움직임과 몸통의 안정성 등을 확인할 수 있어요.</InstructionDescription>
//                     </InstructionGroup>
//                 </Instructions>
//             </ContentWrapper>
//             <StartButton onClick={handleWebcamPage}>시작하기</StartButton>
//         </Container>
//     );
// }


// const Container = styled.div`
//   text-align: center;
//   padding: 20px;
// `;

// const Title = styled.div`
//   font-size: 35px;
//   font-weight: 800;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin-bottom: 60px;
//   margin-top: 40px;
// `;

// const ContentWrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin-bottom: 20px;
//   //background-color: yellow;
// `;

// const VideoPlaceholder = styled.div`
//   width: 700px;
//   height: 400px;
//   border: 2px solid #ccc;
//   border-radius: 50px;
//   margin-right: 20px;
// `;

// const Instructions = styled.div`
//   text-align: left;
// `;

// const InstructionGroup = styled.div`
//   margin-bottom: 20px;
// `;

// const InstructionTitle = styled.div`
//   font-size: 24px;
//   font-weight: 800;
//   background-color: #d4ecff;
//   padding: 15px;
//   border-radius: 20px;
//   width: 200px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   text-align: center;
// `;

// const InstructionDescription = styled.div`
//   font-size: 23px;
//   font-weight: 600;
//   padding: 10px;
//   margin-top: 5px;
// `;

// const StartButton = styled.div`
//     width: 200px;
//     text-align: center;
//     padding-top: 20px;
//     padding-bottom: 20px;
//     font-size: 25px;
//     font-weight: 700;
//     border-radius: 50px;
//     background-color: #4CAF50;
//     color: white;
//     margin-top: 40px;
//     cursor: pointer;
//     display: inline-block;
// `;

// export default CameraGuidePage;



import React from 'react';
import { styled } from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';

function CameraGuidePage(props) {

    const navigate = useNavigate();

    const location = useLocation();
    const { selectedExercise, targetReps } = location.state || {};

    const handleWebcamPage = () => {
        navigate('/webcam', { state: { selectedExercise, targetReps } });
    };


    return (
        <Container>
            <Title>
                📢 선택하신 운동 종목에 적합한 카메라 구도는 아래와 같아요!
            </Title>
            <ContentWrapper>
                <VideoPlaceholder />
                <Instructions>
                <InstructionGroup>
                        <InstructionTitle>측면 촬영</InstructionTitle>
                        <InstructionDescription>📸 팔의 각도, 몸통의 자세 등을 확인할 수 있어요.</InstructionDescription>
                    </InstructionGroup>
                    <InstructionGroup>
                        <InstructionTitle>정면 촬영</InstructionTitle>
                        <InstructionDescription>📸 팔의 펼침 정도, 몸통의 기울기 등을 확인할 수 있어요.</InstructionDescription>
                    </InstructionGroup>
                    <InstructionGroup>
                        <InstructionTitle>45도 각도 촬영</InstructionTitle>
                        <InstructionDescription>📸 팔의 움직임과 몸통의 안정성 등을 확인할 수 있어요.</InstructionDescription>
                    </InstructionGroup>
                </Instructions>
            </ContentWrapper>
            <StartButton onClick={handleWebcamPage}>시작하기</StartButton>
        </Container>
    );
}


const Container = styled.div`
  text-align: center;
  padding: 20px;
`;

const Title = styled.div`
  font-size: 35px;
  font-weight: 800;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 60px;
  margin-top: 40px;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  //background-color: yellow;
`;

const VideoPlaceholder = styled.div`
  width: 700px;
  height: 400px;
  border: 2px solid #ccc;
  border-radius: 50px;
  margin-right: 20px;
`;

const Instructions = styled.div`
  text-align: left;
`;

const InstructionGroup = styled.div`
  margin-bottom: 20px;
`;

const InstructionTitle = styled.div`
  font-size: 24px;
  font-weight: 800;
  background-color: #d4ecff;
  padding: 15px;
  border-radius: 20px;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const InstructionDescription = styled.div`
  font-size: 23px;
  font-weight: 600;
  padding: 10px;
  margin-top: 5px;
`;

const StartButton = styled.div`
    width: 200px;
    text-align: center;
    padding-top: 20px;
    padding-bottom: 20px;
    font-size: 25px;
    font-weight: 700;
    border-radius: 50px;
    background-color: #4CAF50;
    color: white;
    margin-top: 40px;
    cursor: pointer;
    display: inline-block;
`;

export default CameraGuidePage;