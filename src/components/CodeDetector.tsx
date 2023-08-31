"use client"
import React, { useState } from "react"
import useScanDetection from "use-scan-detection"

const CodeDetector = () => {
  const [barcodeScan, setBarcodeScan] = useState<string>("Asim")

  const handleScan = (code: string) => {
    code = code.replace(/Shift/g, "")
    setBarcodeScan(code)
  }

  useScanDetection({
    onComplete: (code: String) => {
      handleScan(code.toString()) // Convert to primitive string
    },
    minLength: 3,
  })

  return (
    <div className="flex">
      <h2>Code: </h2>{" "}
      <input
        value={barcodeScan}
        type="text"
        className="font-bold text-black bg-purple-400 rounded-full tex t-center"
        readOnly
      />
    </div>
  )
}

export default CodeDetector
