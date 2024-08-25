import fs from 'fs';
import path from 'path';
import { GetStaticPaths, GetStaticProps } from 'next';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import NewsletterBlogPost from '@/components/NewsletterBlogPost';
import Head from 'next/head';

interface BlogPostProps {
  title: string;
  date: string;
  content: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync(path.join('posts'));
  const paths = files.map((filename) => ({
    params: { fileName: filename.replace('.md', '') },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const markdownWithMeta = fs.readFileSync(
    path.join('posts', `${params?.fileName}.md`),
    'utf-8'
  );

  const [meta, content] = markdownWithMeta.split('---').slice(1);
  const metaLines = meta.split('\n').filter(Boolean);
  const title = metaLines?.find((line) => line.startsWith('title:'))?.replace('title:', '').trim() ?? '';
  const date = metaLines?.find((line) => line.startsWith('date:'))?.replace('date:', '').trim() ?? '';

  return {
    props: {
      title,
      date,
      content,
    },
  };
};

const BlogPost: React.FC<BlogPostProps> = ({ title, date, content }) => {
  const xLink = `https://x.com/intent/tweet?text=${encodeURIComponent(
    `Check out this blog post: ${title} - ${typeof window !== "undefined" ? window.location.href : ''}`
  )}`;

  const coffeeLink = 'https://www.buymeacoffee.com/crispsync';

  return (

    <>
      <Head>
        <title>{`${title || "Blog Post"} - CrispSync`}</title>
        <title>Blog Post - Crispsync</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={content.substring(0, 200)} />
        <meta property="og:title" content={`${title} - CrispSync`} />
        <meta property="og:description" content={content.substring(0, 200)} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={typeof window !== "undefined" ? window.location.href : ''} />
        <meta property="og:image" content="https://crispsync.com/images/og-image.jpg" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${title} - CrispSync`} />
        <meta name="twitter:description" content={content.substring(0, 200)} />
        <meta name="twitter:image" content="https://crispsync.com/images/twitter-card.jpg" />
        
        <link rel="canonical" href={typeof window !== "undefined" ? window.location.href : ''} />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="CrispSync" />
        <meta name="keywords" content="AI, technology, innovation, blog, newsletter, artificial intelligence, CrispSync" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
            {
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "${title}",
              "description": "${content.substring(0, 200)}",
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
              "datePublished": "${date}",
              "image": "https://crispsync.com/images/og-image.jpg",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "${typeof window !== undefined ? window.location.href : ''}"
              }
            }
            `,
          }}
        />
      </Head>
    <article className="prose dark:prose-invert mx-auto mt-12 px-8 mb-12 lg:min-w-[800px]">
      <h2>{title}</h2>
      <p><i>{date}</i></p>
      <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>
        {content}
      </ReactMarkdown>
      <div className="mt-12 mb-2 text-center">
        <a href={xLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-500 hover:underline mr-4">
          <svg
            className="w-5 h-5 mr-2"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M23.954 4.569a9.982 9.982 0 01-2.825.775 4.934 4.934 0 002.165-2.724 9.85 9.85 0 01-3.127 1.195 4.925 4.925 0 00-8.39 4.482 13.97 13.97 0 01-10.149-5.142 4.92 4.92 0 001.524 6.574 4.898 4.898 0 01-2.23-.616c-.054 2.28 1.58 4.415 3.946 4.89a4.922 4.922 0 01-2.224.085 4.927 4.927 0 004.604 3.417A9.873 9.873 0 010 21.54a13.951 13.951 0 007.548 2.213c9.057 0 14.01-7.514 14.01-14.02 0-.214-.005-.428-.014-.64a9.936 9.936 0 002.45-2.534z" />
          </svg>
          Discuss on X
        </a>
        <a href={coffeeLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-yellow-500 hover:underline">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 mr-2"
          >
            <path d="M18 8a1 1 0 011 1v4a5 5 0 01-5 5H7a5 5 0 01-5-5V9a1 1 0 011-1h15zM2 7a1 1 0 011-1h17a1 1 0 010 2H3a1 1 0 01-1-1zm12 11a4 4 0 004-4h-2a2 2 0 01-2 2v2z" />
          </svg>

          Buy me a coffee :)
        </a>
      </div>
      <NewsletterBlogPost />
    </article>
    </>
  );
};

export default BlogPost;

