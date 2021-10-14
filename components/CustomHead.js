import Head from 'next/head';

export default function CustomHead({ title, description }) {
  return (
    <Head>
      <title>PR1SM</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
      <meta name="robots" content="follow, index" />
      <link href="/favicon.ico" rel="shortcut icon" />
      <meta content={description} name="description" />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:image" content="/ogImage.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@pr1sm_gg" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="/ogImage.png" />
      <meta property="og:url" content="https://pr1sm.gg" />
    </Head>
  );
}
