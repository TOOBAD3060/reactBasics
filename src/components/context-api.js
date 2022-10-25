import React,{useState,useContext} from "react";

// more components
// fix - context api, redux (for more complex cases )

const PersonContext = React.createContext();
// two components - provider and the consumer

const ContextApi = () => {
    const [people,setPeople] = useState([{id:1,name:"Toxco"},{id:5,name:"King"},{id:2,name:"Tee-Master"}])
    const removePerson = (id) => {
        setPeople((prevValue) => {
            return prevValue.filter((person) => person.id !== id)
        })
    }
    
    return <PersonContext.Provider value={removePerson}>
        <h2>Context API</h2>
        <List people={people}  />
    </PersonContext.Provider>
};

const List = ({people,removePerson}) => {
    return <>
    {people.map((person)=>{
        return  <SinglePerson key={person.id} {...person}  />
    })}
    </>
}

const SinglePerson = ({id,name})=>{
    const data = useContext(PersonContext)
    return <div>
        <h4>{name}</h4>
        <button onClick={()=>data(id)}>Remove Person</button>
    </div>
}

export default ContextApi;