import { useCallback, useState } from 'react';
import styles from './search.module.scss';
import sharedStyles from '@/styles/shared.module.scss';
import { useRouter } from 'next/router';
import { usePathname, useSearchParams } from 'next/navigation';

function Search() {
  const searchParams = useSearchParams();
  const [input, setInput] = useState(searchParams.get('search') || '');
  const router = useRouter();
  const pathname = usePathname();

  const createQueryString = useCallback(
    (search: string) => {
      const params = new URLSearchParams(searchParams);
      params.set('search', search);
      params.set('page', `${1}`);

      return params.toString();
    },
    [searchParams],
  );

  return (
    <div className={styles.search__block}>
      <input
        onChange={(event) => {
          setInput(event.target.value);
        }}
        value={input}
        className={sharedStyles.input}
        placeholder='Input text'
      />
      <button
        onClick={() => {
          router.push(pathname + '?' + createQueryString(input));
        }}
        type='button'
        className={sharedStyles.button}
      >
        Search
      </button>
    </div>
  );
}

export default Search;
