import React from 'react';
import { styled, keyframes } from 'styled-components';
import { Link, Element } from 'react-scroll';
import { useNavigate } from 'react-router-dom';
import mainImage1 from '../assets/icon/mainpage1/mainpage1.jpg';
import mainImage2 from '../assets/icon/mainpage1/mainpage2.jpg';
import mainImage3 from '../assets/icon/mainpage1/mainpage3.jpg';
import mainImage4 from '../assets/icon/mainpage1/mainpage4.jpg';
import mainImage5 from '../assets/icon/mainpage1/mainpage5.jpg';
import mainImage6 from '../assets/icon/mainpage1/mainpage6.jpg';
import mainImage7 from '../assets/icon/mainpage1/mainpage7.jpg';
import mainLogin from '../assets/icon/mainpage2/main_login.jpg';
import mainCamera1 from '../assets/icon/mainpage2/main_camera1.jpg';
import mainCamera2 from '../assets/icon/mainpage2/main_camera2.jpg';
import plan from '../assets/icon/mainpage3/plan.jpg';
import sensor from '../assets/icon/mainpage3/sensor.jpg';
import camera from '../assets/icon/mainpage3/camera.jpg';
import gift from '../assets/icon/mainpage3/gift.jpg';
import good from '../assets/icon/mainpage3/good.jpg';

function MainPage(props) {

    const navigate = useNavigate();

    const handleStartClick = () => {
        navigate('/goal-setting');
    };


    return (
        <Container>

            <FirstSection>
                <Text>
                    하루하루 쌓이는 운동의 기록, <br/>
                    건강한 변화의 시작💪📈
                </Text>
                <BtnContainer>
                    <GuideBtn>
                        <Link to="secondSection" smooth={true} duration={700}>
                        이용 가이드 보러가기
                        </Link>
                    </GuideBtn>
                    <StartBtn onClick={handleStartClick}>
                        바로 시작하기
                    </StartBtn>
                </BtnContainer>
                <ImageContainer>
                    <MainImage src={mainImage1} alt="mainpage1" />
                    <MainImage src={mainImage2} alt="mainpage2" />
                    <MainImage src={mainImage3} alt="mainpage3" />
                    <MainImage src={mainImage4} alt="mainpage4" />
                    <MainImage src={mainImage5} alt="mainpage5" />
                    <MainImage src={mainImage6} alt="mainpage6" />
                    <MainImage src={mainImage7} alt="mainpage7" />
                </ImageContainer>
            </FirstSection>

            <Element name="secondSection">
            <SecondSection>
                <SecondTitle>
                    서비스를 이용하기 전에, <br/>
                    우선 아래의 사항들이 준비되었는지 체크해주세요.
                </SecondTitle>
                <CheckListContainer>
                    <CheckItem>
                        <Circle>1</Circle>
                        <CheckText>
                            <CheckTitle>서비스 진행을 위해 카카오 계정으로 로그인 해주세요.</CheckTitle>
                            <CheckDescription>
                                ⦁ 별도의 회원가입 절차 없이 카카오 계정만으로 빠르게 로그인할 수 있어요.
                                <br />
                                ⦁ 서비스 화면 우측 상단의 '로그인' 버튼 -> 카카오 계정으로 인증해주세요.
                            </CheckDescription>
                            <ImgContainer>
                                <MainLogin src={mainLogin} alt="mainLogin" />
                            </ImgContainer>
                        </CheckText>
                    </CheckItem>
                    <CheckItem>
                        <Circle>2</Circle>
                        <CheckText>
                            <CheckTitle>카메라 사용에 대한 접근 권한을 허용해주세요.</CheckTitle>
                            <CheckDescription>
                                ⦁ 카메라 권한 요청 팝업이 뜬다면, 카메라 권한을 허용해주세요.
                            </CheckDescription>
                            <ImgContainer>
                                <MainCamera1 src={mainCamera1} alt="mainCamera1" />
                                <MainCamera2 src={mainCamera2} alt="mainCamera2" />
                            </ImgContainer>
                        </CheckText>
                    </CheckItem>
                </CheckListContainer>
            </SecondSection>
            </Element>
            <ThirdSection>
                <ThirdTitle>
                    본격적으로 CountFit 이용을 시작해볼까요?
                </ThirdTitle>
                <ThirdCheckListContainer>
                    <ThirdCheckItem>
                        <ThirdCircle>1</ThirdCircle>
                        <ThirdCheckText>
                            <ThirdCheckTitle>원하는 운동 종목을 선택하고 목표 횟수를 입력한 후 설정 완료 버튼을 눌러주세요.</ThirdCheckTitle>
                            <ThirdCheckDescription>
                                ⦁ 운동 종목에 따라 카메라 배치와 구도 설정이 다를 수 있으니 다음 페이지에서 샘플 영상을 꼭 확인해주세요.
                            </ThirdCheckDescription>
                            <ImgContainer>
                                <ThirdMainImage src={plan} alt="plan" />
                            </ImgContainer>
                        </ThirdCheckText>
                    </ThirdCheckItem>
                    <ThirdCheckItem>
                        <ThirdCircle>2</ThirdCircle>
                        <ThirdCheckText>
                            <ThirdCheckTitle>카메라 구도를 조정한 후 시작하기 버튼을 눌러 운동을 시작합니다.</ThirdCheckTitle>
                            <ThirdCheckDescription>
                                ⦁ 카메라를 통해 여러분의 운동 동작이 실시간으로 감지되며, 정확한 동작을 취했을 경우에만 횟수가 화면에 표시됩니다.
                            </ThirdCheckDescription>
                            <ImgContainer>
                                <ThirdMainImage1 src={sensor} alt="sensor" />
                                <ThirdMainImage2 src={camera} alt="camera" />
                            </ImgContainer>
                        </ThirdCheckText>
                    </ThirdCheckItem>
                    <ThirdCheckItem>
                        <ThirdCircle>3</ThirdCircle>
                        <ThirdCheckText>
                            <ThirdCheckTitle>설정한 목표 횟수에 도달하면 목표 달성을 축하하는 알림이 표시됩니다.</ThirdCheckTitle>
                            <ThirdCheckDescription>
                                ⦁ 설정 완료 후 목표 달성에 대한 알림을 받으세요.
                            </ThirdCheckDescription>
                            <ImgContainer>
                                <ThirdMainImage1 src={gift} alt="gift" />
                                <ThirdMainImage2 src={good} alt="good" />
                            </ImgContainer>
                            <Btn onClick={handleStartClick}>
                                바로 시작하기
                            </Btn>
                        </ThirdCheckText>
                    </ThirdCheckItem>
                </ThirdCheckListContainer>
            </ThirdSection>
            
        </Container>
    );
}
const Container = styled.div`
    // background-color: pink;
    //height: calc(100vh - 120px); // navbar 자리 남겨둠
    display: flex;
    //align-items: center;
    //justify-content: center;
    flex-direction: column;
`
const FirstSection = styled.div`
    height: calc(100vh - 120px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const SecondSection = styled.div`
    //padding: 100px 0;
    //background-color: pink;
    height: 100vh;
