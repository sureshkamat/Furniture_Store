import { FETCHDATA, FETCHERROR, FETCHFURNITURE, FETCHLOADING, SIGNIN, SINGLEDATA } from "./actionTypes";

const initState={
    isLoading:false,
    isError:false,
    isAuth:false,
    data:[],
    furniture:[],
    singleData:[]
}

const reducer=(state=initState,action)=>{
    switch(action.type){
            case FETCHLOADING:{
                return {...state,isLoading:true}
            }
            case FETCHDATA:{
                return {...state,isLoading:false,data:action.payload}
            }
            case FETCHFURNITURE:{
                return {...state,isLoading:false,furniture:action.payload}
            }
            case SINGLEDATA:{
                return {...state,isLoading:false,singleData:action.payload}
            }
            case FETCHERROR:{
                return {...state,isError:true}
            }
            case SIGNIN:{
                return {...state,isAuth:!state.isAuth}
            }
            
        default:
            return state;
    }
}

export { reducer };
