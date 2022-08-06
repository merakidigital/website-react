import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="keywords"
            content="marketing,digital,website,logo,branding,development,houston,graphic,design,technology,agency,social media"
          />
          <meta
            name="description"
            content="We are a digital agency of young passionate people whose goal is to deliver creativiness and innovation to businesses by any possible way"
          />
          <meta name="author" content="" />
          <link rel="shortcut icon" href="/img/favicon.ico" />
         
          
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
