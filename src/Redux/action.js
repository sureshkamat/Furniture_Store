import { FETCHDATA, FETCHERROR, FETCHLOADING } from "./actionTypes"

 const getLoading=()=>{
    return {type:FETCHLOADING}
}


const getData=(payload)=>{
return {type:FETCHDATA,payload:payload}
}



 const getError=()=>{
    return {type:FETCHERROR}
    }
    
export { getData, getError, getLoading }
