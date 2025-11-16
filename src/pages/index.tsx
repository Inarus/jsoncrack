import React from "react";
import Head from "next/head";
import Link from "next/link";

export const HomePage = () => {
  return (
    <>
      <Head>
        <meta httpEquiv="refresh" content="0; url=/editor" />
        <title>Redirecting to JSON Editor...</title>
      </Head>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <p>Redirecting to editor...</p>
        <p>
          If you are not redirected, <Link href="/editor">click here</Link>.
        </p>
      </div>
    </>
  );
};

export default HomePage;
