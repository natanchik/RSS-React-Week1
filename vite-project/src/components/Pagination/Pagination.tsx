import './pagination.scss';

function Pagination({
  setPage,
  page,
  maxPage,
  setNeedLoading,
}: {
  setPage: React.Dispatch<React.SetStateAction<number>>;
  page: number;
  maxPage: number;
  setNeedLoading: React.Dispatch<React.SetStateAction<boolean>>;
}): JSX.Element {
  function changePage(newPage: number) {
    setPage(newPage);
    setNeedLoading(true);
  }

  return (
    <div>
      {maxPage ? (
        <div className="pagination__block">
          <button
            type="button"
            className="pagination__item"
            disabled={page === 1}
            onClick={() => changePage(page - 1)}
          >
            &#60;&#60;
          </button>
          <button
            type="button"
            className="pagination__item"
            disabled={page === 1}
            onClick={() => changePage(page - 1)}
          >
            {page === 1 ? '.' : page - 1}
          </button>
          <button type="button" className="pagination__item current-page">
            {page}
          </button>
          <button
            type="button"
            className="pagination__item"
            disabled={page === maxPage}
            onClick={() => changePage(page + 1)}
          >
            {page === maxPage ? '.' : page + 1}
          </button>
          <button
            type="button"
            className="pagination__item"
            disabled={page === maxPage}
            onClick={() => changePage(page + 1)}
          >
            &#62;&#62;
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default Pagination;
