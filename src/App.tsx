import React from 'react'
import { Routes, Route } from 'react-router-dom'

import {UserDetails, UsersList} from './components'

import './App.scss'


function App() {
  return (
    <main className="App">
      <header className="App-header">
        GitHub Searcher
      </header>
      <Routes>
        <Route path={'/'} element={<UsersList />} />
        <Route path={'detailed'} element={<UserDetails />}>
          <Route path={':userId'} element={<UserDetails />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
