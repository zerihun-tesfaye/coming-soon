import React from 'react'
import  styled from 'styled-components'
import Contdown from '../count/Contdown';

const Nav = () => {
  return (
    <Header>
          <NavC>
            <div><Contdown/></div>
                  <Logo>
                     <span>zeta <span className='hut'>Hut</span> </span>
                  </Logo>
                     <Cart>
                       <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" 
                       xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round"
                       strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 
                       00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
                </Cart>
             </NavC>
         </Header>
             
           
  )
}
 const Header=styled.div`
   width:100%;
   align-items:center;
   padding:10px 0;
  height:3.5rem;
  `;
 const Logo=styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
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