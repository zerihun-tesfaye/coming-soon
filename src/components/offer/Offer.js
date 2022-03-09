import React from 'react'
import  styled from 'styled-components'
import  Fi from "../../asset/image/figma-logo.svg"
import  XD from "../../asset/image/xd.svg"
const Offer = () => {
  return (
    <Container>
          <Content>
              <h2>what we offer?🤗</h2>
                <Ui>
                  <h3>UI/UX Design</h3>
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
                 <Web>
                    <h2>website development</h2>
                      
                 </Web>
                 {/* brfeak */}
                  <Mobile>

                  </Mobile>
                   
          </Content>
    </Container>
  )
}
const Container=styled.div`
   width:100%;
`
const Web=styled.div`
   width:100%;
`
const Mobile=styled.div`
   width:100%;
`
// 
const Ui=styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
padding:1rem 0;
 h3{
     text-align:center;
      text-transform:capitalize;
      letter-spacing:0.4px;
      font-size:1.3rem;
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
   width:1204px;
   /* height:700px; */
   margin:2rem 0;
   border-radius: 15px;
   h2{
     text-align:center;
      text-transform:capitalize;
      letter-spacing:0.4px;
      font-size:1.8rem;
   }
`
export default Offer;