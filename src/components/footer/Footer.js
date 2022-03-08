import React from 'react'
import  styled from 'styled-components'
const Footer = () => {

  return (
    <Container>
      <Content>
         <div className="title">
             <span>zethut.com</span>
              <h6>Design</h6>
              <h6>project</h6>
              <h6>Team</h6>
              <h6>Price</h6>
           </div>
             <div className="Z-cop">
                 <h5> &copy; 2022<span> ZetaHut</span></h5>
               </div>
          
            <div className="Z_S-icon">
               <li>
                 <a href="http://www.linkedin.com/in/zerihun-tesfaye"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
               </li>
               <li>
                 <a href="http://www.linkedin.com/in/zerihun-tesfaye"><i class="fa fa-twitter" aria-hidden="true"></i></a>
               </li>
               <li>
                 <a href="http://www.linkedin.com/in/zerihun-tesfaye"><i class="fa fa-facebook" aria-hidden="true"></i></a>
               </li>

            </div>
        
      </Content>

    </Container>
  )
}
const Container=styled.div`
    width:100%;
    margin-top:2.5rem;
   
    
  `
  const Content=styled.div`
    display: flex;
    align-items: center;
    justify-content:space-between;
    margin:0 3.5rem;
    .Z-cop{
      display: inline-block;
      text-align: center;
      justify-content: center;
    }
      @media screen and (max-width:978px){
      flex-direction:column;
      margin:0 auto;
      gap:1rem;
    }
    .title {
       display : flex;
       align-items: center;
       gap:1rem;
       text-transform: capitalize;
       h6{
         text-align: center;
         font-size:.943rem;
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