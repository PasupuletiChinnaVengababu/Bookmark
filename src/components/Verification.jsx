import { useRef } from "react";

const Verification = () => {
    const ref1=useRef("");
    const handleRef=()=>{
        ref1.target.focus();
    }
    return (
        <>
            <div className=" text-white flex flex-col items-center justify-center">

                <div className="py-15 font-medium text-xl ">
                    <h1 style={{ color: "#166a83" }}>Webinar.gg</h1>
                </div>
                <div className="pb-14 font-bold text-xl">
                    <h1>Check your email for code</h1>
                </div>
                <div className="py-4 text-md font-bold" style={{ color: "#34557b" }}>
                    <p>Please Enter verification code</p>
                </div>
                <div>
                    {Array(4).fill("1").map((item)=>(
                        <input style={{background:"#193f6b"}} ref={ref1} className="focus-2 h-10 w-10 m-2 focus:outline-visible rounded-md"type="text"/>
                    ))}
                    <button onClick={handleRef}>Verify</button>
                </div>


            </div>




        
        </>
    )
}
export default Verification;