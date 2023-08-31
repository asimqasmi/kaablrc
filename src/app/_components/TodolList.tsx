"use client"

import { useEffect, useRef, useState } from "react"
import { trpc } from "../_trpc/client"

const TodolList = () => {
  const [content, setContent] = useState("")
  const getTodos = trpc.getTodos.useQuery()

  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [getTodos.data])

  return (
    <div>
      {JSON.stringify(content)}
      <h1>content</h1>
    </div>
  )
}

export default TodolList
