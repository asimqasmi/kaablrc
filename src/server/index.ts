import { router } from "./trpc"
import { getUsers, addUser, updateUser } from "./routes/users"

export const appRouter = router({
  // users
  getUsers,
  addUser,
  updateUser,
})

export type AppRouter = typeof appRouter
