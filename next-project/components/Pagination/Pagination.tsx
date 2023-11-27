import styles from './pagination.module.scss';
import { useRouter } from 'next/router';
import { usePathname, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

function Pagination({ maxPage }: { maxPage: number }): JSX.Element {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams()!;
  const page = Number(searchParams.get('page')) || 1;

  const createQueryString = useCallback(
    (page: string) => {
      const params = new URLSearchParams(searchParams);
      params.set('page', page);

      return params.toString();
    },
    [searchParams],
  );

  function changePage(count: number) {
    router.push(pathname + '?' + createQueryString(`${page + count}`));
  }

  return (
    <div>
      {maxPage ? (
        <div className={styles.pagination__block}>
          <button
            type='button'
            className={styles.pagination__item}
            disabled={page === 1}
            onClick={() => changePage(-1)}
          >
            &#60;&#60;
          </button>
          <button
            type='button'
            className={styles.pagination__item}
            disabled={page === 1}
            onClick={() => changePage(-1)}
          >
            {page === 1 ? '.' : page - 1}
          </button>
          <button type='button' className={`${styles.pagination__item} ${styles.current_page}`}>
            {page}
          </button>
          <button
            type='button'
            className={styles.pagination__item}
            disabled={page === maxPage}
            onClick={() => changePage(1)}
          >
            {page === maxPage ? '.' : page + 1}
          </button>
          <button
            type='button'
            className={styles.pagination__item}
            disabled={page === maxPage}
            onClick={() => changePage(1)}
          >
            &#62;&#62;
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default Pagination;
