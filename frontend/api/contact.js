
// contact.js
// Serverless api route to receive messages and securely store in supabase
// Brendan Dileo, June 2025

import supabase from "./client";

export default async function handler(req, res) {

    // Check if request method was POST
    if (req.method !== 'POST') 
        return res.status(405).json({ message: 'Method not allowed. Expected POST.' });
        
    const { name, email, message } = req.body;

    if (!name || !email || !message)
        return res.status(400).json({ message: 'Missing required fields!' });

    try {
        // Insert new message into supabase messages table
        const { data, error } = await supabase
            .from('messages')
            .insert([{ name, email, message: message }]);
        
        // If supabase throws error, throw for catch block
        if (error) throw error;

        return res.status(200).json({ message: 'Message received successfully', data });
    } catch (error) {
        console.error('An error occurred!')
        return res.status(500).json({ error: error.message || 'Internal server error' })
    }
}