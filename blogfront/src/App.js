import './App.css';
// import components
import AllPosts from './pages/AllPosts'
import Form from './pages/Form'
import SinglePost from './pages/SinglePost'
// import hooks
import { useState, useEffect } from 'react'
// import react-router
import { Route, Routes } from 'react-router-dom'

// API URL
const apiURL = 'http://localhost:8000'

function App() {
  // State for Posts
  const [posts, setPosts] = useState([])

  // FUNCTIONS
  // show
  const getPosts = async () => {
    const response = await fetch(`${apiURL}/blogs/`)
    const data = await response.json()
    console.log(data)
    setPosts(data)
  }

  // create/edit
  const handleFormSubmission = async (data, type) => {
    if (type === 'new') {
      const response = await fetch(`${apiURL}/blogs/`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      getPosts()
    } else {
      const response = await fetch(`${apiURL}/blogs/${data.id}/`, {
        method: 'put',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })
      getPosts()
    }
  }

  // delete
  const deletePost = async (id) => {
    const response = await fetch(`${apiURL}/blogs/${id}`, {
      method: 'delete'
    })
    getPosts()
  }

  // useEffect
  useEffect(() => {
    getPosts()
  }, [])



  return (
    <div className="App">
      <h1>Blog App</h1>
      <Routes>
        <Route
          exact
          path='/'
          element={<AllPosts posts={posts} deletePost={deletePost} />}
        />
        <Route
          exact
          path='/blog/:id'
          element={<SinglePost posts={posts} />}
        />
        <Route
          exact
          path='/new'
          element={<Form posts={posts} handleSubmit={handleFormSubmission} buttonLabel='Add Blog Post' formType='new' />}
        />
        <Route
          exact
          path='/edit/:id'
          element={<Form posts={posts} handleSubmit={handleFormSubmission} buttonLabel='Edit Blog Post' formType='edit' />}
        />
      </Routes>
    </div>
  );
}

export default App;
