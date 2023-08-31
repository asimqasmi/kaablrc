import CodeDetector from "@/components/CodeDetector"
import TodolList from "./_components/TodolList"

export default function Home() {
  return (
    <main className="p-4">
      <CodeDetector />
      <TodolList />
    </main>
  )
}
