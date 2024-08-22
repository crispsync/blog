import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    const { locale } = this.props.__NEXT_DATA__;

    return (
      <Html lang={locale ?? 'en'}>
        <Head>
          <meta charSet="UTF-8" />
          <meta name="description" content="CrispSync - Your source for technology, AI, and innovation insights." />
          <meta name="theme-color" content="#2563eb" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="CrispSync - Technology, AI, and Innovation Insights" />
          <meta property="og:description" content="Stay ahead with CrispSync. Explore the latest in technology, AI, and innovation." />
          <meta property="og:image" content="/images/og-default.jpg" />
          <meta property="og:url" content="https://crispsync.com" />
          <meta property="og:site_name" content="CrispSync" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="CrispSync - Technology, AI, and Innovation Insights" />
          <meta name="twitter:description" content="Explore the latest articles on technology, AI, and innovation with CrispSync." />
          <meta name="twitter:image" content="/images/twitter-card-default.jpg" />
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
