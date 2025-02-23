import React from 'react'
import Background from "./Images/Backgroundimage.jpg";

export default function Backgroundpic() {
  return (
    <div style={{ backgroundImage:`url(${Background})` , backgroundRepeat:"no-repeat",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    height: "100vh",
    marginTop: "0px",
    marginBottom: "0px",
    marginRight: "-100%",
    padding: "0",
    marginLeft: "-90%",
    borderLeft: "0",
    fontSize: "50px"}}>
      
    </div>
  );
}
