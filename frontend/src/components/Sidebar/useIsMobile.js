
/**
 * @file useisMobile.js
 * @author Brendan Dileo, June 2025
 * 
 * A custom hook that indicates whether the current screen size is a mobile screen view or not.
 */

import { useState, useEffect } from "react";

const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 768);

    // Determines mobile view based on pixel size
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    return isMobile;
};

export default useIsMobile; 