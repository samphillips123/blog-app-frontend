import Post from '../components/Post'
import { Link } from 'react-router-dom'

const AllPosts = (props) => (
    <>
        {props.posts.map(
            (post) => <Post post={post} key={post.id} />
        )}
    </>
)

export default AllPosts