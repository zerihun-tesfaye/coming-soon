import React from 'react'
import  styled from 'styled-components'
 import CardD from '../data/CardData'
import Contacts from './contact/Contacts'
 import Singups from './singup/Singup'

const Home = () => {
  return (
    <Container>
        <Content>
          
             <Title>
                <h1>we are cooking our website!</h1>
                <h2>Design  <h5>To</h5><span>.Build</span></h2>
                <h5>I create  a beautiful websites your users will love</h5>
                <small>coming soon</small>
             </Title>
             <div>
            <Singups/>

             </div>
            </Content>
                 {/* 
                  */}
                   <Section>
                  {
                    CardD.map((item,index)=>{
                       return(
                         <Card key={index}>
                          <div className="Z_img">
                             <img src={item.image} alt="design" />
                            </div>
                           <div className="content">
                               <h4>{item.title}</h4>
                               <p>{item.Description}</p>
                           </div>
                       </Card>

                       )
                    })
                  }
                      
            </Section>
             <div>
             <Contacts/>
             </div>

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
     color:#02DBC6;
     display:flex;
     align-items:center;
     justify-content:center;
     text-align:center;
     gap:.31rem;
      span{
          color:#FFD581;
        }
        h5{
          color:#B00020;
        }
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
//  
 const Section = styled.div`
   padding:20px 0;
   align-items:center;
   display: flex;
   justify-content:center;
   flex-direction:row;
   flex-wrap:wrap;
   gap:1.7rem;
   overflow:hidden;
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
   height:320px;
   box-sizing:border-box;
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
      width:100%;
      h4{
        word-wrap:break-word;
        padding-bottom:4px;
        font-size:1rem;
        font-weight:700;
        letter-spacing:.31px;
        text-transform:capitalize;
        color:white;
      }
      p{
        word-wrap:break-word;
        padding-top:4px;
        margin:0 .21rem;
        font-size:.852rem;
        text-align:start;
        align-items:center;
        justify-content:center;
        font-weight:300;
        text-transform:capitalize;
      @media screen and (max-width:978px){
        text-align:center;
        margin-top:.44rem;

       
    }

      }

    }
 `
export default Home;