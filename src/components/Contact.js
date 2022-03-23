import React from 'react'
 import styled from 'styled-components'
const Contact = () => {
return (
    <Container>
      <div className="title">
         <h3>Contact</h3>
         <div className="line"></div>

      </div>

       <div className="contact">
          <div className="input-in">
              <span><i className="fa fa-envelope"></i></span>
              <input type="email" placeholder="info@zetahut.com" disabled="disabled"/>
           </div>
       </div>
           <div className="hello">
             <span className="">
               <a href="tel:0910152949 ">
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
   .title{
     position: relative;
     margin: .331rem 0;
     h3{

     }
     .line{
        position:absolute;
        width:60%;
        height:.321rem;
        background:#6709CC;
        border-radius:1.2rem;
        
     }
   }
   .contact{
      justify-content: center;
      display:flex;
      align-items:center;
       box-shadow: 0 0 8px #6709CC;
      width:250px;
      height:100px;
      border-radius: 15px;
      margin:10px 0;
      
     }
     /*  */
     .input-in{
       align-items:center;
       display:flex;
       justify-content:start;
       overflow:hidden;
       width:200px;
       margin:.331rem 0;
       input{
          width:100%;
          height:40px;
          border:none;
          outline:none;
          color:white;
          position:relative;
          background-color:#212F3C ;
          border-radius:5px;
          &::placeholder{
            padding:0 2rem ;
            color:white;
            letter-spacing:.5px;
            font-size:1em;
          }

       }
       span{
         position:absolute;
         padding:6px 9px;
         color:white;

       }

     }
     /*  */

   }
   /*  */
   .hello{
       padding:1rem 0;
       position:fixed;
       right:3.5rem;
       bottom:4rem;
      background-color:#6709CC;
      width:2.3rem;
      height:2.3rem;
      border-radius:5px;
      display:flex;
      align-items:center;
      justify-content:center;
      border:none;
      outline:none;
      z-index:100 ;
       @media screen and (max-width:970px){
          right:.441rem;
       }
       @media screen and (max-width:1024px){
          right:.541rem;
       }
     }
     span{
       a{
         text-decoration: none;
         font-weight: bold;
         color:#C9D1D9;
         transition:all 0.3s;
         &:hover{
           opacity:0.7;
         }
         i{
            font-size:2rem;
         }
      
`;


export default Contact