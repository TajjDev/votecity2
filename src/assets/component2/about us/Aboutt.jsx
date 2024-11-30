import React from 'react'
import './about.css'
import image from '/src/assets/vote.png'
import Button from '../join/Button'
// import Button from '../../component/join/Button'
// import image1 from '/src/assets/votepic.jpg'


const Aboutt = () => {
  return (
    <div id='about'>
    <div id="head">
      <div id="image">
        {/* <img id='im' src={image1} alt="" /> */}
        <img id='im1' src={image} alt="" />
      </div>
      <div id="text">
        <h1>Join the Movement with Vote<span>City</span></h1>
        <p>Vote<span>City</span> empowers you to participate in community decisions, stay updated on events, support local causes, and engage in announcements</p>
      </div>
    </div>
    {/* <Button */}
    <div id="body">
      <Button idd={"idd"} href={"/#"} text={"Download Now"}></Button>
      <Button idd={"idd"} bod={"1px solid rgba(224, 224, 224, 1)"} fon={'none'} the={"rgba(224, 224, 224, 1)"} href={"/#"} text={"Learn More"}></Button>
    </div>
    </div>
  )
}

export default Aboutt