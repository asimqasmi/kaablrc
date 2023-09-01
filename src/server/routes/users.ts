import { db } from "@/lib/db"
import { publicProcedure } from "../trpc"
import { users } from "@/lib/db/schema"
import { z } from "zod"
import { eq } from "drizzle-orm"

const getUsers = publicProcedure.query(async () => {
  const data = (await db.select().from(users)).sort((a, b) => b.id - a.id)
  const count = data.length
  return { status: 200, count, data }
})

const addUser = publicProcedure
  .input(z.object({ email: z.string() }))
  .mutation(async (opts) => {
    const addedUser = await db
      .insert(users)
      .values({ email: opts.input.email })
      .returning({
        id: users.id,
        name: users.name,
        email: users.email,
      })
    return addedUser
  })

const updateUser = publicProcedure
  .input(z.object({ email: z.string() }))
  .mutation(async (opts) => {
    console.log(opts)
    // get the user from db
    const data = (await db.select().from(users)).sort((a, b) => b.id - a.id)
    // get the dto

    return true
  })

export { getUsers, addUser, updateUser }
