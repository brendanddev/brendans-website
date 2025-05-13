
// contact.js
// Brendan Dileo, May 2025

import axios from 'axios';

export const submitContactForm = async (formData) => {
    try {
        const response = await axios.post('http://localhost:3001/submit', formData, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        return response.data;
    } catch (err) {
        console.error('Error Submitting the Form: ', err);
        throw err;      // Propogate to be handled
    }
};