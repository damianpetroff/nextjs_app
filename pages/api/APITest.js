import Layout from '../../components/layout';
import Head from 'next/head';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';

export async function getStaticProps({ params }) {
  const response = await fetch('https://ddragon.leagueoflegends.com/cdn/12.20.1/data/en_US/champion.json');
  const result = await response.json();
  var champions = [];
  for(var i in result.data)
    champions.push([i, result.data[i]]);

  return {
    props: {
      champions,
    },
  };
}

export function ChampionInfo({champions}){
  return (
    true      
  );
}

export default function Test({champions}) {
    return (
      <Layout>
        <Head>
          <title>Champions</title>
        </Head>
        {champions.map(([key, content]) => <h1 className={utilStyles.headingXl}>{content.name}</h1>)}     
      </Layout>
    );
  }