`;

const ThirdSection = styled.div`
    //padding: 100px 0;
    background-color: white;
    height: 100vh;
`;

const SecondTitle = styled.div`
    font-size: 40px;
    font-weight: 800;
    margin-top: 150px;
    margin-bottom: 100px;
    margin-left: 100px;
    line-height: 1.5;
`;

const CheckListContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
`;

const CheckItem = styled.div`
    width: 600px;
    background-color: white;
    padding: 40px;
    border-radius: 30px;
    border: 3px black solid;
    text-align: left;
`;

const Circle = styled.div`
    width: 40px;
    height: 40px;
    background-color: black;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 20px;
`;

const CheckText = styled.div``;

const CheckTitle = styled.div`
    font-size: 28px;
    font-weight: 800;
    margin-bottom: 20px;
    line-height: 1.5;
`;

const CheckDescription = styled.div`
    font-size: 20px;
    font-weight: 500;
    line-height: 1.8;
    color: #555;
    margin-bottom: 20px;
`;

const ImgContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 30px;
    height: 100%;
    //background-color: pink;
`;

const MainLogin = styled.img`
    
`;

const MainCamera1 = styled.img`
    padding-top: 70px;
`;

const MainCamera2 = styled.img`
    padding-top: 70px;
`;

const ThirdTitle = styled.div`
    font-size: 40px;
    font-weight: 800;
    margin-top: 150px;
    margin-bottom: 100px;
    margin-left: 100px;
`;

const ThirdCheckListContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
`;

const ThirdCheckItem = styled.div`
    width: 400px;
    background-color: white;
    padding: 40px;
    border-radius: 30px;
    border: 3px black solid;
    text-align: left;
`;

const ThirdCircle = styled.div`
    width: 40px;
    height: 40px;
    background-color: black;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 20px;
`;

const ThirdCheckText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: left;
`;

const ThirdCheckTitle = styled.div`
    font-size: 28px;
    font-weight: 800;
    margin-bottom: 20px;
    line-height: 1.5;
`;

const ThirdCheckDescription = styled.div`
    font-size: 20px;
    font-weight: 500;
    line-height: 1.8;
    color: #555;
    margin-bottom: 20px;
`;


const ThirdMainImage = styled.img`

`;

const ThirdMainImage1 = styled.img`
    padding-top: 40px;
`;

const ThirdMainImage2 = styled.img`
    padding-top: 40px;
`;

const floatAnimation = keyframes`
  0% {
    transform: translate(-50%, -50%);
  }
  50% {
    transform: translate(-50%, -60%);
  }
  100% {
    transform: translate(-50%, -50%);
  }
`

const Text = styled.div`
    font-size: 60px;
    font-weight: 800;
    animation: ${floatAnimation} 3s ease-in-out infinite;
    transform: translate(-50%, -50%);
    text-align: center;
    position: absolute;
    left: 50%;
    top: 35%;
    //background-color: yellow;
`
const BtnContainer = styled.div`
    display: flex;
    width: 580px;
    //background-color: pink;
    //font-size: 22px;
    //font-weight: 600;
    color: white;
    justify-content: space-between;
    //margin-top: -200px;
`

const GuideBtn = styled.div`
    width: 300px;
    background-color: #1946A0;
    cursor: pointer;
    border-radius: 50px;
    text-align: center;
    padding-top: 20px;
    padding-bottom: 20px;
    font-size: 25px;
    font-weight: 700;
`

const StartBtn = styled.div`
    width: 250px;
    background-color: #33AB11;
    cursor: pointer;
    border-radius: 50px;
    text-align: center;
    padding-top: 20px;
    padding-bottom: 20px;
    font-size: 25px;
    font-weight: 700;
`

const Btn = styled.div`
    width: 230px;
    background-color: #33AB11;
    cursor: pointer;
    border-radius: 50px;
    text-align: center;
    padding-top: 20px;
    padding-bottom: 20px;
    font-size: 23px;
    font-weight: 700;
    color: white;
    margin-top: 30px;
`;

const ImageContainer = styled.div`
    display: flex;
    //justify-content: center;
    //margin-top: 50px;
    //padding-bottom: 20px;
    position: absolute;
    top: 85%;
    justify-content: space-between;
    width: 1700px;
`;

const MainImage = styled.img`
    width: 150px;
    //max-width: 1200px; // 원하는 최대 너비를 설정하세요.
    height: 150px;
`;

export default MainPage;