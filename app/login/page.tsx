'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Lock, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function LoginPage() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      })

      const data = await response.json()

      if (data.success) {
        router.push('/presentation')
        router.refresh()
      } else {
        setError(data.error || 'Senha incorreta')
      }
    } catch (err) {
      setError('Erro ao fazer login. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 space-y-6">
          <div className="text-center space-y-2">
            <div className="flex justify-center">
              <div className="bg-blue-500/10 p-3 rounded-full">
                <Lock className="w-8 h-8 text-blue-500" />
              </div>
            </div>
            <h1 className="text-2xl font-light text-slate-100">
              Acesso à Apresentação
            </h1>
            <p className="text-sm text-slate-400">
              Digite a senha para continuar
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Senha"
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                autoFocus
                disabled={loading}
              />
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg p-3"
              >
                <AlertCircle className="w-4 h-4" />
                <span>{error}</span>
              </motion.div>
            )}

            <Button
              type="submit"
              disabled={loading || !password}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white"
            >
              {loading ? 'Verificando...' : 'Entrar'}
            </Button>
          </form>

          <div className="text-center">
            <p className="text-xs text-slate-500">
              Governança de Segurança - Manesco | NESS
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

