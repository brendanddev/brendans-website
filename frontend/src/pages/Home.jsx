
/**
 * @file Home.jsx
 * @author Brendan Dileo 
 * 
 * The home page to my portfolio-website
*/

import Terminal from '../components/Terminal';
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const Home = () => {
    return (
        <div className="flex">
            <div className="flex-grow p-4">
                <Header />
                  <div className="w-full flex justify-center mt-8">
                    <Terminal />
                </div>
            </div>
            <Sidebar />
        </div>
    );
};

export default Home;