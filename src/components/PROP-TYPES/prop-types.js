import React from "react";
import Info from "./info";
import { Data } from "./Data";

const Main = () => {

    return <div>
        
        {
    Data.map((datum)=>{
        const {id,sex,name,age} = datum
        return <Info  key={id} {...datum}/>
    })
        }
    </div>
}

export default Main;