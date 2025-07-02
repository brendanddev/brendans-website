
/**
 * @file PageWrapper.jsx
 * @author Brendan Dileo, July 2025
 * 
 * A reusable wrapper component for the websites pages
 */

import Sidebar from "../Sidebar/Sidebar";

const PageWrapper = ({ children }) => (
    <div className="relative w-full min-h-screen bg-slate-900 text-white flex flex-col items-center p-4">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        {children}
        <Sidebar />
    </div>
);

export default PageWrapper;