import NewsletterSignup from '@/components/NewsletterSignup';
import React from 'react';

const Home: React.FC = () => {
  return (
    <main className="container mx-auto p-6 text-center">
      <NewsletterSignup />
      <a href="/blog" className="text-lg font-semibold text-accent hover:underline">
        Explore My Blog
      </a>
    </main>
  );
};

export default Home;
