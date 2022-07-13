import * as React from 'react';
import NxWelcome from './nx-welcome';
import { Link, Route, Routes } from 'react-router-dom';

const Consumer = React.lazy(() => import('consumer/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/consumer">Consumer</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="host" />} />

        <Route path="/consumer" element={<Consumer />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
