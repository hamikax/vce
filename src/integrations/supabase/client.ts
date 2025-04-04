
import { createClient } from '@supabase/supabase-js';

// Add a custom Database type export to be used throughout the app
export type Database = {
  public: {
    Tables: {
      contact_submissions: {
        Row: {
          id: string;
          name: string;
          email: string;
          phone: string | null;
          message: string;
          created_at: string;
          status: string;
        };
        Insert: {
          id?: string;
          name: string;
          email: string;
          phone?: string | null;
          message: string;
          created_at?: string;
          status?: string;
        };
      };
      projects: {
        Row: {
          id: string;
          title: string;
          category: string;
          location: string;
          year: string;
          description: string;
          main_image: string;
          image_urls: string[];
          created_at: string;
          language: string;
        };
        Insert: {
          id?: string;
          title: string;
          category: string;
          location: string;
          year: string;
          description: string;
          main_image: string;
          image_urls: string[];
          created_at?: string;
          language: string;
        };
      };
      testimonials: {
        Row: {
          id: string;
          author: string;
          role: string | null;
          company: string | null;
          content: string;
          created_at: string;
          language: string;
        };
        Insert: {
          id?: string;
          author: string;
          role?: string | null;
          company?: string | null;
          content: string;
          created_at?: string;
          language: string;
        };
      };
    };
  };
};

// Safely get environment variables with fallbacks
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Add error handling to help debug when environment variables are missing
if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase environment variables. Make sure VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY are set.');
}

// Update the supabase client to use the Database type
export const supabase = createClient<Database>(
  supabaseUrl,
  supabaseAnonKey
);
