// app/blog/[slug]/page.tsx

import { getPostData, getAllPostSlugs } from '@/lib/posts';
import { compileMDX } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';

// Page ke props ke liye type define kiya
type PageProps = {
  params: {
    slug: string;
  };
};

// Function ka return type a P se (explicitly) define kiya
export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const slugs = await getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

// Page component mein naya type use kiya
export default async function PostPage({ params }: PageProps) {
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