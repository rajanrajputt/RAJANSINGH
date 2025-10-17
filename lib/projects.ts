// lib/projects.ts

import { supabase } from './supabaseClient';

// Ek project ke data ke liye type define kiya
export type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link: string;
};

// Supabase se saare projects get karta hai, id ke hisaab se sort karke
export async function getSortedProjectsData() {
  const { data, error } = await supabase
    .from('projects')
    .select('id, title, description, tags, link')
    .order('id', { ascending: true }); // ID ke according sort kiya (chota ID upar)

  if (error) {
    console.error('Error fetching projects:', error);
    return [];
  }

  return data;
}