import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL!
const supabaseAnonKey = process.env.SUPBASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)