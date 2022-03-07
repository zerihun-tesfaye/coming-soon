import React from 'react'
import  styled from 'styled-components'
import Contdown from '../count/Contdown';

const Nav = () => {
  return (
    <Container>
          <div className="main">
              <Contdown/>
              <h3>hello world</h3>
            </div>
         </Container>
  )
}
 const Container=styled.div`
   background: #161B22 ;
   height:50px;
   width:100%;
   padding: 10px;
   
   
   .main{
   align-items: center ;
   display: flex;
   justify-content: space-between;
   max-width: 890px;
   margin-left:2rem;;

   }
  `;

export default Nav