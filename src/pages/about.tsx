import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - CrispSync</title>
        <meta name="description" content="Learn more about our mission, values, and the team behind CrispSync, a blog focused on technology, AI, and innovation." />
        
        <meta property="og:title" content="About Us - CrispSync" />
        <meta property="og:description" content="Discover our mission and the team driving CrispSync, a leading blog on technology, AI, and innovation." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://crispsync.com/about" />
        <meta property="og:image" content="https://crispsync.com/images/og-image.jpg" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@YourTwitterHandle" />
        <meta name="twitter:title" content="About Us - CrispSync" />
        <meta name="twitter:description" content="Explore the mission and values of CrispSync, a top blog on technology and AI." />
        <meta name="twitter:image" content="https://crispsync.com/images/twitter-card.jpg" />
        
        <link rel="canonical" href="https://crispsync.com/about" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Your Name or CrispSync" />
        <meta name="keywords" content="AI, technology, innovation, blog, newsletter, artificial intelligence" />
        
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "CrispSync",
            "url": "https://crispsync.com",
            "logo": "https://crispsync.com/images/logo.png",
            "sameAs": [
              "https://twitter.com/YourTwitterHandle",
              "https://www.linkedin.com/company/yourcompany"
            ],
            "description": "CrispSync is a blog dedicated to the latest trends in AI, technology, and innovation.",
            "founder": "Your Name",
            "foundingDate": "2024",
            "contactPoint": {
              "@type": "ContactPoint",
              "email": "contact@crispsync.com",
              "contactType": "Customer Service"
            }
          }
          `}
        </script>
      </Head>
      <div>
        <h1>About Us</h1>
        <p>Our story, mission, and more.</p>
      </div>
    </>
  );
}
