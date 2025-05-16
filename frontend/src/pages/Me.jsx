import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import ThreeCanvas from '../components/ThreeCanvas';

const Me = () => {
    return (
        <div className="w-full min-h-screen bg-gray-900 flex flex-col items-center relative">
            <Header title="Threejs Test Page" />
            <ThreeCanvas />
            <Sidebar />
        </div>
    );
};

export default Me;
