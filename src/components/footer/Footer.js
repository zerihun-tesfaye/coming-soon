import React from 'react'
import  styled from 'styled-components'
const Footer = () => {

  return (
    <Container>
      <Content>
         <div className="title">
              <h5> &copy; 2022<span> ZetaHut</span></h5>
               <div className="link">
                    <h6>Design</h6>
                    <h6>project</h6>
                    <h6>Price</h6>
                 </div>
           </div>
           <div className="Z_S-icon">
               <li>
                 <a href="http://www.linkedin.com/in/zerihun-tesfaye">
                   <i className="fa fa-linkedin" aria-hidden="true"></i></a>
                 </li>
               <li>
                 <a href="http://www.github.com/zetahut">
                   <i className="fa fa-github" aria-hidden="true"></i></a>
                 </li>

                  <li>
                  <a href="http://www.twitter.com/zerihun16t">
                    <i className="fa fa-twitter" aria-hidden="true"></i></a>
                 </li>
                  <li>
                  <a href="https://www.youtube.com/channel/UCSrOQX6Cf0MO7w9zkAinPIA">
                    <i className="fa fa-youtube-play" aria-hidden="true"></i></a>
                 </li>
                  <br />
                  <li>
                  <a href="http://www.facebook.com/zetahut">
                    <i className="fa fa-facebook" aria-hidden="true"></i></a>
                 </li>

             

            </div>
        
      </Content>

    </Container>
  )
}
const Container=styled.div`
    width:100%;
    padding-top:10px;
    height:100%;
   
       @media screen and (max-width:978px){
       flex-direction:column;
        margin-bottom:2.2rem;
    }
  `
  const Content=styled.div`
    display: flex;
    align-items: center;
    justify-content:space-around;
    padding-bottom:1.2rem;
     @media screen and (max-width:978px){
      flex-direction:column;
        margin:0 auto;
        gap:1rem;
        padding-bottom:1rem;
    }
    .title {
       display : flex;
       align-items: center;
       gap:1rem;
       text-transform: capitalize;
       @media screen and (max-width:978px){
         flex-direction:row;
    }
        h5{
          gap:1.6rem;
          font-weight:700;
          font-size:1rem;
        }
       .link{
        display : flex;
        align-items: center;
        gap:.6rem;
       }
       h6{
         text-align: center;
         font-size:.743rem;
         letter-spacing:0.5px;
         cursor:pointer;
         transition: all 0.3s;
         &:hover{
           opacity:0.7;
         }
       }
    }
    .Z_S-icon{
      display:flex;
      align-items: center;
      gap:1rem;
          li{
            list-style-type: none;
              gap:1rem;
              .fa-youtube-play{
                color:#FF0000; 
                font-size:1.6rem;
              }
              .fa-linkedin{
                  color:#0e76a8;
                   font-size:1.6rem;
              }
              .fa-facebook{
                    color: #3b5998; 
                    font-size:1.6rem;
              }
              .fa-twitter{
                  color:#00acee; 
                  font-size:1.6rem;
              }
              .fa-github{
                  font-size:1.6rem;
              }
            a{
              text-indent: 100%;
              white-space: nowrap;
              overflow: hidden;
              color: white;
              text-decoration: none;
              font-weight: 500;
              font-size:1.2rem;
              transition: all 0.3s;
              &:hover{
              opacity:0.7;
             }
            
            }
          }
        }
      `;

export default Footer;