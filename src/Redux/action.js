import axios from "axios"
import { ADDFILM, DELETEFILM, EDITFILM, GETFILMS } from "./actiontype"


export const getfilms= () => async (dispatch)=>{
try {
    const res=await axios.get("http://localhost:5000/get")
    console.log(res.data);
    dispatch({type:GETFILMS,payload:res.data})
    
} catch (error) {
    console.log(error);
    
}
}
export const addfilm=(data)=>{
    return{type:ADDFILM,payload:data}
     
    
}
export const deletefilm=(id)=>{
    return{type:DELETEFILM,payload:id}
}
export const updatefilm=(id,data)=>{
    return{type:EDITFILM,payload:{data,id}}}

