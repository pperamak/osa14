const blogs = [
  {id: 1, title: "Seikkailuni", author: "Päiviö", url: "over.out", likes: 2},
  {id:2, title: "Hienostoravintolat", author: "Nirppa", url: "nokka.com", likes: 8}
]

const Blogs = () => {
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