import React from 'react'
import styled from "styled-components";
import Logo from '../Images/Quick.png';
import { FaBars, FaTimes} from 'react-icons/fa'
import '../Styled/Global.css'
import '../Styled/font.css'



const HeaderSection = styled.div`
/* padding: 5vh 5vh 5vw 5vw; */

.header{
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo{
        display: flex;
        align-items: center;
        cursor: pointer;
        .box{
            width: 15%;
            object-fit: contain;
    
        }
        .box img{
            width: 100%;
        }
    }


    .logo h1{
        font-size: 20px;
        color: white;
        margin-left: 5px;
        font-weight: lighter;
        font-family: 'CustomFont';
    }

   

    
         .navbar{
            display: flex;

            li{
                list-style: none;
                /* margin-left: 15px; */
                margin-right: 15px;
                color: white;
                cursor: pointer;
                font-size: 15px;
                font-weight: lighter;
                font-family: 'CustomFont';
                
            }


         }

         .btn{
            border: 1.5px solid white;
        padding: 5px 15px;
        color: white;
        font-weight: lighter;
        cursor: pointer;
        font-size: 15px;
        font-family: 'CustomFont';
         }
  


}

`


function Header() {
  return (
    <HeaderSection>
       <div className="header">
       <div className="logo">
               <div className="box">
               <img src={Logo} alt='Logo'/>
               </div>
                <h1>Quickpay</h1>
            </div>
           
                 <ul className="navbar">
                    <li>Home</li>
                    <li>For Indivduals</li>
                    <li>For Business</li>
                    <li>For Developers</li>
                </ul>
                <div className="btn">
                Get started
                </div>
            </div>
      
    </HeaderSection>
  )
}

export default Header