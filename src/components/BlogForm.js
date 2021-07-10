import Togglable from './Togglable'

const blogForm = (addBlog,  newTitle, handleTitleChange, newAuthor, handleAuthorChange, newUrl, handleUrlChange) => (
<Togglable buttonLabel="new note">
    <form onSubmit={addBlog}>
        <p>
        Title:<input value={newTitle} onChange={handleTitleChange} /><br/>
        Author:<input value={newAuthor} onChange={handleAuthorChange} /><br/>
        Url:<input value={newUrl} onChange={handleUrlChange} />
        <button type="submit">save</button>
        </p>
    </form>
</Togglable>
)

export default blogForm