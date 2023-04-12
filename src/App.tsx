import './styles/app.scss';

import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Homepage = lazy(() =>
  import('@/pages').then((module) => ({ default: module.Homepage })),
);
const Overview = lazy(() =>
  import('@/pages').then((module) => ({ default: module.Overview })),
);
const Layout = lazy(() =>
  import('@/components').then((module) => ({ default: module.Layout })),
);

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Homepage />
              </Layout>
            }
          />
          <Route
            path="/overview"
            element={
              <Layout>
                <Overview />
              </Layout>
            }
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
