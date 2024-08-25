import React from 'react';
import BlogCard from '../components/BlogCard';
import NewsletterSignup from '../components/NewsletterSignup';
import Head from 'next/head';

const Blog: React.FC = () => {
  const posts = [
    { title: 'First Blog Post', summary: 'Introduction to CrispSync.', date: 'August 20, 2024', fileName: 'first-post' },
    { title: 'Exploring SaaS', summary: 'Deep dive into SaaS models.', date: 'August 21, 2024', fileName: 'exploring-saas' },
  ];

  return (
    <>
      <Head>
        <title>Blog - CrispSync | Technology, AI, and Innovation Insights</title>
        <meta
          name="description"
          content="Explore the latest articles on technology, AI, SaaS, and innovation from CrispSync. Stay updated with cutting-edge insights and industry trends."
        />
        <meta
          name="keywords"
          content="technology blog, AI articles, SaaS, innovation, tech news, CrispSync, software development, data science"
        />
        <meta property="og:title" content="Blog - CrispSync | Technology, AI, and Innovation Insights" />
        <meta
          property="og:description"
          content="Discover a variety of blog posts covering topics like AI, SaaS, and technology at CrispSync. Join our newsletter for regular updates."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://crispsync.com/blog" />
        <meta property="og:image" content="https://crispsync.com/images/og-blog.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog - CrispSync | Technology, AI, and Innovation Insights" />
        <meta
          name="twitter:description"
          content="Stay informed with the latest blog posts from CrispSync on technology, AI, and innovation. Subscribe to our newsletter for more insights."
        />
        <meta name="twitter:image" content="https://crispsync.com/images/twitter-card-blog.jpg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="canonical" href="https://crispsync.com/blog" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="CrispSync" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
            {
              "@context": "https://schema.org",
              "@type": "Blog",
              "name": "CrispSync Blog",
              "description": "CrispSync Blog offers articles on the latest technology trends, AI, SaaS, and innovation.",
              "url": "https://crispsync.com/blog",
              "author": {
                "@type": "Organization",
                "name": "CrispSync"
              },
              "publisher": {
                "@type": "Organization",
                "name": "CrispSync",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://crispsync.com/images/logo.png"
                }
              },
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://crispsync.com/blog"
              },
              "blogPost": ${JSON.stringify(
                posts.map(post => ({
                  "@type": "BlogPosting",
                  "headline": post.title,
                  "datePublished": post.date,
                  "url": `https://crispsync.com/blog/${post.fileName}`,
                  "description": post.summary
                }))
              )}
            }
            `,
          }}
        />
      </Head>
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
    </>
  );
};

export default Blog;
