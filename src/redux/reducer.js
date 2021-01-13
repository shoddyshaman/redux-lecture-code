//create initial state
const initialState = {
    //state items you want to share go here
    user: {}
    
}

//Variables for action types avoid silent errors
const GET_USER = 'GET_USER'

//action-builders contain the information for the reducer function to change state
export function getUser(userObj) {
    //return action object 
    return {
        //action always contain an action prop and payload prop
        type: 'GET_USER',
        payload: userObj
    }
}

//Reducer function is the control center of the reducer file. it is what actually changes state, based on info from the action builders
export default function reducer(state = initialState,action) {
    const {type,payload} = action;

    switch(type) {
        case GET_USER:
            return {...state, user: payload}
        default:
            return state;
    }
}

