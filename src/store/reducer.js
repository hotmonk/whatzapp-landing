
const initialState={
    loggedIn: false,
    mobile: null,
}

const reducer=(state=initialState, action)=>{
    if(action.type==='LOGIN'){
        // console.log(action.localId, action.idToken)
        return {
            loggedIn:true,
            mobile: action.mobile,
        }
    }
    if(action.type==='LOGOUT'){
        return {
            loggedIn: false,
            mobile: null,
        }
    }
    return state;
}

export default reducer; 