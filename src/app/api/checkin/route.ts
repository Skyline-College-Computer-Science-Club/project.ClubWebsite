import { sql } from '@vercel/postgres'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
    const res = await request.json()
    const email = res.email

    try {
        // const { rows, fields } = await sql`SELECT * FROM applicants WHERE email = ${email};`;
        const { rows, fields } =
            await sql`UPDATE applicants * SET checkedin = true WHERE email = ${email};`
        console.log(rows, fields)
        return NextResponse.json(JSON.stringify({ rows }), { status: 200 })
    } catch (error) {
        return NextResponse.json(JSON.stringify({ error }), { status: 500 })
    }
}
