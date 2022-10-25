import React,{useState} from "react";

// more components
// fix - context api, redux (for more complex cases )
const PropDrilling = () => {
    const [people,setPeople] = useState([{id:1,name:"Toxco"},{id:2,name:"Tee-Master"}])
    const removePerson = (id) => {
        setPeople((prevValue) => {
            return prevValue.filter((person) => person.id !== id)
        })
    }
    
    return <div>
        <h2>Prop Drilling</h2>
        <List people={people} removePerson={removePerson} />
    </div>
};

const List = ({people,removePerson}) => {
    return <>
    {people.map((person)=>{
        return  <SinglePerson key={person.id} {...person} removePerson={removePerson} />
    })}
    </>
}

const SinglePerson = ({id,name,removePerson})=>{
    return <div>
        <h4>{name}</h4>
        <button onClick={()=>removePerson(id)}>Remove Person</button>
    </div>
}

export {PropDrilling};