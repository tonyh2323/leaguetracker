import React from 'react'
import Backgroundimg from "/src/Images/Backgroundimage.jpg";

export default function BackgroundRemove() {
  return (
    <div style={{ backgroundImage:`url(${Backgroundimg})` , 
    backgroundPosition: 'center',
    backgroundSize: "cover",
    backgroundRepeat:"no-repeat",
    width:"100vw",
    height: "80vh",
    backgroundImage:'none'
    
      }
    }/>
    
  )
  
}
