export  const Sample=()=>{
    return(
        <>
        <div className="mx-20"> 
        <div className="flex md:flex-row flex-col items-center my-5">
            <div className="w-full"> 
               <img  className=" "src="https://tailwindfromscratch.com/website-projects/bookmark/images/illustration-features-tab-1.svg"/>
            </div>
             <div className="m-0 p-0 w-full flex flex-col items-center md:items-start  md:ml-20">
                <div className="md:text-left text-center  leading-relaxed text-xl my-7 md:my-0  md:text-3xl font-bold mb-4">
                    <h1>Bookmark in one click</h1>
                </div>
                <div className=" md:text-left text-center   md:whitespace-pre-line md:w-[490px]  ">
                    <p>
                        Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.
                    </p>
                </div>
                <button className="bg-blue-500  h-10 text-center w-30 text-white hover:border-2 hover:bg-white hover:text-black rounded-md my-10">
                    More Info
                </button>

            </div>
        </div>
        </div>
        </>
    )
}