import React from 'react'
import  styled from 'styled-components'
import CardD from '../../data/CardData'
 import Footers from '../footer/Footer'
import Singups from '../singup/Singup'
import Offers from '../offer/Offer'
import Typewriter from 'typewriter-effect';
import Contact from '../Contact'
import img1 from '../../asset/image/hdbgh.png'
const Home = () => {

  return (
    <Container>
       <SubCon>
         <Content>
           <div className='hero'>
            <div className="title">
               <h1>we are cooking our website! 👨‍💻</h1>
               <div className="type">

                     <Typewriter
                        options={{
                        strings:['<small id="ds">Website || mobile Development</small>',
                        '<small id="db">UI/UX design</small>','<small id="db">website Template</small>'],
                        
                        
                        
                        autoStart: true,
                        string:("word"),
                        loop: true,
                        }}
                      />
                 </div>
                 
                    <div className="p-g">
                      <p>Great web design without functionality is <br /> 
                      like a sports car with no engine. <i>"Paul Cookson"</i> </p>
                    </div>

                 </div>
               <div className="img-g">
                 <img src={img1} alt="" />
                </div>

               </div>
               {/*  */}
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
                      <div className="row">
                      <Card key={index}>
                        <div className="Z_img">
                            <img src={item.image} alt="design" />
                          </div>
                          <div className="content">
                              <h4>{item.title}</h4>
                              <p>{item.Description}</p>
                              <p className="phone-p">{item.phone}</p>
                          </div>
                       </Card>
                      </div>

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
   margin: 1rem 0;
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
    width:100%;
   
     .hero{
       display:flex;
       align-items:center;
       justify-content:space-between;
       padding-bottom:1rem;
       width:100%;
       max-width: 970px;
       margin: 0 auto;
       gap:1rem;
       @media screen and (max-width:970px){
         flex-direction:column;
         justify-content:center;
         margin:0 auto;

       }
       
       
       .img-g{
          max-width:500px;
          height:100%;
          width:100%;
          @media screen and (max-width:970px){
           flex-direction:column;
           justify-content:center;
           margin:0 auto;
         

       }
       
           img{
             width:100%;
             object-fit:cover;
             height:100%;
           }
       }
       /* title  */
       .title {
        display:flex;
        align-items:center:
        justify-content:center;
        flex-direction:column;
         @media screen and (max-width:970px){
           margin:0 1rem;

          }
            .type{
               display:flex;
               width:100%;
               align-items:center;
               text-transform:capitalize;
             
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
            color:#21618C;
            font-size:1rem;
            font-weight:600;
            letter-spacing:.5px;
            
            
          }
        }
        p{
          font-size: .744rem;
          i{
            color:#1F618D;
          }
        }
      }

   
   h1{
     margin-bottom:.51rem;
     font-weight:700;
     letter-spacing:0.3px;
     text-transform:capitalize;
     font-size:2.5rem;
       @media screen and (max-width:970px){
       font-size:1.2rem;
       }
       @media screen and (max-width:500px){
       font-size:1rem;
       font-weight:700;
       margin:0 auto;
    }
   }
   

       }
       /* heroend */
     
`;

//  
 const Section = styled.div`
   /* */
      display: grid;
      grid-template-columns:repeat(3,1fr);
      gap:1.1rem;
      row-gap:1.3rem;
    @media screen and (max-width:978px){
    flex-direction:column;
    margin:0 auto;
    grid-template-columns:repeat(1 ,1fr);
    }
    
    @media screen and (max-width:768px){
    margin:0 auto;
    grid-template-columns:repeat(1,1fr);
    }

   
    
   
    
    h4{
      text-align:center;
    
    }
  
    
 `
 const Card = styled.div`
   width:290px;
   height:100%;
   box-sizing:border-box;
   background:#3B3A51;
   border-radius:15px;
   transition:all 0.3s;
   @media screen and (max-width:500px){
       width:290px;
       height:100%;
       
    }
 
   @media screen and (max-width:280px){
       width:270px;
       height:100%;
       
    }
        
   &:hover{
    box-shadow: 1px 2px 3px 4px rgba(20,20,20,0.2);
    opacity:0.7;
   }
    .Z_img{
        width:290px;
        height:160px;
        @media screen and (max-width:500px){
        width:290px;
      
    }
        @media screen and (max-width:280px){
         width:270px;
      
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
        padding-bottom:7px;
        padding-top:4px;
        font-size:1rem;
        font-weight:700;
        letter-spacing:.61px;
        text-transform:capitalize;
        text-align:center;
        color:white;

          @media screen and (max-width:970px){
            font-size: .778rem;
          }
      }
      p{
        word-wrap:break-word;
        padding-top:4px;
        margin:0 .21rem;
        font-size:.652rem;
        align-items:center;
        justify-content:center;
        font-weight:300;
        text-transform:capitalize;
        padding:0 .422rem;
        padding-bottom:4px;
        text-align:center;
      @media screen and (max-width:978px){
        margin-top:.44rem;
         margin:0 .421rem ;
        @media screen and (max-width:500px){
            margin:0;
            padding:0;
            font-size:13px;
            align-items:center;
                    margin:0 .421rem ;

    }
       
    }

      }

    }
 `
export default Home;