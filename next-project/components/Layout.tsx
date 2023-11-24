import Head from 'next/head';
import Search from './Search/Search';

export default function Layout({ children, title = 'Star Wars' }: { children: React.ReactNode; title: string }) {
  return (
    <>
      <Head>
        <title>{title} | Star Wars</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Search />
      {children}
    </>
  );
}
