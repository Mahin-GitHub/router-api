import React from 'react';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import './App.css'
import FriendDetails from './Component/FriendDetails/FriendDetails';
import Home from './Component/Home/Home';
import NoMatch from './Component/NoMatch/NoMatch';
const App = () => {
  return (
    <div className='App'>
      <h1>App Component</h1>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route path='/Home' element={<Home/>}></Route>
          <Route path='/Friend/:friendId' element={<FriendDetails/>}></Route>
          <Route path='*' element={<NoMatch/>}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;