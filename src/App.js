import React, {useEffect, useRef, useState} from "react";
import './styles/App.css'
import Navbar from "./components/UI/navbar/Navbar";

function App() {

    const videoRef = useRef(null)

    useEffect(() => {
      const startWebcam = async () => {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({
            audio: false,
            video: true
          })
          if(videoRef.current) {
            videoRef.current.srcObject = stream
          }
        } catch(e) {
          <h1>Error accessing webcam</h1>
        }
      }
      startWebcam()
    },[])



  return (
      <div className="App">

        <Navbar title='Муниципальное образование города-курорта Анапа'/>
        <div className="video__wrapper">
          <video ref={videoRef} playsInline muted autoPlay></video>
        </div>

      </div>
  )
}

export default App;
