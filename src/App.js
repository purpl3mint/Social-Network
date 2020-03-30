import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Profile from './components/Profile/Profile.jsx';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';

function App(props) {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/profile' render={() =>
            <Profile
              state={props.appState.profilePage}
              dispatch={props.dispatch}
            />} />
          <Route path='/dialogs' render={() =>
            <Dialogs
              state={props.appState.dialogsPage}
              dispatch={props.dispatch}
            />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
