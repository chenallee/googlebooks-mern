import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';
import AppNavbar from './components/Navbar';

import * as API from './utils/API';

//import context for global state
import SavedBookContext from './utils/SavedBookContext';

function App() {

  //create state for our saved books
  const [savedBookState, setSavedBookState] = useState({
    books: [],
    getSavedBooks: () => {
      API.getSavedBooks()
        .then(({ data }) => setSavedBookState({ ...savedBookState, books: data }));
    }
  });

  //get saved books on load
  useEffect(() => {
    savedBookState.getSavedBooks();
  })

  return (
    <Router>
      <>
        <AppNavbar />
          <SavedBookContext.Provider value={savedBookState}>
            <Switch>
              <Route exact path='/' component={SearchBooks}></Route>
              <Route exact path='/saved' component={SavedBooks}></Route>
              <Route render={() => <h1 className='display-2'>Wrong page!</h1>}></Route>
            </Switch>
          </SavedBookContext.Provider>
      </>
    </Router>
  );
}

export default App;
