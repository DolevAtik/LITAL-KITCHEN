const supabaseUrl = 'https://wbgpfouzewhqqusjyezf.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndiZ3Bmb3V6ZXdocXF1c2p5ZXpmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU4MDY5NDEsImV4cCI6MjA5MTM4Mjk0MX0.rVSoWjkVtgJDo-VoHpEnZZBBvL_uO47ItqVw5erVl78';

// Initialize the Supabase client
const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey);
