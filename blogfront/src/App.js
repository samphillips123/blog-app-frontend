import './App.css';
// import components
import AllPosts from './pages/AllPosts'
import Form from './pages/Form'
import SinglePost from './pages/SinglePost'
// import hooks
import {useState, useEffect } from 'react'
// import react-router
import { Route, Routes } from 'react-router-dom'

// API URL
const apiURL = 'http://localhost:8000'

function App() {
  return (
    <div className="App">
      <h1>Blog App</h1>
      <Routes>
        <Route 
          exact
          path='/'
          element={<AllPosts />}
        />
        <Route 
          exact
          path='/blog/:id'
          element={<SinglePost />}
        />
        <Route 
          exact
          path='/new'
          element={<Form />}
        />
        <Route 
          exact
          path='/edit/:id'
          element={<Form />}
        />
      </Routes>
    </div>
  );
}

export default App;
