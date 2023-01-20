import { FC, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

interface Props {
  children: ReactNode;
  docTitle?: string;
  docDesc?: string;
  date: Date;
}

const Layout: FC<Props> = ({
  docTitle = "Devanada's Personal Website",
  docDesc = "The front page of the Internet",
  children,
  date,
}) => {
  return (
    <>
      <Head>
        <title>{docTitle}</title>
        <meta name="description" content={docDesc} />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <header className="container sticky top-0 left-0 right-0 z-10 m-auto flex min-h-[4rem] items-center justify-between border-b border-b-dark-2 bg-dark p-2">
        <Link className="relative h-12 w-12" href="/">
          <Image
            className="rounded-full object-contain"
            src="/logo.png"
            alt="Logo"
            fill
            sizes="100vw"
          />
        </Link>
        <div className="text-white">
          <Link
            href="/projects"
            className="text-lg duration-150 hover:font-bold"
          >
            Project
          </Link>
        </div>
      </header>
      <main className="container m-auto my-6 flex-1 px-5">{children}</main>
      <footer className="container m-auto flex min-h-[6rem] flex-col items-center justify-center border-t border-t-dark-2 bg-dark text-white">
        <p className="flex items-center justify-center gap-2">
          © {new Date(date).getFullYear().toString()} Yoga S Devanada
        </p>
        <p className="flex items-center justify-center gap-2">
          Hosted at
          <a
            className="text-blue-400"
            href="https://my.idcloudhost.com/aff.php?aff=5258"
            rel="noreferrer"
            target="_blank"
          >
            IDCLoudHost
          </a>
        </p>
      </footer>
    </>
  );
};

export default Layout;
