import React from 'react'
import Typewriter from 'typewriter-effect';

const Types = () => {
  return (
    <div>
       <Typewriter
          options={{
          strings: ['oops', 'hi'],
          autoStart: true,
          loop: true,
           }}
       />
    </div>
  )
}

export default Types;