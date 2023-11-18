import { Link, useNavigate } from 'react-router-dom'

// Styling
const divStyle = {
    textAlign: 'center',
    border: '3px solid',
    margin: '10px auto',
    width: '80%'
}
  
const titleStyle = {
    color: '#006643',
    fontSize: '3em'
}

const Post = ({post}) => {
    const navigate = useNavigate()
    
    return (
        <div style={divStyle}>
            <Link to={`/blog/${post.id}`}>
                <h2 style={titleStyle}>{post.title}</h2>
            </Link>
            <h3>{post.body}</h3>
        </div>
    )
}

export default Post