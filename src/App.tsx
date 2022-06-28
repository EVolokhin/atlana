import React, {useEffect, useState} from 'react'
import { Routes, Route } from 'react-router-dom'

import { UserDetails, UsersList } from './components'
import { useListUsersLazyQuery } from './graphql/generated'

import './App.scss'

function App() {
  const [searchValue, setSearchValue]= useState<string>('')
  const [ listUsersQuery, { data: usersList, loading, error }] = useListUsersLazyQuery()

  useEffect(() => {
   searchValue && listUsersQuery({ variables: {query: searchValue}})
  }, [searchValue])

  if (error) return (<span> Error data loading...</span>)

  return (
    <main className="App">
      <header className="App-header">
        GitHub Searcher
      </header>
      <Routes>
        <Route
          path={'/'}
          element={
            <UsersList
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              data={usersList}
              loading={loading}
            />
          }
        />
        <Route path={'detailed'} element={<UserDetails />}>
          <Route path={':userId'} element={<UserDetails />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
