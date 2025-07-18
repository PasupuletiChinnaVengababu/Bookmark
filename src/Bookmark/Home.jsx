const Home = () => {
  return (
    <>
      <div className=" bg-gray-50 font-inter">
        <nav className="container mx-auto px-20 py-6 flex items-center justify-between">
          <div className="flex items-center ">
            <svg
              className="w-6 h-6 text-blue-600 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
            </svg>
            <span className="font-bold text-2xl text-gray-800">BOOKMARK</span>
          </div>
          <div className="flex space-x-8">
            <a
              href="#features"
              className="text-gray-600 hover:text-blue-600  transition duration-200 hidden md:block"
            >
              FEATURES
            </a>
            <a
              href="#download"
              className="text-gray-600 hover:text-blue-600  transition duration-200 hidden md:block"
            >
              DOWNLOAD
            </a>
            <a
              href="#FAQ"
              className="text-gray-600 hover:text-blue-600  transition duration-200 hidden md:block"
            >
              FAQ
            </a>
            <button className="bg-red-500 text-white px-6 py-2 rounded-md shadow-md hover:bg-white items-center hover:text-black transition duration-200">
              LOGIN
            </button>
          </div>
        </nav>
        <header className="container mx-auto px-20 py-16 flex flex-col-reverse md:flex-row items-center justify-between relative overflow-hidden">
          <div className="md:w-1/2 text-center md:text-left mb-12 md:mb-0 z-10">
            <h1 className="text-4xl md:text-5xl  lg:text-6xl font-bold text-gray-800 leading-tight mb-6">A Simple bookmark manager</h1>
            <p  className="text-gray-600 text-lg md:text-xl leading-relaxed mb-8  text-justify">
              
              A clean and simple interface to organize your favourite websites.
              Open a new browser tab and see your sites load instantly. Try it
              for <span className="text-blue-700">free</span>.
            </p>
            <div className="flex  flex-row justify-center md:justify-start  space-y-0 space-x-4">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-md shadow-lg hover:bg-gray-700 transition duration-200">Get it on Chrome</button>
              <button className="bg-gray-400 text-white px-8 py-3 rounded-md shadow-lg hover:bg-blue-700 transition duration-200">Get it on Edge</button>
            </div>
          </div>
          <div className="md:w-1/2 w-full flex justify-center md:justify-end relative z-10">
            <div  className="absolute -bottom-20 md:-right-40 w-80 h-80 md:w-96 md:h-96 bg-blue-600 rounded-full opacity-20 transform rotate-45 hidden md:block"></div>
            <div className="relative w-full max-w-lg">
              {/* Tablet frame */}
              <div className="bg-gray-800 rounded-xl shadow-2xl p-4 md:p-6 relative">
                {/* Screen area */}
                <div className="bg-gray-900 rounded-lg p-4 md:p-6 h-64 md:h-80 flex flex-col space-y-4">
                  {/* Top bar (simulated browser tabs) */}
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <div className="flex-grow bg-gray-700 h-6 rounded-full"></div>
                  </div>
                  {/* Bookmark items */}
                  <div className="bg-gray-700 rounded-md p-3 flex items-center space-x-3">
                    <div className="w-4 h-4 bg-orange-400 rounded-full"></div>
                    <div className="h-2 bg-gray-600 w-3/4 rounded"></div>
                  </div>
                  <div className="bg-gray-700 rounded-md p-3 flex items-center space-x-3">
                    <div className="w-4 h-4 bg-teal-400 rounded-full"></div>
                    <div className="h-2 bg-gray-600 w-2/3 rounded"></div>
                  </div>
                  <div className="bg-gray-700 rounded-md p-3 flex items-center space-x-3">
                    <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
                    <div className="h-2 bg-gray-600 w-4/5 rounded"></div>
                  </div>
                  <div className="bg-gray-700 rounded-md p-3 flex items-center space-x-3">
                    <div className="w-4 h-4 bg-purple-400 rounded-full"></div>
                    <div className="h-2 bg-gray-600 w-1/2 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-600 rounded-full opacity-10 transform rotate-12 hidden lg:block"></div>
        </header>
      </div>
    </>
  );
};
export default Home;
