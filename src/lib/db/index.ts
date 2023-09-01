import { drizzle } from "drizzle-orm/node-postgres"

import { Client } from "pg"

import * as dotenv from "dotenv"
import { users } from "./schema/user"
import { books } from "./schema/book"
import { bookings } from "./schema/booking"
import { borrowings } from "./schema/borrowing"
import { lessons } from "./schema/lesson"
import { likes } from "./schema/like"
import { replies } from "./schema/reply"

dotenv.config()

// SCHEMAS

const client = new Client({
  connectionString: process.env.DATABASE_URL,
})

client.connect()

export const db = drizzle(client, {
  schema: {
    ...users,
    ...books,
    ...bookings,
    ...borrowings,
    ...lessons,
    ...likes,
    ...replies,
  },
})
