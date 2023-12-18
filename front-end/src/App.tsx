import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React from 'react';
import { ContextProvider } from './components/input/ContextProvider';
import HomePage from './pages/home/HomePage';
import SongsPage from './pages/input/SongsPage';
import GenerationPage from './pages/input/GenerationPage';
import GeneratedPlaylistPage from './pages/result/GeneratedPlaylistPage';
import AboutPage from './pages/home/AboutPage';
import FAQPage from './pages/home/FAQPage';

import './App.css';
import Toolbar from './components/toolbar/Toolbar';
import SettingsPage from './pages/input/SettingsPage';


/**
 * This is the highest level component!
 */
function App() {
  
  return (
    <ContextProvider>
      <div className="App">
        <Toolbar />
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/input/songs" element={<SongsPage />} />
            <Route path="/input/settings" element={<SettingsPage />} />
            <Route path="/input/lyrics" element={<GenerationPage />} />
            <Route path="/result" element={<GeneratedPlaylistPage />} />
          </Routes>
        </Router>
      </div>
    </ContextProvider>
  );
}

export default App;
