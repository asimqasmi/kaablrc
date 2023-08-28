declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_SUPABASE_URL: string
      SUPABASE_SECRET_KEY: string
      DATABASE_CONNECTION_STRING: string
      DATABASE_URL: string
    }
  }
}

export {}
