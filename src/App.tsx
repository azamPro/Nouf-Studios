import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import ErrorBoundary from './components/ErrorBoundary';
import Header from './components/Header';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import ProjectsPage from './pages/Projects';

const App = () => {
  return (
    <ErrorBoundary>
      <LanguageProvider>
        <Router>
          <div className="min-h-screen">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<ProjectsPage />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </LanguageProvider>
    </ErrorBoundary>
  );
};

export default App;