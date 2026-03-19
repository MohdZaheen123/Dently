import { NextResponse } from 'next/server'

export async function POST(request) {
  const { username, password } = await request.json()

  if (username === 'admin' && password === 'admin') {
    const response = NextResponse.json({ success: true })

    response.cookies.set('admin_token', 'authenticated', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 8,
      path: '/',
    })

    return response
  }

  return NextResponse.json({ success: false, message: 'Invalid credentials' }, { status: 401 })
}