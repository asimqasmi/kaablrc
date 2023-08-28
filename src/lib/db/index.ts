import { drizzle } from "drizzle-orm/node-postgres"

import { Client } from "pg"

import * as dotenv from "dotenv"
import { users } from "./schema"

dotenv.config()

// SCHEMAS

const client = new Client({
  connectionString: process.env.DATABASE_URL,
})

client.connect()

export const db = drizzle(client, { schema: { ...users } })
