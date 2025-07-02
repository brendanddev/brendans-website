
/**
 * @file useLoading.js
 * @author Brendan Dileo, July 2025
 * 
 * Custom hook for managing loading state with a delay
 */

import { useState, useEffect } from 'react';

const useLoading = (delay = 500) => {
    const [isLoading, setIsLoading] = useState(true);

    // Simulates loading with a delay
    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), delay);
        return () => clearTimeout(timer);
    }, [delay]);

    return isLoading;
}

export default useLoading;