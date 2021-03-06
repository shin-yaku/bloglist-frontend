import Togglable from './Togglable'
import React, { useState } from 'react'

const BlogForm = ({ createBlog }) => {
  const [newTitle, setNewTitle] = useState('')
  const [newAuthor, setNewAuthor] = useState('')
  const [newUrl, setNewUrl] = useState('')


  const addBlog = (event) => {
    event.preventDefault()
    createBlog({ newTitle, newAuthor, newUrl })

    setNewAuthor('')
    setNewTitle('')
    setNewUrl('')
  }

  const handleAuthorChange = (event) => {
    console.log(event.target.value)
    setNewAuthor(event.target.value)
  }
  const handleTitleChange = (event) => {
    console.log(event.target.value)
    setNewTitle(event.target.value)
  }
  const handleUrlChange = (event) => {
    console.log(event.target.value)
    setNewUrl(event.target.value)
  }

  return(
    <Togglable buttonLabel="new blog">
      <form onSubmit={addBlog}>
        <p>
            Title:<input id='title' value={newTitle} onChange={handleTitleChange} /><br/>
            Author:<input id='author' value={newAuthor} onChange={handleAuthorChange} /><br/>
            Url:<input id='url' value={newUrl} onChange={handleUrlChange} />
          <button id='login-button' type="submit">save</button>
        </p>
      </form>
    </Togglable>
  )
}

export default BlogForm