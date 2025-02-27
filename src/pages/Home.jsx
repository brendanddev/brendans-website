
// Home.jsx
// Brendan Dileo

// Home functional component
const Home = () => {
    return (
        <div className="w-full min-h-screen bg-gray-900 flex flex-col items-center relative">
            <h1 className="text-[#00ff00] text-4xl font-mono mb-10">Brendans Website</h1>
            
            <div className="w-3/5 h-[500px] bg-black rounded-lg shadow-lg flex flex-col border border-gray-700 overflow-hidden font-mono">
                <div className="h-8 bg-gray-800 flex items-center justify-center relative text-white text-sm font-bold">
                    <span className="text-center w-full">Terminal</span>
                </div>
            </div>
        </div>
    );
};
  
export default Home;
