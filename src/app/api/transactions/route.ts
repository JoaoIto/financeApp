import { NextResponse } from 'next/server'
import clientPromise from '@/db/connectionDb'

export async function GET() {
  try {
    const client = await clientPromise
    const db = client.db("financeApp")

    const transactions = await db
      .collection("transactions")
      .find({})
      .sort({ date: -1 })
      .toArray()

    return NextResponse.json(transactions)
  } catch (e) {
    console.error(e)
    return NextResponse.json({ error: 'Failed to fetch transactions' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const client = await clientPromise
    const db = client.db("financeApp")
    const { type, description, amount, date } = await request.json()

    const result = await db.collection("transactions").insertOne({
      type,
      description,
      amount: parseFloat(amount),
      date: new Date(date)
    })

    return NextResponse.json({ success: true, id: result.insertedId })
  } catch (e) {
    console.error(e)
    return NextResponse.json({ error: 'Failed to add transaction' }, { status: 500 })
  }
}