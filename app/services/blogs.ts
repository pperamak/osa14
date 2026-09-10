const blogs = [
  {id: 1, title: "Seikkailuni", author: "Päiviö", url: "over.out", likes: 2},
  {id:2, title: "Hienostoravintolat", author: "Nirppa", url: "nokka.com", likes: 8}
]

let nextId = 3

export const getBlogs = () => {
  return blogs
}

export const addBlog = (title: string, author: string, url: string) =>{
  blogs.push({ id: nextId++, title, author, url, likes: 0})
}