import React from 'react'
import Header from './Pages/Header';
import Main from './Pages/Main';
import styled from "styled-components";


const HeaderSection = styled.div`
padding: 5vh 5vh 5vw 5vw;`
function App() {
  return (
    // <div>
    //  <h1 style={{color:Colors.Red, fontFamily: 'CustomFont', fontSize: '86px' }}>Hello world</h1>
    // </div>
//     <svg width="100%" height="200">
//     <ellipse cx="100" cy="50" rx="80" ry="30" fill="blue" />
// </svg>
<HeaderSection>
 <Header/>
 <Main/>
</HeaderSection>
  );
}

export default App;
