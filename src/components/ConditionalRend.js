import React, {useState,useEffect} from "react";
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturns = () => {
    const [isLoading,setIsLoading] = useState(true);
    const [isError,setIsError] = useState(false);
    const [user,setUser] = useState("Default User")

useEffect(()=>{
    fetch(url)
    .then(resp=>{
       if (resp.status >=200 && resp.status <= 299){
       return resp.json()
       }
       else{
        setIsLoading(false)
        setIsError(true)
        throw new Error(resp.statusText)
       }
       
    })
    .then(user=>{
     const {login} = user;
     setIsLoading(false)
     setUser(login)
     
    }).catch(err=>console.log(err))
},[])

// if(isLoading){
//     return <>
//          <h2>Loading ..........</h2>
//     </>
// }
// if (isError) {
//     return <>
//         <h2> Error while fetching</h2>
//     </>
// }

//     return <h2>{user}</h2>

return (
    <>
    {isLoading ? <h2>Loading .....</h2> : isError ? <h2>Error while fetching ...</h2> : <h2>{user}</h2>}
    
    </>
)


}
export default MultipleReturns; 