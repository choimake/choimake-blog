import Head from 'next/head';

const Meta = (): JSX.Element => {
  return (
    <>
      <Head>
        <link rel="icon" type="image/png" sizes="16x16" href="favicons/icon-16x16.png"></link>
        <link rel="icon" type="image/png" sizes="32x32" href="favicons/icon-32x32.png"></link>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="favicons/apple-touch-icon-180x180.png"
        ></link>
        <meta name="description" content="description"></meta>
      </Head>
    </>
  );
};

export default Meta;
