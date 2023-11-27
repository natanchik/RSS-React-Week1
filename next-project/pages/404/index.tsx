import Head from 'next/head';
import Link from 'next/link';
import styles from './404.module.scss';

export default function Error() {
  return (
    <>
      <Head>
        <title>404</title>
      </Head>
      <div className={styles.wrapper}>
        <h1>Ooops...</h1>
        <h3>Something is going wrong...</h3>
        <Link className={styles.link} href='/'>
          Go Home
        </Link>
      </div>
    </>
  );
}
