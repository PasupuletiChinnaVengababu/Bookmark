import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home=()=>{
    const [age,setAge]=useState(0);
    const navigate=useNavigate();
   
    const handleChange=(e)=>{
        setAge(e.target.value);
        
      
    }
     const age1=parseInt(age);
    console.log(age1);
    const handleClick=()=>{
        if(age1>18){
           console.log("verified")
            navigate("/verification")
        }
    }
    
   
    return(
        <>
        <div className=" text-white flex flex-col items-center justify-center">
            <div className="py-15 font-medium text-xl ">
                <h1 style={{color:"#166a83"}}>Webinar.gg</h1>
            </div>
            <div className="pb-14 font-bold text-xl">
                <h1>Verify Your Age</h1>
            </div>
            <div className="py-4 text-md font-bold" style={{color:"#34557b"}}>
                <p>Please confirm your birth year. This data will not stored</p>
            </div>
         
            <input onChange={handleChange}  className=" px-6 py-2 mb-4 bg-gray-700 text-white placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 " placeholder="Enter your birth year"/>
            
            <div className=" px-25 py-1 rounded-lg h-8" style={{background:"#7f95ac"}}>
                <button onClick={handleClick}>Continue</button>
            </div>
            
            
            
            
        </div>
        </>
    )
}
export default Home;