import { db } from "@/db"
import { users } from "@/db/schema"
import { eq } from "drizzle-orm"

export const getUsersWithBlogs = async (userName: string) => {
  return db.query.users.findFirst({
    where: eq(users.username, userName),
    with: { blogs: true }
  })
}

export const getUsers = async () => {
  return db.query.users.findMany()
}