// lib/supabaseClient.ts

import { createClient } from '@supabase/supabase-js'

// .env.local file se URL aur Anon Key get ki
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// Supabase client banakar export kiya
export const supabase = createClient(supabaseUrl, supabaseAnonKey)