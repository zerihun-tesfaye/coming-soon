import React from 'react'
import  styled from 'styled-components'
import Pro  from '../asset/image/gg.jpg'
import Mobile  from '../asset/image/mobile.jpg'
import Code  from '../asset/image/code.png'

const Home = () => {
  return (
    <Container>
        <Content>
          
             <Title>
                <h1>we are cooking our website stay tuned</h1>
               <h2>Design.Build</h2>
               <h5>I create  a beautiful websites your users will love</h5>
               <small>coming soon</small>
             </Title>
               <Singup>
                  <form action="">
                      <div className="Z_con">
                       <div className="box">
                        <input type="text" placeholder="Email" required/>
                        </div>
                         <button type="submit">notify me</button>
                      </div>
                  </form>
               </Singup>
            
               
             </Content>
                 {/* 
                  */}
                   <Section>
                     <Card>
                          <div className="Z_img">
                             <img src={Mobile} alt="design" />
                            </div>
                           <div className="content">
                               <h4>hello</h4>
                               <p>description</p>
                           </div>
                       </Card>
                       <Card>
                          <div className="Z_img">
                             <img src={Code} alt="design" />
                            </div>
                           <div className="content">
                               <h4>hello</h4>
                               <p>description</p>
                           </div>
                       </Card>
                       <Card>
                      <div className="Z_img">
                          <img src={Pro} alt="design" />
                        </div>
                        <div className="content">
                            <h4>hello</h4>
                            <p>description</p>
                        </div>
                 </Card>
            </Section>
    </Container>
  )
}
const Container=styled.div`
   width:100%;
   display:flex;
   align-items:center;
   justify-content:center;
   flex-direction:column;
  `
const Content=styled.div`
    display:flex;
    align-items:center;
    flex-direction:column;
    justify-content:center;
    margin:5rem auto;
    width:100%;
`;
const Title=styled.div`
display:flex;
align-items:center:
justify-content:center;
flex-direction:column;
text-align:center;
   h2{
     margin-bottom:.51rem;
     font-weight:500;
     letter-spacing:0.3px;
     text-transform:capitalize;
   }
   h1{
     margin-bottom:.51rem;
     font-weight:700;
     letter-spacing:0.3px;
     text-transform:capitalize;
   }
   h4{
       letter-spacing:0.3px;
        text-transform:capitalize;
       font-weight:400;
   }
    small{
         text-align:center;
          margin:.42rem 0;
         text-transform:capitalize;
         color:#03C6EA;

       }
`;
const Singup=styled.div`
    padding:1rem 0;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    width:100%;
    form{
      display:flex;
      align-items: center;
       .Z_con{
         display:flex;
         align-items: center;
          gap:.2rem;
          justify-content:center;
          width:100%;
          .box{
            position:relative;
            align-items: center;
            display: flex;
            
             input{
               width:100%;
               padding:10px .82rem;
               outline:none;
               border:none;
               margin:0 5px;
              border-radius:5px; 
              background:#1A1C23;
              border:1px solid #3B3A51; 
              color:white;
            }
          }
          button{
              background-color: #3B3A51;
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
              &:hover{
                opacity: 0.7;
              }

          }   
       }
    }
`;
//  
 const Section = styled.div`
   padding:20px 0;
   align-items:center;
   display: flex;
   justify-content:center;
   flex-direction:row;
   flex-wrap:wrap;
   gap:1.7rem;
    @media screen and (max-width:978px){
       flex-direction:column;
       margin:0 auto;
       gap:1rem;
    }
    h4{
      text-align:center;
    }
    
 `
 const Card = styled.div`
   width:270px;
   height:270px;
   box-sizing:border-box;
   /* background-image:linear-gradient(#03C6EA,#0FC9A5); */
   background:#3B3A51;
   border-radius:15px;
    .Z_img{
        width:270px;
        height:200px;
         img{
           width:100%;
           height:100%;
           object-fit:cover;
           border-radius:15px 15px 0px 0px;
         }
    }
    .content{
      display:flex;
      align-items:center;
      flex-direction:column;
      padding:5px 0;
    }
 `
export default Home;