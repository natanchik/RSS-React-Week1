import ReactDOM from 'react-dom/client';
import App from './App';

import ErrorBoundary from './components/Error';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ErrorBoundary fallback={<p>Something went wrong</p>}>
    <App />
  </ErrorBoundary>
);
