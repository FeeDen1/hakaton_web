import React, {useState} from "react";
import './styles/App.css'
import Navbar from "./components/UI/navbar/Navbar";
import CameraComponent from "./components/CameraComponent";
import CameraComponentsList from "./components/CameraComponentsList";



function App() {
  const cameraUrls = [
    'http://webcam.anapa-official.ru:9999/player/?key=q1322qefasfrttg&cam=56543f59-b3c5-40c8-a8b1-ca9cb3db0e3b',
    'http://webcam.anapa-official.ru:9999/player/?key=q1322qefasfrttg&cam=d540f253-3ca6-49bc-ac32-a4d36b787157',
      'http://webcam.anapa-official.ru:9999/player/?key=q1322qefasfrttg&cam=efb90850-93df-4bbb-ac51-9663342ee5b4',
      'http://webcam.anapa-official.ru:9999/player/?key=q1322qefasfrttg&cam=c4b93943-9329-4dcc-8096-72dab29387dd',
    'http://webcam.anapa-official.ru:9999/player/?key=q1322qefasfrttg&cam=efb90850-93df-4bbb-ac51-9663342ee5b4',
    'http://webcam.anapa-official.ru:9999/player/?key=q1322qefasfrttg&cam=efb90850-93df-4bbb-ac51-9663342ee5b4',

  ];
  return (
      <div className="App">
        <Navbar title={"Муниципальное образование города-курорта Анапа"}/>

        <CameraComponentsList cameraUrls={cameraUrls}/>
      </div>

  )
}

export default App;
