// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://bjveuoyxivmngkpkskov.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJqdmV1b3l4aXZtbmdrcGtza292Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM3Nzk4MTQsImV4cCI6MjA0OTM1NTgxNH0._VYArUgvfWqOjBcIYEghQJ4-fhWkKXW8Ibu0vow8mAg";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);