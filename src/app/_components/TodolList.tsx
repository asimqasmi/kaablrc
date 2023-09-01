"use client"

import { useEffect, useRef, useState } from "react"
import { trpc } from "../_trpc/client"

const TodolList = () => {
  const [content, setContent] = useState("")
  const getUsers = trpc.getUsers.useQuery()

  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [getUsers.data])

  return (
    <div>
      {JSON.stringify(content)}
      <h1>content</h1>
    </div>
  )
}

export default TodolList
