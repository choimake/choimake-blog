import Head from 'next/head';
import Meta from '../components/meta';
import Header from '../components/header';
import Footer from '../components/footer';

const title = 'まけぶろ';
const subTitle = 'とあるエンジニアの独り言';

function Index(): JSX.Element {
  return (
    <>
      <Meta></Meta>
      <Head>
        <title>Index</title>
      </Head>
      <Header title={title} subTitle={subTitle}></Header>
      <Footer title={title}></Footer>
    </>
  );
}

export default Index;
