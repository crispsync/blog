import NewsletterSignup from '@/components/NewsletterSignup';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Home - CrispSync | Technology, AI, and Innovation</title>
        <meta
          name="description"
          content="CrispSync is your go-to blog for the latest in technology, AI, and innovation. Explore our articles, learn new skills, and stay ahead in the tech world."
        />
        <meta
          name="keywords"
          content="technology, AI, artificial intelligence, innovation, tech blog, learning, programming, software development, data science, machine learning"
        />
        <meta property="og:title" content="CrispSync | Technology, AI, and Innovation" />
        <meta
          property="og:description"
          content="Dive into the world of technology with CrispSync. Discover articles on AI, programming, and the latest tech trends. Join our newsletter to stay updated."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://crispsync.com/" />
        <meta property="og:image" content="https://crispsync.com/images/og-home.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CrispSync | Technology, AI, and Innovation" />
        <meta
          name="twitter:description"
          content="Stay ahead in the tech world with CrispSync. Your source for the latest in technology, AI, and innovation."
        />
        <meta name="twitter:image" content="https://crispsync.com/images/twitter-card-home.jpg" />

        <link rel="canonical" href="https://crispsync.com/" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="CrispSync" />

        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "CrispSync",
            "url": "https://crispsync.com/",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://crispsync.com/?s={search_term_string}",
              "query-input": "required name=search_term_string"
            },
            "description": "CrispSync is a leading blog focused on the latest trends in technology, AI, and innovation. Join our community to stay ahead in the tech world."
          }
          `}
        </script>
      </Head>
      <main className="container mx-auto p-6 text-center">
        <h1>Welcome to CrispSync</h1>
        <p>Your source for the latest in technology, AI, and innovation.</p>
        <NewsletterSignup />
        <Link href="/blog" className="text-lg font-semibold text-accent hover:underline">
          Explore My Blog
        </Link>
      </main>
    </>
  );
};

export default Home;
