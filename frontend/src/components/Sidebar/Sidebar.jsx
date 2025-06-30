
/**
 * @file Sidebar.jsx
 * @Brendan Dileo
 * 
 * The Sidebar component for my portfolio-website.
*/

import { useState, useEffect, useRef } from "react";
import SidebarToggleButton from "./SidebarToggleButton";
import SidebarOverlay from "./SidebarOverlay";
import SidebarContent from "./SidebarContent";
import { socialLinks } from "./socialLinks";
import useIsMobile from "./useIsMobile";

const Sidebar = () => {
    const [isSidebarShown, setIsSidebarShown] = useState(false);
    const [activeTooltip, setActiveTooltip] = useState(null);
    const isMobile = useIsMobile();
    const sidebarRef = useRef(null);
    const toggleButtonRef = useRef(null);

    // Close sidebar when clicking outside on mobile
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isMobile && isSidebarShown && 
                sidebarRef.current && 
                !sidebarRef.current.contains(event.target) &&
                toggleButtonRef.current &&
                !toggleButtonRef.current.contains(event.target)) {
                setIsSidebarShown(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isMobile, isSidebarShown]);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape' && isSidebarShown) {
                setIsSidebarShown(false);
            }
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isSidebarShown]);

    const toggleSidebar = () => setIsSidebarShown((prev) => !prev);

    return (
        <>
            <SidebarOverlay
                isMobile={isMobile}
                isSidebarShown={isSidebarShown}
                onClick={() => setIsSidebarShown(false)}
            />
            <SidebarToggleButton
                isSidebarShown={isSidebarShown}
                toggleSidebar={toggleSidebar}
                isMobile={isMobile}
                toggleButtonRef={toggleButtonRef}
            />
            {isSidebarShown && (
                <SidebarContent
                    isMobile={isMobile}
                    activeTooltip={activeTooltip}
                    setActiveTooltip={setActiveTooltip}
                    socialLinks={socialLinks}
                    sidebarRef={sidebarRef}
                />
            )}
        </>
    );
};

export default Sidebar;
