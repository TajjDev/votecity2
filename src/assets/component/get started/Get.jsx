import React from 'react'
import image4 from '/src/assets/frame4.png'

// import reactLogo from './assets/react.svg'
const Get = ({h4Txt,pTxt,img,start}) => {
  return (
    <div id='getEach'>
        <h4>{h4Txt}</h4>
        <p>{pTxt}.</p>
        <div id="started">
        <img id='getEachimg' src={img} />
        <a href={start}>Get Started <img id='getEachimg2' src={image4} alt="" /></a>
        </div>
       
    </div>
  )
}

export default Get