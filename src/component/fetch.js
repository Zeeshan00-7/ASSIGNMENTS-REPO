import { useState } from "react";
import  axios  from "axios";
export default function Dog(){
    const [image,setImage] = useState()
    function handleClicked(){
        axios.get('https://dog.ceo/api/breeds/image/random')
        .then((response)=>setImage (response. data.message))
      
        .catch((error)=>(error))


    }
    return(
        <>
     <img src={image} alt="dog image"></img>
        <button onClick={handleClicked}>click me</button>
        </>
    )
}