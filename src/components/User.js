import React, {useState,useEffect} from "react"

const MyFav = ({children})  => {
   
    const [value,setValue] = useState(0);
    
    useEffect(()=>{
        console.log("Effect");
    },[])

 return <>
      <h3>Let's Count</h3>
      <p>{value}</p>
      <p>{children}</p>
      <button onClick={()=> setValue(value+1)}>Increase</button>
 </>
}

export default MyFav;