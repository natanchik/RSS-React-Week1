import './search.scss';

function Search({
  search,
  setSearch,
  setPage,
  setNeedLoading,
}: {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  setNeedLoading: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  let input = search;
  return (
    <div className="search__block">
      <input
        onChange={(event) => {
          input = event.target.value;
        }}
        defaultValue={input}
        className="input search__input"
        placeholder="Input text"
      />
      <button
        onClick={() => {
          setSearch(input);
          setPage(1);
          setNeedLoading(true);
          localStorage.setItem('search', input);
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
