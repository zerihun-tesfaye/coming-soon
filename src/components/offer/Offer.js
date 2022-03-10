import React from 'react'
import  styled from 'styled-components'
import  Fi from "../../asset/image/figma-logo.svg"
import  XD from "../../asset/image/xd.svg"
const Offer = () => {
  return (
    <Container>
       <div className="hrz">
              <h2>what we offer?🤗</h2>
              <div className="line"></div>
         </div>
          <Content>
                <Ui>
                  <h3>UI | UX Design</h3>
                    <div className="circle_u">
                        <div className="Img_f">
                            <img src={Fi} alt="" />
                        </div>
                         
                        <div className="Img_f">
                             <img src={XD} alt="" />
                        </div>
                         
                    </div>
                </Ui>
                {/* break */}
                 <WBcon>

                 <Web>
                    <h3>website development</h3>
                        <Webcon>
                            <div className="off">
                               <span className="hcj"></span>
                               <h5>Html. CSS .JS</h5>
                            </div>
                            <div className="off">
                               <span className="pd"></span>
                               <h5>Python. Django</h5>
                            </div>
                            <div className="off">
                               <span className="nrn"></span>
                               <h5>NodeJs. React. NextJs</h5>
                            </div>
                        </Webcon>
                      </Web>

                 {/* brfeak */}
                  <Mobile>
                   <h3>Mobile Development</h3>
                  <Webcon>
                    <div className="off">
                        <span className="zk"></span>
                        <h5>kotlin</h5>
                    </div>
                    <div className="off">
                        <span className="zf"></span>
                        <h5>flutter</h5>
                    </div>
                    <div className="off">
                        <span className="zs"></span>
                        <h5>swift | ios</h5>
                    </div>
                 </Webcon>
              </Mobile>
            </WBcon>
         </Content>
    </Container>
  )
}
const Container=styled.div`
    width:100%;
    display:flex;
    align-items: center;
    justify-content:center;
    flex-direction:column;
    margin-top:2rem;
    .hrz{
      position:relative;
      h2{
          text-transform:capitalize;
          font-size:1.5rem;
          font-weight:400;
      }
       .line{
         position:absolute;
         width:50%;
         height:.321rem;
         background:#6709CC;
         border-radius:1.2rem;
         
       }

    }

`
const WBcon=styled.div`
   width:100%;
   display:flex;
   align-items: center;
   justify-content:center;
   gap:1rem;
   margin:1rem 0;
    @media screen and (max-width:978px){
      flex-direction:column;
    }
`
const Web=styled.div`
   display: flex;
   align-items: center;
   justify-content:center;
   flex-direction:column;
   border-radius:15px;
   width:220px;
   height:160px;
    border:0.4px solid #6709CC;
   margin:1.3rem 0;

    @media screen and (max-width:978px){
       width:270px;
       box-shadow: 0 0 18px #00FFD8;
    }
    @media screen and (max-width:500px){
       width:250px;
       box-shadow: 0 0 18px #00FFD8;
    }
    h3{
      text-align:center;
      text-transform:capitalize;
      letter-spacing:0.4px;
      font-size:16px;
      font-weight:400;
    }
      h5{
      font-size:14px;
      font-weight:300;
      text-transform:capitalize;
   }
`
const Webcon=styled.div`
display:flex;
align-items:start;
justify-content:start;
flex-direction:column;
margin-top:1rem;;
.off{
  align-items:center;
  justify-content:start;
  display:flex;
  gap:.521rem;
  /*  */
   .hcj{
     background-color:#0D9A0D;
   }
   .pd{
     background-color:#C1B30C;
   }
   .nrn{
     background-color:#0A3A48;
   }
   /*  */
   .zk{
     background-color:#990CC3;
   }
   .zf{
     background-color:#09C0EB;
   }
   .zs{
     background-color:#29BAA4;
   }
   /*  */
  span{
      width:1rem;
      height:1rem;
      background:#fff;
      border-radius:50px;
      margin:.223rem 0;
  }
}
`
// 
const Mobile=styled.div`
   display: flex;
   align-items: center;
   justify-content:center;
   flex-direction:column;
   border-radius:15px;
   width:220px;
  height:160px;
  margin:1.3rem;
  border:.99px solid #6709CC;
   h3{
      font-size:16px;
      font-weight:400;
   }
   h5{
      font-size:14px;
      font-weight:300;
      text-transform:capitalize;
   }

   @media screen and (max-width:978px){
       width:270px;
       box-shadow: 0 0 18px #00FFD8;
    }
   @media screen and (max-width:500px){
       width:250px;
       box-shadow: 0 0 18px #00FFD8;
    }
`
// 
const Ui=styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;
  width:220px;
  border-radius:15px;
  height:100px;
 border:.90px solid #0C7DC3;
  @media screen and (max-width:978px){
       width:250px;
       height:120px;
       box-shadow: 0 0 18px #00FFD8;
    }

 h3{
      text-align:center;
      text-transform:capitalize;
      letter-spacing:0.4px;
      font-size:16px;
      margin-top:1.2rem;
      font-weight:400;
   }
.circle_u{
      display: flex;
      align-items: center;
      justify-content:center;
      gap:1rem;
      margin:1rem 0;
 }
`
const Content=styled.div`
   
   height:100%;
   margin:2rem 0;
   border-radius: 15px;
   justify-content:center;
   align-items:center;
   display:flex;
   flex-direction:column;
   h2{
     text-align:center;
      text-transform:capitalize;
      letter-spacing:0.4px;
      font-size:1.8rem;
   }
`
export default Offer;