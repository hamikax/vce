
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

// Hardcoded Supabase URL and anon key to ensure the app works without environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://vqgqcmfaqlfomlnmvrnd.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZxZ3FjbWZhcWxmb21sbm12cm5kIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM2NTI5ODQsImV4cCI6MjA1OTIyODk4NH0.AZHIC1OSw1TpFhHojqyEZJaU-j2qhYoVzku8Gh7FVR8';

// Update the supabase client to use the Database type
export const supabase = createClient<Database>(
  supabaseUrl,
  supabaseAnonKey
);
