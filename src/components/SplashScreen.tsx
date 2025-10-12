/**
 * Componente SplashScreen - Pantalla de bienvenida
 * Se muestra al cargar la aplicación
 */

import { useEffect, useState } from 'react'

interface SplashScreenProps {
  duration?: number
}

export function SplashScreen({ duration = 2000 }: SplashScreenProps) {
  const [visible, setVisible] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true)
      setTimeout(() => setVisible(false), 300)
    }, duration)

    return () => clearTimeout(timer)
  }, [duration])

  if (!visible) return null

  const handleClick = () => {
    setFadeOut(true)
    setTimeout(() => setVisible(false), 300)
  }

  return (
    <div
      className={`fixed inset-0 w-screen h-screen bg-black/80 flex items-center justify-center z-[9999] transition-opacity duration-300 ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      onClick={handleClick}
    >
      <div className="splash-content">
        <h1 className="font-sf text-[24pt] font-bold text-white text-center m-0">
          MAC
        </h1>
      </div>
    </div>
  )
}
