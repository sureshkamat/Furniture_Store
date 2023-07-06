import { FETCHDATA, FETCHERROR, FETCHLOADING } from "./actionTypes";

const initState={
    isLoading:false,
    isError:false,
    data:[]
}

const reducer=(state=initState,action)=>{
    switch(action.type){
            case FETCHLOADING:{
                return {...state,isLoading:true}
            }
            case FETCHDATA:{
                return {...state,isLoading:false,data:action.payload}
            }
            case FETCHERROR:{
                return {...state,isError:true}
            }
        default:
            return state;
    }
}

export { reducer };
