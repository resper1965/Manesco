import type { ReactNode } from 'react'
import { redirect } from 'next/navigation'
import { isAuthenticated } from '@/lib/auth'

export default async function PresentationLayout({
  children,
}: {
  children: ReactNode
}) {
  const authenticated = await isAuthenticated()

  if (!authenticated) {
    redirect('/login')
  }

  return (
    <div className="min-h-screen bg-slate-950">
      {children}
    </div>
  )
}

