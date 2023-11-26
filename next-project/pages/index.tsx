import Layout from '@/components/Layout';
import Cards from '../components/Cards/Cards';
import { Response } from '@/types';
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';

export const getServerSideProps = (async () => {
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
}) satisfies GetServerSideProps<{
  data: Response;
}>;

export default function Home({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Layout title={'Home Page'}>
        <Cards cards={data.results || []} />
      </Layout>
    </>
  );
}
