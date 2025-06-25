
// client.js
// Brendan Dileo, June 2025

import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPBASE_KEY
);

export default supabase;


