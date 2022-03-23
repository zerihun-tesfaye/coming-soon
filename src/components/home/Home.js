import React from 'react'
import  styled from 'styled-components'
import CardD from '../../data/CardData'
 import Footers from '../footer/Footer'
import Singups from '../singup/Singup'
import Com from '../../asset/image/fff.png'
import Offers from '../offer/Offer'
import Typewriter from 'typewriter-effect';
import Contact from '../Contact'
const Home = () => {

  return (
    <Container>
       <SubCon>
         <Content>
             <Title>
               <div className="Z6_text">
                <h1>we are cooking our website!</h1>
                  <span>
                    <img src={Com} alt="" />
                  </span>
                 </div>
                  <Type>
                     <Typewriter
                        options={{
                        strings:['<small id="ds">design</small>',
                        '<small id="db">Build</small>',
                        '<small id="di">improve</small>'],
                        autoStart: true,
                        string:("word."),
                        loop: true,
                        }}
                    />
                  </Type>
                <small>coming soon🚶🔥</small>
             </Title>
             <div>
            <Singups/>

             </div>
            </Content>

            <Scon>
                 <div className="title-c">
                        <div className="hrz">
                        <h3>Everything you need</h3>
                        <div className="line"></div>
                     </div>
                     <small>We create  a beautiful websites <br />
                        your users will love</small>
                  </div>
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
            </Scon>
               <div className="ZT-col">
                  <Offers/>
               </div>
            </SubCon>
             <div>
               <Contact/>
             </div>
             <div>
              <Footers/>
          </div>
    </Container>
                      
           

   
                      
  )
}
const Container=styled.div`
   width:100%;
  
   
  `
const Type=styled.div`
   display:flex;
   align-items: center;
   justify-content:center;
   text-align:center;
   color:#ddd;
   padding:7px 0;
   & #ds{
      font-size:1rem;
      color:#FFC300;
      font-weight:600;
      letter-spacing:.5px;

     }
    & #db{
      color:#33C3FF;
      font-size:1rem;
      font-weight:600;
      letter-spacing:.5px;
      

    }
    & #di{
      color:#dddddd;
      font-size:1rem;
      font-weight:600;
      letter-spacing:.5px;


    }
   
  `
const Scon=styled.div`
   width:100%;
   display:flex;
   align-items:center;
   justify-content:center;
   flex-direction:column;
   gap:1rem;
   .title-c{
   display:flex;
   align-items:center;
   justify-content:center;
   flex-direction:column;
   gap:.31rem;
   margin: .431rem 0;
   .hrz{
      position:relative;
      margin:.321rem 0;
      h3{
        margin:.21rem 0;
        text-transform:capitalize;
      }
      .line{
        position:absolute;
        width:50%;
        height:.321rem;
        background:#6709CC;
        border-radius:1.2rem;
        
      }

    }
      @media screen and (max-width:978px){
          p{
            margin:0 1.8rem ;
          }
       }
   }
  `;
const SubCon=styled.div`
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
    margin:7.3rem  0 auto;
`;
const Title=styled.div`
display:flex;
align-items:center:
justify-content:center;
flex-direction:column;
text-align:center;
    .title-c{
       small{
    margin:2px 0;
    font-size:.692rem;
    text-align: center; 
    align-items: center;
    justify-content: center;
    display: flex;
     }
    }
.Z6_text{
    display:flex;
    align-items:center;
    justify-content:center;
    gap:.752px;
    overflow:hidden;
     
    span{
      width:30px;
      height:30px;
      
        @media screen and (max-width:978px){
            width:20px;
            height:20px;
       }
      img{
        width:100%;
        object-fit:cover;
        height:100%;

      }
    }
}
   h2{
     margin-bottom:.41rem;
     font-weight:500;
     letter-spacing:0.3px;
     text-transform:capitalize;
      color:#ddd;
     display:flex;
     align-items:center;
     justify-content:center;
     text-align:center;
     gap:.31rem;
     font-size:0.94rem;
      
   }
   h1{
     margin-bottom:.51rem;
     font-weight:700;
     letter-spacing:0.3px;
     text-transform:capitalize;
     font-size:1.7rem;
       @media screen and (max-width:978px){
       font-size:20px;
       }
       @media screen and (max-width:500px){
       font-size:15px;
       font-weight:700;
       margin:0 auto;
    }
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
         align-items:center;

       }
`;
//  
 const Section = styled.div`
   padding:5px 0;
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
    @media screen and (max-width:820px){
       flex-direction:row;
       margin:0 auto;
       gap:1.2rem;
    }
    @media screen and (max-width:920px){
       flex-direction:row;
       margin:0 auto;
       gap:1.2rem;
    }
    h4{
      text-align:center;
    }
    
 `
 const Card = styled.div`
   width:270px;
   height:325px;
   box-sizing:border-box;
   background:#3B3A51;
   border-radius:15px;
   cursor:pointer;
   transition:all 0.3s;
   @media screen and (max-width:500px){
       width:250px;
       height:270px
       box-shadow: 0 0 18px #00FFD8;
    }
        
   &:hover{
    box-shadow: 1px 2px 3px 4px rgba(20,20,20,0.2);
    opacity:0.7;
   }
    .Z_img{
        width:270px;
        height:200px;
        @media screen and (max-width:500px){
       width:250px;
      
    }
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
        text-align:center;
        align-items:center;
        justify-content:center;
        font-weight:300;
        text-transform:capitalize;
        padding:0 .322rem;
      @media screen and (max-width:978px){
        text-align:center;
        margin-top:.44rem;
        @media screen and (max-width:500px){
            margin:0;
            padding:0;
            font-size:13px;
            text-align:center;
            align-items:center;
    }
       
    }

      }

    }
 `
export default Home;