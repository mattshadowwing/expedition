import { type NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams
    const text = searchParams.get('text')
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const rand = Boolean(Math.floor(Math.random() * 2))
    return rand ? new Response(text) : new Response('')
}