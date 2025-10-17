// app/blog/[slug]/page.tsx

import { getPostData, getAllPostSlugs } from '@/lib/posts';
import { compileMDX } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';

// generateStaticParams se explicit return type hata diya gaya hai
export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  // Next.js is smart enough to understand the return type here
  return slugs.map((slug) => ({ slug }));
}

// Page component mein custom PageProps type hata kar inline type use kiya hai
export default async function PostPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const post = await getPostData(slug);
  
  if (!post) {
    notFound();
  }

  const { content } = await compileMDX({
    source: post.content || '',
  });

  return (
    <article className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-2 text-slate-900">{post.title}</h1>
        <p className="text-slate-500 mb-8">{post.published_date}</p>
        
        <div className="prose prose-lg max-w-none">
          {content}
        </div>
      </div>
    </article>
  );
}