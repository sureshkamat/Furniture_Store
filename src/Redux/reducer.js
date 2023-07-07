import { FETCHDATA, FETCHERROR, FETCHFURNITURE, FETCHLOADING } from "./actionTypes";

const initState={
    isLoading:false,
    isError:false,
    isAuth:false,
    data:[],
    furniture:[]
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
            case FETCHERROR:{
                return {...state,isError:true}
            }
        default:
            return state;
    }
}

export { reducer };
