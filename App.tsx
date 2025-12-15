import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';
import Hometown from './pages/Hometown';
import Ecommerce from './pages/Ecommerce';
import Hobbies from './pages/Hobbies';
import { PageRoute } from './types';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path={PageRoute.HOME} element={<Home />} />
          <Route path={PageRoute.RESUME} element={<Resume />} />
          <Route path={PageRoute.PORTFOLIO} element={<Portfolio />} />
          <Route path={PageRoute.HOMETOWN} element={<Hometown />} />
          <Route path={PageRoute.ECOMMERCE} element={<Ecommerce />} />
          <Route path={PageRoute.HOBBIES} element={<Hobbies />} />
          <Route path="*" element={<Navigate to={PageRoute.HOME} replace />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;