import React, { useState } from 'react'
import Webcam from 'react-webcam'
import "../App.css";


const WebcamComponent = () => <Webcam />
const videoConstraints = {
  width: 400,
  height: 400,
  facingMode: 'user',
}
const Camera = () => {
  const [picture, setPicture] = useState('')
  const webcamRef = React.useRef(null)
  const capture = React.useCallback(() => {
    const pictureSrc = webcamRef.current.getScreenshot()
    setPicture(pictureSrc)
  })
  return (
    <div>
      <h2 className="form-head">
        FORM
      </h2>
      <div>
        {picture == '' ? (
          <Webcam
            audio={false}
            height={400}
            ref={webcamRef}
            width={400}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
          />
        ) : (
          <img src={picture} />
        )}
      </div>
      <div>
        {picture != '' ? (
          <button
            onClick={(e) => {
              e.preventDefault()
              setPicture()
            }}
            className="retake"
          >
            Retake
          </button>
        ) : (
          <button
            onClick={(e) => {
              e.preventDefault()
              capture()
            }}
            className="capture"
          >
            Capture
          </button>
        )}
      </div>
    </div>
  )
}
export default Camera