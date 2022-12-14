export const reducer = (state,action)=>{
    if(action.type === 'ADD_ITEM'){
        const newPeople = [...state.people,action.payload]
        return {
            ...state,
            people: newPeople,
            isModalOpen:true,
            modalContent: 'Item added'
        }
    }

    if(action.type === 'NO_VALUE'){
        return {
            ...state,isModalOpen:true,modalContent:"Please enter value"
        }
    }
    if (action.type === 'CLOSE_MODAL'){
        return {
            ...state,isModalOpen:false
        }
    
    }
    if (action.type === 'REMOVE_PERSON'){
        const newPeople = state.people.filter((person)=> person.id !== action.payload.userID)
        
        return {
            ...state,people:newPeople,isModalOpen:true,modalContent:`You removed ${action.payload.userName}`
        }


    }
    // return state
    throw new Error('no matching action type')
}
