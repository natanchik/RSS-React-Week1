import Layout from '@/components/Layout';
import Cards from '../components/Cards/Cards';
import { Response } from '@/types';
import type { InferGetStaticPropsType, GetStaticProps } from 'next';

export const getStaticProps = (async () => {
  const response = await fetch('https://swapi.dev/api/vehicles/');
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
  };
}) satisfies GetStaticProps<{
  data: Response;
}>;

export default function Home({ data }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Layout title={'Home Page'}>
        <Cards cards={data.results || []} />
      </Layout>
    </>
  );
}
