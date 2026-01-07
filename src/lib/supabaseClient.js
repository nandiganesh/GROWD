import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// eslint-disable-next-line no-console
console.log('Attempting to initialize Supabase client...');
// eslint-disable-next-line no-console
console.log('Supabase URL loaded:', supabaseUrl ? 'Exists' : 'MISSING');
// eslint-disable-next-line no-console
console.log('Supabase Anon Key loaded:', supabaseAnonKey ? 'Exists' : 'MISSING');

if (!supabaseUrl || !supabaseAnonKey) {
  // eslint-disable-next-line no-console
  console.warn('Supabase environment variables are missing. Set REACT_APP_SUPABASE_URL and REACT_APP_SUPABASE_ANON_KEY in your .env file and restart the server.');
}

export const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

if (supabase) {
    // eslint-disable-next-line no-console
    console.log('Supabase client initialized successfully.');
} else {
    // eslint-disable-next-line no-console
    console.error('Supabase client failed to initialize. Check your .env file and restart the development server.');
}

export default supabase;
