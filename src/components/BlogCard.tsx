import React from 'react';
import Link from 'next/link';

interface BlogPost {
  title: string;
  summary: string;
  date: string;
  fileName: string;
}

const BlogCard: React.FC<BlogPost> = ({ title, summary, date, fileName }) => {
  return (
    <Link
      href={`/blog/${fileName}`}
      className="block py-6 transform transition-transform duration-200 hover:scale-[1.005] active:scale-100"
      style={{ maxWidth: '900px' }}
    >
      <article className="p-0">
        <h2 className="text-4xl font-black text-gray-800 dark:text-pink-500 mb-2">
          {title}
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          {date}
        </p>
        <p className="text-xl text-gray-800 dark:text-gray-400">
          {summary}
        </p>
      </article>
    </Link>
  );
};

export default BlogCard;
