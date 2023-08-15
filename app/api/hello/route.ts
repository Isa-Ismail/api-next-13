import { NextResponse } from 'next/server'
 
export async function GET() {
  const res = await fetch('https://ict-6.vercel.app/api/auth')
  const data = await res.json()
  return NextResponse.json({ data })
}