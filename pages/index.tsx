import Head from 'next/head';
import Meta from '../components/meta';
import Header from '../components/header';

function Index(): JSX.Element {
  return (
    <>
      <Meta></Meta>
      <Head>
        <title>Index</title>
      </Head>
      <Header title="まけぶろ" subTitle="とあるエンジニアの独り言"></Header>
    </>
  );
}

export default Index;
