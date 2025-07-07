import { NextResponse } from "next/server"

let cachedData: any = null
let lastFetch = 0
const CACHE_DURATION = 30 * 1000 // 30 seconds

export async function GET() {
  try {
    const now = Date.now()

    // Return cached data if it's still fresh
    if (cachedData && now - lastFetch < CACHE_DURATION) {
      return NextResponse.json(cachedData)
    }

    // Fetch fresh data
    const [blockHeightResponse, maxSupplyResponse] = await Promise.all([
      fetch("https://explorer.chesscoin032.com/api/getblockcount", {
        headers: {
          "User-Agent": "ChessCoin-Website/1.0",
        },
      }),
      fetch("https://explorer.chesscoin032.com/ext/getmoneysupply", {
        headers: {
          "User-Agent": "ChessCoin-Website/1.0",
        },
      }),
    ])

    let blockHeight = null
    let maxSupply = null

    if (blockHeightResponse.ok) {
      const blockHeightText = await blockHeightResponse.text()
      blockHeight = Number.parseInt(blockHeightText.trim())
    }

    if (maxSupplyResponse.ok) {
      const maxSupplyText = await maxSupplyResponse.text()
      maxSupply = Number.parseFloat(maxSupplyText.trim())
    }

    const data = {
      blockHeight,
      maxSupply,
      timestamp: now,
      success: true,
    }

    // Cache the data
    cachedData = data
    lastFetch = now

    return NextResponse.json(data)
  } catch (error) {
    console.error("Error fetching network stats:", error)

    // Return cached data if available, even if stale
    if (cachedData) {
      return NextResponse.json({
        ...cachedData,
        cached: true,
        error: "Using cached data due to fetch error",
      })
    }

    return NextResponse.json(
      {
        blockHeight: null,
        maxSupply: null,
        timestamp: Date.now(),
        success: false,
        error: "Failed to fetch network statistics",
      },
      { status: 500 },
    )
  }
}
