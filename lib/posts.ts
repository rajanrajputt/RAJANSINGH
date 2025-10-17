// lib/posts.ts

import { supabase } from './supabaseClient';

// Type definition for a single post
export type Post = {
  id: number;
  title: string;
  slug: string;
  content: string;
  published_date: string;
};

// NAYA FUNCTION: Supabase se saare posts get karta hai
export async function getSortedPostsData() {
  const { data, error } = await supabase
    .from('posts')
    .select('id, title, slug, published_date')
    .order('published_date', { ascending: false });

  if (error) {
    console.error('Error fetching posts:', error);
    return [];
  }

  return data;
}

// NAYA FUNCTION: Supabase se saare post slugs get karta hai
export async function getAllPostSlugs() {
  const { data, error } = await supabase
    .from('posts')
    .select('slug');

  if (error) {
    console.error('Error fetching slugs:', error);
    return [];
  }

  return data.map(post => post.slug);
}

// NAYA FUNCTION: Ek slug ke basis par poora post data get karta hai
export async function getPostData(slug: string) {
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('slug', slug)
    .single(); // .single() ek object return karta hai, array nahi

  if (error) {
    console.error('Error fetching post data:', error);
    return null;
  }

  return data as Post;
}