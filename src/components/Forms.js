import React,{useState} from "react";

const Form = () => {

    const [people,setPeople] = useState({
        firstName:"",
        lastName:"",
        profession:""
    })
    const [peopleLists,setPeopleLists] = useState([])

    const handleChange = (e)=>{
       const {name,value} = e.target;

    //    setPeople((prevValue)=>{
    //     return {...prevValue,[name]:value}
    //    })
       setPeople({...people,[name]:value})
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
      setPeopleLists([...peopleLists,people])
      setPeople({
        firstName:"",
        lastName:"",
        profession:""
      })

    }

    return <>
        <h2>React Forms</h2>
        <article>
            <form>
                <h3>Hi, {people.profession} {people.firstName} {people.lastName}</h3>
                <div>
                    <label htmlFor="firstName">First Name: </label>
                    <input onChange={handleChange} id="firstName" value={people.firstName} name="firstName" type="text" />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name: </label>
                    <input onChange={handleChange} id="lastName" value={people.lastName} name="lastName" type={"text"} />
                </div>
                <div>
                    <label htmlFor="prof">Profession: </label>
                    <input onChange={handleChange} id="prof" value={people.profession} name="profession" type="text" />
                </div>

                <button type="submit" onClick={handleSubmit}>Submit</button>
            </form>

            {
                peopleLists.map((person)=>{
                    const {profession,firstName,lastName}=people;
                    return <div>
                        <h1>{profession}</h1>
    
                        <p> {firstName} {lastName} </p>
                    </div>
                })
            }

        </article>
    </> 
}

export default Form;