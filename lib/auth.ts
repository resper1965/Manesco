import { cookies } from 'next/headers'

export async function isAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies()
  const authCookie = cookieStore.get('presentation-auth')
  return authCookie?.value === 'authenticated'
}

