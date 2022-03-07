import React,{useRef,useState,useEffect} from 'react'
import  styled from 'styled-components'
  const Contdown = () => {
  const [hour,setHour]=useState('15');
  const [minute,setMinute]=useState('09');
  const [second,setsecond]=useState('59');
  
  let interval=useRef();

   const startTime=()=>{
      const count= new Date('Mar 30, 2022 00:00:00').getTime();
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
        clearInterval(interval.current);
      }
    })
  return (
    <Container>
         <Con> 
             <Section>
                <p>{hour}</p>
                <span>:</span>
             </Section>
             <Section>
                <p>{minute}</p>
               <span>:</span>
             </Section>
             <Section>
                <p>{second}</p>
             </Section>
         </Con>
    </Container>
  )
}
const Container=styled.div`
   background: #161B22 ;
   color: white;
   align-items: center;
  `;
const Con=styled.div`
  display:flex ;
  gap:.4rem;
  min-width:7em;
  text-align:center;
  color: #000;
  align-items:center;
  justify-content:center ;
  text-align: center;
  line-height:2;
`;
const Section=styled.div`
    display:flex ;
    gap:.3rem;
    text-align: center;
    align-items: center;
    color: white;
    p{
      font-size:1rem;
      font-weight:400 ;
    }
    span{
      font-size:1rem;
      font-weight:bold;
    }
  `;
export default Contdown;