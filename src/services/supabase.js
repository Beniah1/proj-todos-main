import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://aorwsitvljwprnguaogb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFvcndzaXR2bGp3cHJuZ3Vhb2diIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjYzMDU4ODgsImV4cCI6MjA0MTg4MTg4OH0.i4z2wnOLsnGCJru3K5VTUnMT52iZ5XooovaA8eYQvFA";
const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  },
});

export default supabase;