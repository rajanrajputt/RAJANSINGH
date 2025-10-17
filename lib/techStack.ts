// lib/techStack.ts

import { supabase } from './supabaseClient';

// Ek tech item ke data ke liye type define kiya
export type TechItem = {
  id: number;
  name: string;
  description: string;
};

// Supabase se saara tech stack data get karta hai
export async function getTechStackData() {
  const { data, error } = await supabase
    .from('tech_stack')
    .select('id, name, description')
    .order('id', { ascending: true }); // ID ke according sort kiya

  if (error) {
    console.error('Error fetching tech stack:', error);
    return [];
  }

  return data;
}