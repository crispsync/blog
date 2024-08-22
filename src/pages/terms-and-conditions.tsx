import Head from 'next/head';
import React from 'react';

const TermsAndConditions: React.FC = () => {
  return (
    <>
      <Head>
        <title>Terms and Conditions - CrispSync</title>
        <meta
          name="description"
          content="Review the terms and conditions for using CrispSync. By accessing our website, you agree to be bound by these terms."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="noindex, follow" />
        <meta property="og:title" content="Terms and Conditions - CrispSync" />
        <meta
          property="og:description"
          content="Understand the terms and conditions that govern your use of CrispSync's website and services. Learn about your responsibilities and our liabilities."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://crispsync.com/terms-and-conditions" />
        <meta property="og:image" content="https://crispsync.com/images/og-terms.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Terms and Conditions - CrispSync" />
        <meta
          name="twitter:description"
          content="Review CrispSync's terms and conditions for using our website and services. Stay informed about your rights and responsibilities."
        />
        <meta name="twitter:image" content="https://crispsync.com/images/twitter-card-terms.jpg" />

        <link rel="canonical" href="https://crispsync.com/terms-and-conditions" />

        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Terms and Conditions",
            "url": "https://crispsync.com/terms-and-conditions",
            "description": "These terms and conditions outline the rules and regulations for the use of CrispSync's website.",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://crispsync.com/terms-and-conditions"
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
          `}
        </script>
      </Head>
      <div className="space-y-12 container mx-auto p-12 max-w-3xl">
        <h1 className="text-4xl font-bold mb-4">Terms and Conditions</h1>
        <p className="mb-4">
          Welcome to CrispSync. By accessing or using our website and services, you agree to comply with and be bound by the following terms and conditions. Please read them carefully.
        </p>
        <h2 className="text-2xl font-bold mb-2">Use of Our Website</h2>
        <p className="mb-4">
          You agree to use our website for lawful purposes only. You must not use our website to engage in any illegal or harmful activities, or to transmit or distribute any malicious software, spam, or unauthorized advertisements.
        </p>
        <h2 className="text-2xl font-bold mb-2">Intellectual Property</h2>
        <p className="mb-4">
          All content, trademarks, and intellectual property on this website are owned by CrispSync or its licensors. You may not reproduce, distribute, or create derivative works from any content on this site without our prior written permission.
        </p>
        <h2 className="text-2xl font-bold mb-2">Disclaimer of Warranties</h2>
        <p className="mb-4">
          Our website and services are provided as is without any warranties, express or implied. We do not guarantee that our website will be error-free, secure, or available at all times. Your use of our website is at your own risk.
        </p>
        <h2 className="text-2xl font-bold mb-2">Limitation of Liability</h2>
        <p className="mb-4">
          CrispSync will not be liable for any direct, indirect, incidental, or consequential damages arising out of your use of our website or services. This includes, but is not limited to, damages for loss of profits, data, or other intangible losses.
        </p>
        <h2 className="text-2xl font-bold mb-2">Changes to These Terms</h2>
        <p className="mb-4">
          We may update these terms and conditions from time to time. If we make significant changes, we will notify you by posting the new terms on this page. Your continued use of our website after any changes indicates your acceptance of the new terms.
        </p>
        <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
        <p className="mb-4">
          If you have any questions about these terms and conditions, please contact us at support@crispsync.com.
        </p>
      </div>
    </>
  );
};

export default TermsAndConditions;
