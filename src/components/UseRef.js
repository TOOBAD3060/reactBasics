import React,{useEffect, useRef} from "react";

// preserves value
// Does not trigger re-render
// target DOM nodes/elements

const UseRefBasics = ()=>{

    const refContainer = useRef(null)
    const divContainer = useRef(null)
    const handleSubmit = (e)=>{
            e.preventDefault();
            console.log(refContainer.current.value );
            console.log(divContainer.current.textContent );
    }
    useEffect(()=>{
        refContainer.current.focus()
    })
return <>
        <form onSubmit={handleSubmit}>
            <div>
                <input type="text"  ref={refContainer} />
                <button type="submit">Submit</button>
            </div>
        </form>
        <div ref={divContainer}>Hello</div>
</>
}

export default UseRefBasics;