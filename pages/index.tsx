import React from 'react';
import Head from 'next/head';
import Meta from '../components/meta';

function Index(): JSX.Element {
  return (
    <>
      <Meta></Meta>
      <Head>
        <title>Index</title>
      </Head>
    </>
  );
}

export default Index;
