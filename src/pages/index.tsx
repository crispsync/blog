import NewsletterSignup from '@/components/NewsletterSignup';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

const Home: React.FC = () => {
  return (
    <>
    <Head>
      <title>Home - CrispSync</title>
    </Head>
    <main className="container mx-auto p-6 text-center">
      <NewsletterSignup />
      <Link href="/blog" className="text-lg font-semibold text-accent hover:underline">
        Explore My Blog
      </Link>
    </main>
    </>
  );
};

export default Home;
