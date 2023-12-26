import React from 'react'
 import styled from 'styled-components'
const Contact = () => {
return (
    <Container>
        <div className="hello">
             <span className="phone">
               <a href="tel:999***** ">
                   <i className="fa fa-phone"></i>
                  </a></span>
           </div>
    </Container>
            
  )
}
const Container=styled.div`
   width:100%;
   overflow:hidden;  
   text-align:center; 
   display:flex;
   align-items: center;
   justify-content:center;
   flex-wrap:wrap;
   flex-direction:column;
   position:relative ;
 
   /*  */
   .hello{
       padding:1rem 0;
       position:fixed;
       right:2rem;
       bottom:3.5rem;
       border-radius:5px;
       display:flex;
       align-items:center;
       justify-content:center;
       border:none;
       outline:none;
       flex-direction:column ;
        gap:1.4rem;
         background-color:#6709CC;
         width:2rem;
         height:2rem;
       
       z-index:100 ;
       @media screen and (max-width:970px){
          right:.441rem;
       }
       @media screen and (max-width:1024px){
          right:.541rem;
       }
     }
    
     .phone{
      
       display:flex;
       align-items:center;
       justify-content:center;
       text-align:center;
      }
     span{
       a{
         text-decoration: none;
         font-weight: bold;
         color:#C9D1D9;
         transition:all 0.3s;
          display:flex;
           align-items:center;
           justify-content:center;
          text-align:center;
         &:hover{
           opacity:0.7;
         }
         i{
            font-size:1.5rem;
         }
        }
      }    
      
`;


export default Contact
