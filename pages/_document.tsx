import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import { nanoid } from "nanoid";

class CustomDocument extends Document {
  public props: any;

  static async getInitialProps(ctx: DocumentContext) {
    const nonce = nanoid();
    const docProps = await ctx.defaultGetInitialProps(ctx, { nonce });

    let contentSecurityPolicy = "";
    if (process.env.NODE_ENV === "production") {
      contentSecurityPolicy = `default-src 'self'; style-src 'nonce-${nonce}';`;
    } else {
      contentSecurityPolicy = `default-src 'self'; style-src 'unsafe-inline'; script-src 'self' 'unsafe-eval';`;
    }

    ctx.res?.setHeader("Content-Security-Policy", contentSecurityPolicy);

    return { ...docProps, nonce };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta property="csp-nonce" content={this.props.nonce} />
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
