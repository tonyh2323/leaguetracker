import React from 'react'
import Backgroundimg from "./Images/Backgroundimage.jpg";

export default function Backgroundpic() {
  return (
    <div style={{ backgroundImage:`url(${Backgroundimg})` , 
    backgroundRepeat:"no-repeat",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    height: "100vh",
    marginTop: "0px",
    marginBottom: "0px",
    padding: "0",
    marginLeft: "-16vw",
    borderLeft: "0",
    fontSize: "50px",
    width:"100vw"
      }
    }/>
    
  )
  
}
