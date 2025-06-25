
// connect.js
// Defines the backend function that receives user messages
// Brendan Dileo, June 2025

import supabase from './client';

export default async function handler(req, res) {

    if (req.method !== 'POST')
        return res.status(405).json({ message: 'Incorrect request type!' });

    const { name, email, message } = req.body;

    if (!name || !email || !message)
        return res.status(400).json({ message: 'Missing one of the required fields!' });

    const { data, error } = await supabase
        .from('messages')
        .insert([{ name, email, message }]);
    
    if (error)
        return res.status(500).json({ message: 'An error occurred!' });

    res.status(201).json({ message: 'Message saved!', data });
}
