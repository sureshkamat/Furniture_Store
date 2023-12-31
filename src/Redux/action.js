import { FETCHDATA, FETCHERROR, FETCHFURNITURE, FETCHLOADING, SIGNIN, SINGLEDATA } from "./actionTypes"

 const getLoading=()=>{
    return {type:FETCHLOADING}
}


const getData=(payload)=>{
return {type:FETCHDATA,payload:payload}
}

const getFurniture=(payload)=>{
    return {type:FETCHFURNITURE,payload:payload}
    }
    
    const getSingleData=(payload)=>{
        return {type:SINGLEDATA,payload:payload}
        }    


 const getError=()=>{
    return {type:FETCHERROR}
    }

    const getSignIn=()=>{
        return {type:SIGNIN }
        }
    
export { getData, getError, getFurniture, getLoading, getSignIn, getSingleData }

