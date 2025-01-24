import { ADDFILM, DELETEFILM, EDITFILM } from "./actiontype"

export const addfilm=(data)=>{
    return{type:ADDFILM,payload:data}
     
    
}
export const deletefilm=(id)=>{
    return{type:DELETEFILM,payload:id}
}
export const updatefilm=(id,data)=>{
    return{type:EDITFILM,payload:{data,id}}}
