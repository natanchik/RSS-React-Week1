import { Link } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <>
      <h2>Home Page</h2>
      <p className={'home__text'}>
        Fill out the{' '}
        <Link className={'home__link'} to="/form1">
          form 1
        </Link>
      </p>
      <p className={'home__text'}>
        Fill out the{' '}
        <Link className={'home__link'} to="/form2">
          form 2
        </Link>
      </p>
    </>
  );
}

export default App;
