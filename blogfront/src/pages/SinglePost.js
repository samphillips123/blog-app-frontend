import {useMemo} from 'react'
import { Link, useParams } from 'react-router-dom'

const SinglePost = ({posts}) => {
    const params = useParams()

    const currentBlog = useMemo(() => posts.find(post => post.id === parseInt(params.id)), [params.id, posts])

    return (
        <div>
            <h1>{currentBlog.title}</h1>
            <h2>{currentBlog.body}</h2>
            <Link to={`/edit/${params.id}`}>
                <button>Edit Blog Post</button>
            </Link>
            <Link to={`/`}>
                <button>Go Back</button>
            </Link>
        </div>
    )
}

export default SinglePost