// import { useSelector, useDispatch } from 'react-redux';
// import type { RootState } from '../../utils/redux/store';
// import {
//   setPage,
//   setNeedLoading,
// } from '../../utils/redux/reducers/cardsReducer';
import styles from './pagination.module.scss';

function Pagination(): JSX.Element {
  // const page = useSelector((state: RootState) => state.cards.page);
  // const maxPage = useSelector((state: RootState) => state.cards.maxPage);
  // const dispatch = useDispatch();

  // function changePage(newPage: number) {
  //   dispatch(setPage(newPage));
  //   dispatch(setNeedLoading(true));
  // }

  return (
    <div>
      {/* {maxPage ? ( */}
      <div className={styles.pagination__block}>
        <button
          type='button'
          className={styles.pagination__item}
          // disabled={page === 1}
          // onClick={() => changePage(page - 1)}
        >
          &#60;&#60;
        </button>
        <button
          type='button'
          className={styles.pagination__item}
          // disabled={page === 1}
          // onClick={() => changePage(page - 1)}
        >
          {/* {page === 1 ? '.' : page - 1} */}
        </button>
        <button type='button' className={styles.pagination__item}>
          {/*...styles.current-page*/
          /* {page} */}
        </button>
        <button
          type='button'
          className={styles.pagination__item}
          //   disabled={page === maxPage}
          //   onClick={() => changePage(page + 1)}
        >
          {/* {page === maxPage ? '.' : page + 1} */}
        </button>
        <button
          type='button'
          className={styles.pagination__item}
          // disabled={page === maxPage}
          // onClick={() => changePage(page + 1)}
        >
          &#62;&#62;
        </button>
      </div>
      {/* ) : null} */}
    </div>
  );
}

export default Pagination;
