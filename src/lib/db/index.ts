import { drizzle } from "drizzle-orm/node-postgres"

import { Client } from "pg"

import * as dotenv from "dotenv"
import { users } from "@/lib/db/schema/user"
import { books } from "@/lib/db/schema/book"
import { bookings } from "@/lib/db/schema/booking"
import { borrowings } from "@/lib/db/schema/borrowing"
import { lessons } from "@/lib/db/schema/lesson"
import { likes } from "@/lib/db/schema/like"
import { replies } from "@/lib/db/schema/reply"

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
