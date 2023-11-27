import Layout from '@/components/Layout';
import Cards from '../components/Cards/Cards';
import { Response } from '@/types';
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import Pagination from '@/components/Pagination/Pagination';
import { useSearchParams } from 'next/navigation';

export const getServerSideProps = (async () => {
  let searchParams;
  let search: string = '';
  let page: number = 1;
  try {
    searchParams = useSearchParams();
    search = searchParams.get('search') || '';
    page = Number(searchParams.get('page')) || 1;
  } catch {}

  const response = await fetch(
    'https://swapi.dev/api/vehicles/' + `?page=${page}${search ? `&search=${search.split(' ').join('+')}` : ''}`,
  );
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
        <Pagination maxPage={Math.ceil(data.count / 10) || 0} />
      </Layout>
    </>
  );
}
