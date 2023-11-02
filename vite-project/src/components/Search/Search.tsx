import './search.scss';

function Search({
  setSearch,
  setPage,
  setNeedLoading,
}: {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  setNeedLoading: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  let input = '';
  return (
    <div className="search__block">
      <input
        onChange={(event) => {
          input = event.target.value;
        }}
        className="input search__input"
        placeholder="Input text"
      />
      <button
        onClick={() => {
          setSearch(input);
          setPage(1);
          setNeedLoading(true);
        }}
        type="button"
        className="button search__button"
      >
        Search
      </button>
    </div>
  );
}

export default Search;
