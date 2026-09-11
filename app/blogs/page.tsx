import Link from "next/link"
import { getBlogs } from "../services/blogs"
import { redirectSearch } from "../actions/blogs"

const Blogs = async ({
  searchParams,
}:{
  searchParams: Promise<{ search?: string}>
}) => {
  const { search } = await searchParams
  const allBlogs = getBlogs()
  const blogs = search
    ? allBlogs.filter((blog) => blog.title.toLowerCase().includes(search.toLowerCase()))
    : allBlogs
    
  return (
    <div>
      <h2>Blogs</h2>
      <ul>
        {blogs.sort((a, b) => b.likes - a.likes).map(blog =>(
          <li key={blog.id}>
            <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
      <form action={redirectSearch}>
        <label>
          search by title:
          <input type="text" name="search"/>
        </label> 
        <button type="submit">Search</button>
      </form>
    </div>
  )
}

export default Blogs