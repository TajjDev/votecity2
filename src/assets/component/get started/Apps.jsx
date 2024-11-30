import React from 'react'
import './about.css'
import VisMis from './VisMis'
const About = () => {
  return (
    <>
    <div id='about'>
        <div id="abt">
          <h6>About The Company</h6>
          <p>What You Should Know About <span>Vote</span>City</p>
        </div>
        <div id="misvis">
            <VisMis id={"mission"} textH3={"Mission"} p={"To empower citizens to engage actively in their communities by providing a platform for informed decision-making,     easy event participation and..."} read={"Read More"}/>
            <VisMis id={"vision"} textH3={"Vision"} p={"Our vision is to become the leading e-service platform for voting, ticketing and fundraising in africa, driving inovation, transparency and finacial inclusion..."} read={"Read More"}/>
        </div>
    </div>
    <div id="con">
         <div id="contact">
           <h6>contact information</h6>
           <p><span>Email</span>: support@votecity.ng</p>
           <p><span>Phone Number</span>: +234 913 926 5486</p>
           <p><span>Address</span>: Lagos State, Nigeria</p>
        </div>
        <div id="social">
          <h6>Our Social Media</h6>
        </div>
    </div>
   </>
  )
}

export default About