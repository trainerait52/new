import React, {useState} from "react";




const Quantity= () => {
    const [counter,setCounter] = useState(1)
    const increement = () => {
        setCounter (counter + 1)
    }

    const decreement = () => {
        setCounter (counter - 1 )
         
    }

    return(
        <div style={{
            display:"flex",
            flexDirection:"row",
            alignItems:"center",
            justifyContent:"center",
            fontSize:"10px",
            position:"relative",
            width:"10px",
            height:"10px",
            top:"20px"
        }}>
            
           <div>
            <button className="add" style={{
                fontSize:"100%",
                position:"relative",
                top:"20vh",
                marginRight:"10px",
                backgroundColor:"green",
                borderRadius:"20%",
                color:"white",
                marginLeft:"350px",
                marginBottom:"300px"

            }} onClick={increement}>+</button>
            </div>
            <h1 style={{
                fontSize:"25px",
                position:"relative",
                top:"20vh",
                borderRadius:"8%",
                marginLeft:"-150px",
                marginBottom:"312px"
            }}>CART:{counter}</h1>
            
            
            <div>
            <button className="minus" style={{fontSize:"100%",
                position:"relative",
                top:"20vh",
                marginRight:"10px",
                backgroundColor:"red",
                borderRadius:"20%",
                color:"white",
                marginLeft:"100px",
                marginBottom:"300px"

            }} onClick={decreement}>-</button>
            </div>

           
        </div>
    )
}

export default Quantity