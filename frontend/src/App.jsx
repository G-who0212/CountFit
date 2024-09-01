import {Route, Routes} from 'react-router-dom';
import './App.css';
import WebCamPage from './pages/WebCamPage';
import Navbar from './components/Navbar';
import MainPage from './pages/MainPage';
import GoalSettingPage from './pages/GoalSettingPage';
import CameraGuidePage from './pages/CameraGuidePage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/webcam" element={<WebCamPage/>}/>
        <Route path="/goal-setting" element={<GoalSettingPage />} />
        <Route path="/camera-guide" element={<CameraGuidePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
