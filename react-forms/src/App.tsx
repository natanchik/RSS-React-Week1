import { Link } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <>
      <h1 className="home__header">Home Page</h1>
      <p className={'home__text'}>
        <Link className={'home__link'} to="/form1">
          Form with React Hook Form
        </Link>
      </p>
      <p className={'home__text'}>
        <Link className={'home__link'} to="/form2">
          Form with uncontrolled components
        </Link>
      </p>
    </>
  );
}

export default App;
