import Head from 'next/head';
import DetailedCard from '@/components/DetailedCard/DetailedCard';
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import { Response } from '@/types';

export const getServerSideProps = (async (context) => {
  const res = await fetch(`https://swapi.dev/api/vehicles/${context.query.id}`);
  const card = await res.json();
  return { props: { card } };
}) satisfies GetServerSideProps<{
  card: Response;
}>;

export default function DetailedPage({ card }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <title>{card.name} | Star Wars</title>
      </Head>
      <DetailedCard card={card} />
    </>
  );
}
