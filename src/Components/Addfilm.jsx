import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addfilm } from '../Redux/action';

function Addfilm() {
    const [title,settitle]=useState("")
    const [description, setdescription] = useState("");
    const [year, setyear] = useState("");
    const [genre, setgenre] = useState("");
    const [diractor, setdiractor] = useState("")
    const [poster, setposter] = useState("");
    const dispatch=useDispatch()
 const handlesubmit=()=>{
    if(title!==""){
        const newfilm={title,description,year,genre,diractor,poster,id:new Date()}
        dispatch(addfilm(newfilm))
        settitle("")
        setdescription("");
        setyear("");
        setgenre("");
        setdiractor("");
        setposter("");
    }
    else{ alert("please enter your title")}
   

 }
  return (
   
        <div style={{position:"absolute",width:"25%",border:"1px solid",display:"flex",flexDirection:"column",zIndex:"10",top:"100px",left:"30%",padding:"10px",height:"600px",background:"#16213e"}}>
<p>Title:</p> 
<input style={{padding:"3%",borderRadius:" 20px"}} onChange={(e)=>settitle(e.target.value)} type="text" placeholder='film title' />
<p>Diractor:</p>
<input style={{padding:"3%",borderRadius:" 20px"}} onChange={(e)=>setdiractor(e.target.value)} type="text" placeholder='film director' />
<p>Year:</p>
<input style={{padding:"3%",borderRadius:" 20px"}}  onChange={(e)=>setyear(e.target.value)} type="text" placeholder='film year' />
<p>Genre:</p>
<input style={{padding:"3%",borderRadius:" 20px"}} onChange={(e)=>setgenre(e.target.value)} type="text" placeholder='film genre' />
<p>Description:</p>
<input style={{padding:"3%",borderRadius:" 20px"}} onChange={(e)=>setdescription(e.target.value)} type="text" placeholder='film description' />
<p>Poster:</p>
<input style={{padding:"3%",borderRadius:" 20px"}} onChange={(e)=>setposter(e.target.value)} type="text" placeholder='photo link' />
<br />
<button onClick={handlesubmit} className="login-button">add movie</button>

        </div>
    
  )
}

export default Addfilm