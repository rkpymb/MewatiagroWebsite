import Document, { Html, Head, Main, NextScript } from 'next/document';

class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en-US">
        <Head>
          <link
            rel="stylesheet"
            crossOrigin="anonymous"
            href="https://fonts.googleapis.com/css2?family=Crimson+Text:wght@600;700&family=DM+Sans:wght@400;500;700&display=swap"
          />
          <link rel="icon" href="https://api.toladukan.com/images/1697560455386-553847794.png" sizes="any" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
