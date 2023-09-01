"use client"

import { Html5QrcodeScanner, Html5QrcodeSupportedFormats } from "html5-qrcode"
import { useEffect, useState } from "react"

const QRscanner = () => {
  const [scanResult, setScanResult] = useState(null)

  useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      "reader",
      {
        qrbox: {
          width: 250,
          height: 250,
        },
        fps: 5,

        formatsToSupport: [Html5QrcodeSupportedFormats.CODE_93],
      },
      true
    )

    scanner.render(success, error)

    function success(result: string) {
      scanner.clear()
      // setScanResult(result)
    }
    function error(error: any) {
      console.warn(error)
    }
  }, [])

  return (
    <div>
      <h1>QRscanner</h1>
      {scanResult ? (
        <div>
          success: <h1>{scanResult}</h1>
        </div>
      ) : (
        <div>n</div>
      )}
      <div id="reader"></div>
    </div>
  )
}

export default QRscanner
