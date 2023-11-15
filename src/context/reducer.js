import ACTION from "./action";
const updateLocalStorage= (state)=>{
    localStorage.setItem("state",JSON.stringify(state));
    return state;
}

const reducer = (state,action) =>{ // gia dinh rang trong action se co 2 thuoc tinh
    switch(action.type){
        case ACTION.UPDATE_CART: return updateLocalStorage({...state,cart:action.payload,loading:true});
        case ACTION.SHOW_LOADING: return updateLocalStorage({...state,loading:true})
        case ACTION.HIDE_LOADING : return updateLocalStorage({...state,loading:false})
        case ACTION.LOGIN: return updateLocalStorage({...state,token: action.payload.token,user:action.payload.user,loading: true});
    }
}
export default reducer