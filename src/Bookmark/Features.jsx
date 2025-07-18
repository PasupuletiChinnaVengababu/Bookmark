import { useState } from "react";
import { Sample } from "./Sample";

const Features = () => {
  const [data, setData] = useState([
    {
      image:
        "https://tailwindfromscratch.com/website-projects/bookmark/images/logo-chrome.svg",
        title:"Add to Chrome"
    },
    {
      image:
        "https://tailwindfromscratch.com/website-projects/bookmark/images/logo-firefox.svg",
        title:"Add to firefox"
    },
    {
      image:
        "https://tailwindfromscratch.com/website-projects/bookmark/images/logo-opera.svg",
        title:"Add to Opera"
    },
  ]);

  return (
    <>
      <section className=" bg-gray-50 font-inter">
        <div className="container mx-auto px-20  flex mb-10 flex-col text-center justify-center items-center ">
          <h1 className="font-bold text-5xl mb-3">Features</h1>
          <p className="text-center max-w-3xl ">
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </p>
        </div>
        <div>
          <div className=" max-w-full md:max-w-1/2 mx-auto px-4 py-6 flex md:flex-row flex-col justify-center items-center gap-10 space-x-6 md:bg-white md:shadow-md">
            <a className="hover:text-orange-500  underline  underline-offset-10 decoration-4 md cursor-pointer text-md w-full text-center h-20 md:h-6 md:mb-5 py-5 md:py-3 bg-white shadow-md md:shadow-none">
              Simple Bookmarking
            </a>
            <a className="hover:text-orange-500 cursor-pointer text-md w-full text-center h-20 md:h-4 py-5    md:mb-5 md:p-3 bg-white shadow-md md:shadow-none">
              Speed Searching
            </a>
            <a className="hover:text-orange-500 cursor-pointer text-md w-full text-center h-20 md:h-5 py-5  md:mb-5  md:py-3 bg-white shadow-md md:shadow-none">
              Easy Sharing{" "}
            </a>
          </div>
          {/* <div className="  mx-auto px-20 py-10 md:flex-row flex flex-col items-center gap-2 space-y-4 space-x-12"> 
            <div className=" item-center"> 
                <img className="object-fill"src="https://tailwindfromscratch.com/website-projects/bookmark/images/illustration-features-tab-1.svg " />
            </div>
           
          </div> */}
          <Sample />
          <div className="container flex flex-col items-center text-center justify-center my-8 py-8 mx-auto  px-20 ">
            <div className="text-4xl font-bold ">
              <h1>Download the extension</h1>
            </div>
            <div className="text-center max-w-3xl my-9">
              <p>
                We've got more browsers in the pipeline. Please do let us know
                if you've got a favourite you'd like us to prioritize.
              </p>
            </div>
          </div>
        </div>
        <div className="px-20 flex md:flex-row flex-col justify-center items-center gap-6">
          {data.map((d) => (
            <div>
              <div className="bg-white hover:bg-gray-100 hover:shadow-black shadow-md flex flex-col justify-center items-center w-80 h-100 transition duration-200 ">
                <div>
                  <img src={d.image}/>
                </div>
                <div></div>
                <div className=" mt-10 text-xl font-bold ">
                  <h1>{d.title}</h1>
                </div>

                <div className=" text-gray-400 my-4 decoration-gray-600">
                  <p>Minimum Version 62</p>
                </div>
                <div className="flex border-t-3 border-dashed  border-gray-400 my-4 w-full items-center justify-center ">
                  {/* <button className="bg-blue-400 px-6 py-4 rounded-md text-white hover:border-1 hover:bg-white hover:text-black">Add & Install Extension</button> */}
                </div>
                <div>
                  <button className="bg-blue-400 px-6 py-4 rounded-md text-white hover:border-1 hover:bg-white hover:text-black">
                    Add & Install Extension
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
export default Features;
