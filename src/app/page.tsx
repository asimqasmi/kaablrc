import { SampleDatePicker } from "@/components/sample-date-picker"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="p-4">
      <button className="btn btn-primary">Button</button>
      <Button>Button</Button>
      <SampleDatePicker />
    </main>
  )
}
