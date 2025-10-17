// app/blog/[slug]/page.tsx

import { getPostData, getAllPostSlugs } from '@/lib/posts';
import { compileMDX } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map(slug => ({ slug }));
}

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
        {/* dark: class removed */}
        <h1 className="text-4xl font-extrabold mb-2 text-slate-900">{post.title}</h1>
        {/* dark: class removed */}
        <p className="text-slate-500 mb-8">{post.published_date}</p>
        
        {/* dark:prose-invert removed */}
        <div className="prose prose-lg max-w-none">
          {content}
        </div>
      </div>
    </article>
  );
}