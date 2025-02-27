// Home.jsx
// Brendan Dileo


// Home functional component
const Home = () => {
    return (
        <div className="w-full min-h-screen bg-gray-900 flex flex-col items-center relative">
            {/* Page Title */}
            <h1 className="text-[#00ff00] text-4xl font-mono mt-5 mb-10">Brendans Website</h1>
            


            {/* Terminal Container */}
            <div className="w-3/5 h-[500px] bg-black rounded-lg shadow-lg flex flex-col border border-gray-700 overflow-hidden font-mono">
                
                {/* Terminal Header Container --> Where main center is in linux */}
                <div className="h-8 bg-gray-800 flex items-center justify-center relative text-white text-sm font-bold">
                    {/* Exit button */}
                    <div className="absolute left-4 flex gap-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    </div>
                    {/* Header */}
                    <span className="text-center w-full">brendans@website-terminal: ~</span>
                </div>

                {/* Terminal Body */}
                <div className="flex-1 p-3 text-white overflow-y-auto">
                    <div className="flex">
                        <span className="mr-2">
                            <span className="text-[#00ff00]">brendan@portfolio</span>
                            <span className="text-white">:</span>
                            <span className="text-blue-400">~</span>
                            <span className="text-white">$</span>
                        </span>
                        <div className="text-white">Welcome to Brendan's Terminal!</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
