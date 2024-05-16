import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = "https://bzvqdaiwcxflrvbabdgw.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ6dnFkYWl3Y3hmbHJ2YmFiZGd3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU3MDQ2ODEsImV4cCI6MjAzMTI4MDY4MX0.0NtZWoczslNL0mah6X3lEYhR_qsmDZmZ2cIU9D4TLTE"
const supabase = createClient(supabaseUrl, supabaseKey);


export default supabase;