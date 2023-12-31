import { Link, useNavigate } from 'react-router-dom'

// Styling
const divStyle = {
    textAlign: 'center',
    border: '3px solid',
    'border-radius': '15px',
    margin: '10px auto',
    width: '80%',
    'background-color': 'lightgrey'
}
  
const titleStyle = {
    color: 'indigo',
    fontSize: '2em'
}

const Post = ({post, deletePost}) => {
    const navigate = useNavigate()

    const handleDelete = (event) => {
        event.preventDefault()
        deletePost(post.id)
        navigate('/')
    }
    
    return (
        <div style={divStyle}>
            <Link to={`/blog/${post.id}`}>
                <h2 style={titleStyle}>{post.title}</h2>
            </Link>
            <h3>{post.body}</h3>
            <form onSubmit={handleDelete}>
                <input type='submit' value='Delete' />
            </form>
        </div>
    )
}

export default Post