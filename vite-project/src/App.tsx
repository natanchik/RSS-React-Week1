import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import ErrorBoundary from './components/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

function App() {
  return (
    <ErrorBoundary>
      <div className="wrapper">
        <RouterProvider router={router} />
      </div>
    </ErrorBoundary>
  );
}

export default App;
