import { getBlogs } from "../services/blogs"

const Blogs = () => {
  const blogs = getBlogs()
  return (
    <div>
      <h2>Blogs</h2>
      <ul>
        {blogs.map(blog =>(
          <li key={blog.id}>
            <h3>{blog.title}</h3>
            <div>by {blog.author}</div>
            <div>{blog.url}</div>
            <div>likes: {blog.likes}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Blogs