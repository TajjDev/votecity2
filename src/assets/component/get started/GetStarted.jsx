import React from 'react'
import './GetStarted.css'
import Get from './Get'
import img1 from "/src/assets/frame.png"
import img2 from "/src/assets/frame2.png"
import img3 from "/src/assets/frame3.png"
// import Apps from './Apps'
const GetStarted = () => {
  return (
    <div id='offer'>
        <h2>what we <span>offer</span></h2>
        <p id='offerp'>By using the <span>Vote</span>City platform, you gain access to a wider range of ability by getting more involved with the community</p>
        <div id="getSt">
            <Get start={"/#"} h4Txt={"Poll Voting"} pTxt={"Create your own polls, cast your vote, join the conversation and make an impact."} img={img1}/>
            <Get start={"/#"} h4Txt={"Event Booking"} pTxt={"Announce your next big moment, secure your spot and book event with just a few clicks."} img={img2}/>
            <Get start={"/#"} h4Txt={"Project Funding"} pTxt={"Bring your ideas to life, get funding and donate to support causes that matter to you."} img={img3}/>
        </div>
    </div>
  )
}

export default GetStarted