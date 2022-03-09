import React,{useState} from 'react'
import  styled from 'styled-components'
import Contdown from '../count/Contdown';
import '../../index.css'
import { Link } from 'react-router-dom';

const Nav = () => {
   const [show,setShow]=useState(false);
   const [cart,setcart]=useState(false);

   const cartshow=()=>{
      setcart(!cart);
   }
    const changeMenubg=()=>{
      if(window.scrollY >=60){
          setShow(true);

      }else{
        setShow(false);
      }
    }
    window.addEventListener('scroll',changeMenubg);
  return (
    <Header className={show ? "active" : "header"}>
          <NavC>
            <div><Contdown/></div>
                  <Logo>
                    <Link to="/">
                     <span>zeta<span className='hut'>Hut</span> </span>
                    </Link>
                  </Logo>
              
                   
                    <CartCon> 
                       <Cartbag className={cart ? "activec":"modal"}>
                           <div className="data">
                                 <p>your bag is empty! Keep shopping 👜</p>
                                  <small>coming soon 🛒</small>
                                    <Link onClick={()=>cartshow(0)} to="/">
                                       <span> ⬅ back to Home 🛖</span>
                                      </Link>
                             </div>
                        </Cartbag> 
                     <Cart>
                       <div onClick={()=>cartshow(!cart)}>
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round"
                        strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 
                        00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
                       </div>
                        
                  </Cart>
               </CartCon>
              
             </NavC>
         </Header>
             
           
  )
}
 const Header=styled.div`
   width:100%;
   align-items:center;
   padding:10px 0;
   height:50px;

  
  `;
 const Logo=styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
     a{
       text-decoration:none;
       color:white;

     }
     span{
       font-size:1.3rem;
       text-transform: capitalize;
       letter-spacing:2px;
       font-weight:bold;
        .hut{
          color: #6709CC;
        }
     
     }
   `;
 const Cart=styled.div`
   cursor:pointer;
     svg{
       width:1.7rem;
       height:1.7rem;
     }
   `;
//  
 const Cartbag=styled.div`
        position:absolute;
        top:55px;
        height:150px;
        width:200px;
        right:-100%;
        border-radius:10px;
        transition:all 0.3s ease-in-out;
        z-index:100;
        box-shadow:0 0 20px #aad ;
        @media screen and (max-width:970px){
          background-color:#eee;
          right:0;

        }
      .data{
         display:flex;
         align-items: center;
         justify-content: center;
         flex-direction:column;
         top:40%;
         position:absolute;
         left:50%;
         transition:all 0.3s;
         width:100%;
         transform:translate(-50%,-50%);
         p{
           padding-bottom:.1rem;
           color:white;
          text-transform: capitalize;
          text-align:center;
          font-size:10px;
           @media screen and (max-width:970px){
            font-size:.522rem;
            word-wrap: break-word;
            }

         }
         small{
            text-transform: capitalize;
            margin-top:.331rem;
            color:#01ACEE;
         }
         a{
           text-decoration:none;
           color:#0E76A8;
           margin-top:.331rem;
           text-transform: capitalize;
           span{
              font-size:1rem;
              margin-top:.55rem;
             @media screen and (max-width:970px){
                 margin:.331rem auto ;
                 font-size:.632rem;
           }
           }

         }

      }
      
      @media  screen and (max-width:968px){
         
        }
      
      
   `;
 const CartCon=styled.div`
      position:relative;
      
   `;
   
   const NavC =styled.div`
       display:flex;
       align-items: center;
       justify-content:space-between;
       margin:0 4.5rem;
       
    @media  screen and (max-width:968px){
       margin:0  1.4rem auto;
       align-items: center;
    }
  `;
   

export default Nav