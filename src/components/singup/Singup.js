import React from 'react'
import  styled from 'styled-components'

const Singup = () => {


  return (
    <Container>

        <form action="https://formsubmit.co/zetahut@gmail.com"method='Post'>
        <Incard>
          <div className="box">
            <input type="email" name="email"placeholder="Enter your email"
             required="true" />
             <input type="hidden" name="_captcha" value="false"/>
             <input type="hidden" name="_next" value="https://zetahut.com/"/>
             
               
             </div>
            <button  type='submit'>notify me</button>   
        </Incard>
      </form>
    
      <small> Please leave your email above and <br />
              we'll notify you when we're ready!
          </small>
    </Container>

  )
}
const Container=styled.div`
  width:100%;
  small{
    margin:2px 0;
    font-size:.692rem;
    text-align: center; 
    align-items: center;
    justify-content: center;
    display: flex;
     @media screen and (max-width:967px){
         margin:1px 0;
       }
  }
`;
const Incard=styled.div`
  width:100%;
  display:flex;
  gap:.23rem;
  padding:10px 0;
  justify-content:center;
  align-items:center;
    .box{
      width:300px;
       @media screen and (max-width:967px){
         width:200px;
       }
       @media screen and (max-width:280px){
         width:150px;
       }
      input{
        width: 100%;
        height: 40px;
        border-radius:4px;
        align-items:center;
        padding:0 10px;
        outline:none;
        border:none;
        background-color:#3B3A51;
        color:#E2E8F0;
        text-transform: capitalize;
        &::placeholder{
          text-transform: normal;

        }
      }
      
    }
      button{
        background-color: #7000DF;
        color: white;
        padding: 4px 10px;
        border: none;
        cursor: pointer;
        opacity: 0.9;
        padding:10px .82rem;
        border-radius:5px ;
        transition:all 0.3;
        text-transform:capitalize;
        letter-spacing:0.5px;
        font-weight:500;
        height:40px;

        &:hover{
          opacity: 0.7;
        }
          @media screen and (max-width:280px){
                padding:10px .32rem;
       }
      }
   
`;

export default Singup;