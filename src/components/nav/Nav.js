import React from 'react'
import  styled from 'styled-components'
import Contdown from '../count/Contdown';

const Nav = () => {
  return (
    <Container>
          <Main className="container">
             <Flex>
               <div><Contdown/></div>
               <div><h3>hello</h3></div>
             </Flex>
            </Main>
         </Container>
  )
}
 const Container=styled.div`
   background: #161B22 ;
   width:100%;
   padding:10px 0;
   height:40px;
   .container{
     max-width:980px;
     overflow: hidden;
   }
   `;
   const Main =styled.div`
       margin-bottom: 5em;
       box-sizing: border-box;
       align-items: center;
       justify-content: center;
       flex: 1;
       `;
   const Flex =styled.div`
       justify-content: space-between;
       display:flex;
       align-items: center;
       
    `;

export default Nav