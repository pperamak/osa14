import { notFound } from "next/navigation";
import { getBlogById } from "@/app/services/blogs";

const BlogPage = async ({ params}: { params: Promise<{ id: string }>})=>{
  const { id } = await params
  const blog = getBlogById(Number(id))

  if (!blog){
    notFound()
  }

  return (
    <div>
      <h3>{blog.title}</h3>
      <div>by {blog.author}</div>
      <div>{blog.url}</div>
      <div>likes: {blog.likes}</div>
    </div>
  )
}

export default BlogPage
