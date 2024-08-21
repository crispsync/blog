import React from 'react';
import BlogCard from '../components/BlogCard';
import NewsletterSignup from '../components/NewsletterSignup';

const Blog: React.FC = () => {
  const posts = [
    { title: 'First Blog Post', summary: 'Introduction to CrispSync.', date: 'August 20, 2024', fileName: 'first-post' },
    { title: 'Exploring SaaS', summary: 'Deep dive into SaaS models.', date: 'August 21, 2024', fileName: 'exploring-saas' },
  ];

  return (
    <main className="container mx-auto p-6 mb-12">
      <NewsletterSignup /> {/* Add the signup form here */}
      <div className="space-y-12 flex flex-col items-center">
        {posts.map((post, index) => (
          <React.Fragment key={post.fileName}>
            <BlogCard {...post} />
            {index < posts.length - 1 && <hr className="border-t border-gray-300 dark:border-gray-700 w-2/5 my-8" />}
          </React.Fragment>
        ))}
      </div>
    </main>
  );
};

export default Blog;
