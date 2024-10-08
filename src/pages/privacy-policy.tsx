import Head from 'next/head';
import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy - CrispSync</title>
        <meta
          name="description"
          content="Learn how CrispSync collects, uses, and protects your personal information. This Privacy Policy outlines your rights and our practices regarding your data."
        />
        <meta name="robots" content="noindex, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Privacy Policy - CrispSync" />
        <meta
          property="og:description"
          content="Understand how CrispSync handles your personal data. Read our Privacy Policy to know your rights and our data protection practices."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://crispsync.com/privacy-policy" />
        <meta property="og:image" content="https://crispsync.com/images/og-privacy.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Privacy Policy - CrispSync" />
        <meta
          name="twitter:description"
          content="Read CrispSync's Privacy Policy to learn how we protect your personal information and ensure your data privacy."
        />
        <meta name="twitter:image" content="https://crispsync.com/images/twitter-card-privacy.jpg" />

        <link rel="canonical" href="https://crispsync.com/privacy-policy" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Privacy Policy",
              "url": "https://crispsync.com/privacy-policy",
              "description": "This Privacy Policy explains how CrispSync collects, uses, and protects your personal information, and outlines your rights regarding your data.",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://crispsync.com/privacy-policy"
              },
              "publisher": {
                "@type": "Organization",
                "name": "CrispSync",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://crispsync.com/images/logo.png"
                }
              }
            }
            `,
          }}
        />
      </Head>
      <div className="space-y-12 container mx-auto p-12 max-w-3xl">
        <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
        <p className="mb-4">
          At CrispSync, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and protect your personal information when you use our website and services.
        </p>
        <h2 className="text-2xl font-bold mb-2">Information We Collect</h2>
        <p className="mb-4">
          We may collect personal information that you voluntarily provide to us when you subscribe to our newsletter, fill out a form, or otherwise interact with our website. This information may include your name, email address, and any other details you provide.
        </p>
        <h2 className="text-2xl font-bold mb-2">How We Use Your Information</h2>
        <p className="mb-4">
          The information we collect is used to improve our services, send you updates and newsletters, and respond to your inquiries. We may also use this information to analyze website usage and improve our content and services.
        </p>
        <h2 className="text-2xl font-bold mb-2">Sharing Your Information</h2>
        <p className="mb-4">
          We do not sell, trade, or rent your personal information to third parties. We may share information with trusted partners who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.
        </p>
        <h2 className="text-2xl font-bold mb-2">Your Rights</h2>
        <p className="mb-4">
          You have the right to request access to the personal information we hold about you, request corrections, or ask for its deletion. To exercise these rights, please contact us at support@crispsync.com.
        </p>
        <h2 className="text-2xl font-bold mb-2">Changes to This Policy</h2>
        <p className="mb-4">
          We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page. We encourage you to review this Privacy Policy periodically.
        </p>
        <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
        <p className="mb-4">
          If you have any questions about this Privacy Policy, please contact us at support@crispsync.com.
        </p>
      </div>
    </>
  );
};

export default PrivacyPolicy;
