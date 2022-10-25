import React,{useState,useReducer} from "react";
import Modal from "./Modal"

//import reducer function
import {reducer} from "./reducer"
const defaultState={
    people:[],
    isModalOpen:false,
    modalContent:'hello world'
}
const UseReducerBasics = ()=>{
const [name, setName]= useState('');
const [state, dispatch] = useReducer(reducer, defaultState);

const handleSubmit = (e)=>{
    e.preventDefault();

    if(name){
        const newPerson={id:new Date().getTime().toString(),name}
        dispatch({type:'ADD_ITEM',payload:newPerson});
        setName('')
    }
    else{
            dispatch({type: 'NO_VALUE'})
    }
}

const closeModal= ()=>{
    dispatch({type:'CLOSE_MODAL'})
}
   return <>
        <h2>Use Reducer Concepts</h2>
        {state.isModalOpen && <Modal closeModal={closeModal} modalContent={state.modalContent}/>}
        <form onSubmit={handleSubmit}>
            <div>
                <input type="text" value={name}  onChange={(e)=>{
                    setName(e.target.value)
                    }} />
                <button type="submit">Add</button>
            </div>
        </form>
        {state.people.map((person)=>{
            return <div key={person.id}>
                    <h4>{person.name}</h4>
                    <button onClick={()=>{
                        dispatch({type:'REMOVE_PERSON',payload:{userID:person.id,userName:person.name}})
                    }}>Remove</button>
            </div>
        })}
    </>
}

export default UseReducerBasics;
