import Link from "next/link";
import Head from "next/head";

export default function Custom404() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-primary text-secondary px-4">
      <Head>
        <title>404 - Page Not Found | Ingigante</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="text-center space-y-6 max-w-2xl">
        <h1 className="font-bely text-[40px] md:text-[80px]">404</h1>
        <h2 className="text-[20px] md:text-[30px] font-merri">
          Page Not Found
        </h2>
        <p className="text-[16px] md:text-[18px] text-secondary-light">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <Link
          href="/"
          className="inline-block bg-secondary text-white py-3 px-8 mt-6 transition duration-150 ease-in-out hover:shadow-lg"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
