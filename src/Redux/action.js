import { FETCHDATA, FETCHERROR, FETCHFURNITURE, FETCHLOADING } from "./actionTypes"

 const getLoading=()=>{
    return {type:FETCHLOADING}
}


const getData=(payload)=>{
return {type:FETCHDATA,payload:payload}
}

const getFurniture=(payload)=>{
    return {type:FETCHFURNITURE,payload:payload}
    }
    


 const getError=()=>{
    return {type:FETCHERROR}
    }
    
export { getData, getError, getFurniture, getLoading }

