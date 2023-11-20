import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <>
      <h1>Ooops... The page is not found</h1>
      <Link to="/">Go Home</Link>
    </>
  );
}

export default NotFound;
