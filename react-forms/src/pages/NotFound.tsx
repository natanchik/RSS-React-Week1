import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <>
      <h2>Ooops... The page is not found</h2>
      <Link to="/">Go Home</Link>
    </>
  );
}
