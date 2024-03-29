import React,{useRef,useState,useEffect} from 'react'
import  styled from 'styled-components'
  const Contdown = () => {
  const [hour,setHour]=useState('15');
  const [minute,setMinute]=useState('09');
  const [second,setsecond]=useState('59');
  
  let interval=useRef();

   const startTime=()=>{
      const count= new Date('Sep 30, 2022 00:00:00').getTime();
       interval =setInterval(()=>{
          const now=new Date().getTime();
          const distance = count - now;
           //  
            const hour =Math.floor((distance % (1000 * 60 * 60 * 24) /(1000 * 60 *60)));
            const minute =Math.floor((distance % (1000 * 60 * 60)) /(1000 * 60));
            const second =Math.floor((distance % (1000 * 60)) / 1000 );
              //
               if(distance < 0){
                //  stop
                 clearInterval(interval.current);
                 
               } else{
                 setHour(hour);
                 setMinute(minute);
                 setsecond(second);
               }
            
       },1000);
   }
    useEffect(()=>{
      startTime();
      return()=>{
        clearInterval(interval);
      }
    })
  return (
    
         <Con> 
             <Section>
                <Count>{hour}</Count>
                <div className="div">:</div>
             </Section>
             <Section>
                <Count>{minute}</Count>
              <div className="div">:</div>
             </Section>
             <Section>
                <Count>{second}</Count>
             </Section>
         </Con>
    
  )
}
const Count=styled.div`
      font-size:1rem;
      font-weight:400 ;
      font-weight:400;
  
  `;

const Con=styled.div`
  display:flex ;
  gap:.3rem;
  text-align:center;
  color: #000;
  align-items:center;
  justify-content:center ;
  text-align: center;
  overflow: hidden;
  min-width: 5em;
`;
const Section=styled.div`
    display:flex ;
    gap:.2rem;
    text-align: center;
    align-items: center;
    color: white;
    overflow: hidden;
    div{
      font-size:1rem;
      font-weight:400 ;
      font-weight:400;
    }
  .div{
      font-size:1rem;
      font-weight:bold;
    }
  `;
export default Contdown;