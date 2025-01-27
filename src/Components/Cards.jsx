import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deletefilm, getfilms } from '../Redux/action'
import Editfilm from './Editfilm'

function Cards() {
  const movies=useSelector(state=>state.movies)
  const dispatch=useDispatch()
  useEffect(()=>{dispatch(getfilms())},[])
  return (


<div style={{display:"flex",gap:"100px",alignItems:"start",justifyContent:"center",height:"800px",marginTop:"2%",width:"50%"}}>
{movies.map(el=>
  <div style={{width:"18rem",}}>
 <img style={{width:"100%",height:"400px"}}  src={el.poster} alt="" />
 <h1>{el.title}</h1>
 <p>{el.genre}</p>
 <p>{el.description}</p>
 <p>{el.year}</p>
 <p>{el.director}</p>
 <button onClick={()=>dispatch(deletefilm(el.id))} className="login-button">Delete movie</button>
 <Editfilm element={el}/>
 </div>
)}


</div>

  )
   
}

export default Cards