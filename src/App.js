import React, {useState} from "react";
import './styles/App.css'
import Navbar from "./components/UI/navbar/Navbar";
import CameraComponent from "./components/CameraComponent";
import CameraComponentsList from "./components/CameraComponentsList";
import MyButton from "./components/UI/button/MyButton";
import MyModal from "./components/modal/MyModal";
import CameraAddForm from "./components/CameraAddForm";


function App() {


  const [modal,setModal] = useState(false)
  const [cameraUrl, setCameraUrl] = useState([
    'http://webcam.anapa-official.ru:9999/player/?key=q1322qefasfrttg&cam=efb90850-93df-4bbb-ac51-9663342ee5b4',
    'http://webcam.anapa-official.ru:9999/player/?key=q1322qefasfrttg&cam=965aa513-a27d-4078-92b4-3ff104bc0622',
    'https://rtsp.me/embed/i93R6hin/?'
  ])

  const addUrl = (newUrl) => {
    setCameraUrl([...cameraUrl,
      `rtsp://${newUrl.login}:${newUrl.password}@${newUrl.IP}:${newUrl.port}/cam/realmonitor?channel=${newUrl.channelNo}&subtype=${newUrl.typeNo}`
    ])
    setModal(false)
    console.log(newUrl)
  }

  const changeModalStatus = (modal) => {
    setModal(true)
  }


  return (
      <div className="App">
        <Navbar changeM={changeModalStatus} title={"Муниципальное образование города-курорта Анапа"}/>

        <CameraComponentsList cameraUrls={cameraUrl}/>
        <MyModal visible={modal} setVisible={setModal}>
          <CameraAddForm add={addUrl}/>
        </MyModal>

      </div>

  )
}

export default App;
