import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addfilm, updatefilm } from '../Redux/action';

function Editfilm({element}) {
    const [title,settitle]=useState(element.title)
    const [description, setdescription] = useState(element.description);
    const [year, setyear] = useState(element.year);
    const [genre, setgenre] = useState(element.genre);
    const [director, setdiractor] = useState(element.director)
    const [poster, setposter] = useState(element.poster);
    const [show,setshow]= useState(false)
    
    const dispatch=useDispatch()
 const handlesubmit=()=>{
    if(title!==""){
        const newfilm={title,description,year,genre,director,poster,id:element.id}
        dispatch(updatefilm(element.id,newfilm))
        setshow(false)
       
    }
    else{ alert("please enter your title")}
   

 }
  return (
    
   <div> 
    <button  className="login-button" onClick={()=>setshow(!show)}>Update</button>
       { show==true? <div style={{position:"absolute",width:"25%",border:"1px solid",display:"flex",flexDirection:"column",zIndex:"10",top:"100px",left:"30%",padding:"10px",height:"600px",background:"#16213e"}}>
<p>Title:</p> 
<input defaultValue={element.title} style={{padding:"3%",borderRadius:" 20px"}} onChange={(e)=>settitle(e.target.value)} type="text" placeholder='film title' />
<p>Diractor:</p>
<input defaultValue={element.director} style={{padding:"3%",borderRadius:" 20px"}} onChange={(e)=>setdiractor(e.target.value)} type="text" placeholder='film director' />
<p>Year:</p>
<input defaultValue={element.year} style={{padding:"3%",borderRadius:" 20px"}}  onChange={(e)=>setyear(e.target.value)} type="text" placeholder='film year' />
<p>Genre:</p>
<input defaultValue={element.genre} style={{padding:"3%",borderRadius:" 20px"}} onChange={(e)=>setgenre(e.target.value)} type="text" placeholder='film genre' />
<p>Description:</p>
<input defaultValue={element.description} style={{padding:"3%",borderRadius:" 20px"}} onChange={(e)=>setdescription(e.target.value)} type="text" placeholder='film description' />
<p>Poster:</p>
<input defaultValue={element.poster} style={{padding:"3%",borderRadius:" 20px"}} onChange={(e)=>setposter(e.target.value)} type="text" placeholder='photo link' />
<br />
<button onClick={handlesubmit} className="login-button">Update movie</button>

        </div>:null}
        </div>
    
  )
}

export default Editfilm