import React from 'react'
import styled from "styled-components";
import '../Styled/Global.css'
import '../Styled/font.css'
import Web from '../Images/Web.png'
import web1 from '../Images/web1.png'



const MainHeader = styled.div`
 margin-top: 10vh;

 .main{
    display: flex;
    justify-content: center;
    align-items: center;

    .card1 h1{
     width: 60%;
     font-size: 3rem;
     color: white;
     font-family: 'CustomFont';
     line-height: 5rem;
    }

    .card1 h3{
        width: 50%;
        font-size: 1rem;
        color: white;
        line-height: 1.5rem;
        font-family: 'Regular';
        margin-top: 3%;
        font-weight: lighter;

    }


    /* .card2 .circle{
        width: 300px;
        height: 300px;
        border-radius: 50%;
        position: relative;
        background-color: yellow;
    } */
 }
`

function Main() {
  return (
   <MainHeader>
    <div className="main">
    <div className="card1">
       <h1> Quick, Fast, Secure Payments</h1>
       <h3>A super fast super easy way to make payments easy, affordable, reliable and secure. </h3>
        </div>
    <div className="card2">
        {/* <div className="circle">
           <img src={web1} alt='web1'/>
        </div> */}

<div class="circle-container">
  <div class="circle"></div>
  <img src={web1} alt="Your Image" className="overlay-image"/>
  <img src={Web} alt="Your Image" className="overlay-image"/>
</div>
    </div>
    </div>
   </MainHeader>
  )
}

export default Main