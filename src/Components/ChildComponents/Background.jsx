import React from 'react'
import Backgroundimg from "/src/Images/Backgroundimage.jpg";

export default function Backgroundpic() {
  return (
    <div style={{ backgroundImage:`url(${Backgroundimg})` , 
    backgroundPosition: 'center',
    backgroundSize: "cover",
    backgroundRepeat:"no-repeat",
    width:"100vw",
    height: "80vh",
    zIndex: 1,
      }
    }/>
    
  )
  
}
