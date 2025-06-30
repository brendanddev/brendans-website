
// client.js
// Initializes and exports a supbase client
// Brendan Dileo, June 2025

import { createClient } from '@supabase/supabase-js';

// Creates the supabase client for db interactions
const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPBASE_KEY
);

export default supabase;