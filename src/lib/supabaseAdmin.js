import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

let supabaseAdmin = null;

if (serviceKey) {
  supabaseAdmin = createClient(supabaseUrl, serviceKey);
  // eslint-disable-next-line no-console
  console.log('Admin Supabase client initialized for debugging.');
} else {
  // eslint-disable-next-line no-console
  console.warn('REACT_APP_SUPABASE_SERVICE_KEY is not set. Admin client for debugging is not available.');
}

export default supabaseAdmin;
