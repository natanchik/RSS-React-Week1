import { Link } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <>
      <h2>Home Page</h2>
      <p className={'home__text'}>
        Fill out the{' '}
        <Link className={'home__link'} to="/form1">
          form with React Hook Form
        </Link>
      </p>
      <p className={'home__text'}>
        Fill out the{' '}
        <Link className={'home__link'} to="/form2">
          form with uncontrolled components
        </Link>
      </p>
    </>
  );
}

export default App;
