// app/blog/page.tsx

import Link from 'next/link';
import { getSortedPostsData } from '@/lib/posts';

export default async function BlogPage() {
  const allPosts = await getSortedPostsData();

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12 text-slate-800">
        My Technical Blog
      </h1>
      <div className="max-w-3xl mx-auto">
        {allPosts && allPosts.length > 0 ? (
          <ul className="space-y-6">
            {allPosts.map(({ id, slug, title, published_date }) => (
              <li key={id}>
                {/* 'group' class add ki gayi */}
                <Link href={`/blog/${slug}`} className="cursor-pointer group">
                  {/* Styling ko ProjectCard jaisa banaya gaya */}
                  <div className="p-6 rounded-lg transition-all duration-300 bg-white border border-slate-200 hover:shadow-lg hover:-translate-y-1 hover:border-blue-500">
                    <h2 className="text-2xl font-bold text-slate-800 transition-colors group-hover:text-blue-600">
                      {title}
                    </h2>
                    <p className="text-sm text-slate-500 mt-2">
                      {published_date}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-slate-500">
            No blog posts found. Add one in your Supabase table!
          </p>
        )}
      </div>
    </div>
  );
}