import React, { useState } from 'react';
import Navbar from './components/Navbar';
import CreateCharacter from './pages/CreateCharacter';
import Home from './pages/Home';
import PrivateRoute from './components/PrivateRoute';
import ProtectedPage from './pages/ProtectedPage';
import CharacterPage from './pages/CharacterPage';
import NotFoundPage from './pages/NotFoundPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ThemeContext from './context/themeContext';
import AuthContext from './context/AuthContext';
import './App.css';

function App() {
  const themeHook = useState('dark');

  return (
    <AuthContext.Provider value={false}>
      <ThemeContext.Provider value={themeHook}>
        <div className="App">
          <Router>
            <Navbar />
            <Switch>
              <Route exact path="/">
                <Home/>
              </Route>
              <Route path="/create-character">
                <CreateCharacter/>
              </Route>
              <Route path="/character/:id">
                <CharacterPage />
              </Route>
              <PrivateRoute path="/protected">
                <ProtectedPage />
              </PrivateRoute>
              <Route path="*">
                <NotFoundPage />
              </Route>
            </Switch>
          </Router>
        </div>
      </ThemeContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
