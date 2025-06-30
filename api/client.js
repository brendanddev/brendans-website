
// client.js
// Initializes and exports a supbase client
// Brendan Dileo, June 2025

const { createClient } = require('@supabase/supabase-js');

// Creates the supabase client for db interactions
const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_KEY
);

export default supabase;