import React from 'react'
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { ShoppingCart} from "@phosphor-icons/react";



const NavbarSection = styled.div`
  padding: 1.5rem 3rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--header-height);
  /* background-color: ${({ scrollColor }) => (scrollColor ? 'var(--darkBlue_4)' : 'var(--lightBlue_1)')}; */
  border-top: 1px solid #C8B6EA;
  border-bottom: .5px solid rgba(255,255,255,0.1);
  color: white;
  backdrop-filter: blur(10px);
  /* font-family: 'Whisper', cursive; */
  align-items: center;
  z-index: 1000;

  .navbar{
    display: flex;
    justify-content: space-between;
    align-items: center;
    ul{
        display: flex;

        a{
          color: white;
          
        }
        li{
          margin: 5px;
      }
        
       
    }
    
  }
`
function Navbar() {
  return (
      <NavbarSection>
         <div className="navbar">
           <ul className="ul menu">
            <li><Link to='/'>Home</Link></li>
            <li><Link>Product</Link></li>
            <li><Link>we</Link></li>
           </ul>
           <div className="logo">
            <span><Link>GlamGam</Link></span>
           </div>
           <div className="cart">
           <ShoppingCart />
           </div>
         </div>
      </NavbarSection>
  )
}

export default Navbar