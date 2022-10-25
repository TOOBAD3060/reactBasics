import React,{useState,useEffect} from "react";





const ShowHide = ()=> {
    const [show,setShow] = useState(false)
    
    return <>
     <button onClick={()=>setShow(!show)}>show/hide</button>
       
       {show && <Item />}
    </>
} 

const Item =  ()=>{
    const [size,setSize] = useState(window.innerWidth)
const handleSize = ()=>{
    setSize(window.innerWidth)
    console.log("nice")
}
    useEffect(()=>{
        window.addEventListener("resize",handleSize);
          return ()=> window.removeEventListener("resize",handleSize)
    },[])

    return <div style={{marginTop:"2rem"}}>
         <h1>Window</h1>
          <h2>size : {size}</h2>
    </div>
}



export default ShowHide;
