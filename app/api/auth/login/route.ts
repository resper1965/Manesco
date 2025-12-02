import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'

const PASSWORD = process.env.PRESENTATION_PASSWORD || 'manesco2025'

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json()

    if (password === PASSWORD) {
      const cookieStore = await cookies()
      cookieStore.set('presentation-auth', 'authenticated', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 7, // 7 dias
      })

      return NextResponse.json({ success: true })
    }

    return NextResponse.json(
      { success: false, error: 'Senha incorreta' },
      { status: 401 }
    )
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Erro ao processar login' },
      { status: 500 }
    )
  }
}

