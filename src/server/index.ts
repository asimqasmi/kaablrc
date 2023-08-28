import { db } from "@/lib/db"
import { publicProcedure, router } from "./trpc"
import { users } from "@/lib/db/schema"

export const appRouter = router({
  getTodos: publicProcedure.query(async () => {
    return (await db.select().from(users)).sort((a, b) => b.id - a.id)
  }),
})

export type AppRouter = typeof appRouter
