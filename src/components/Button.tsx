/**
 * Componente Button - Botón individual de la calculadora
 * Maneja diferentes tipos de botones (números, operadores, funciones)
 */

import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  variant?: 'default' | 'operator' | 'action' | 'scientific' | 'conversion'
  children?: React.ReactNode
  'aria-label': string
}

export function Button({
  label,
  variant = 'default',
  children,
  onClick,
  className = '',
  ...props
}: ButtonProps) {
  // Estilos base usando Tailwind con @layer components
  const baseStyles =
    'border-none outline-none w-full aspect-square min-h-[78px] rounded-full shadow-calculator-button transition-all duration-150 cursor-pointer flex items-center justify-center text-[32px] font-normal select-none hover:scale-95 active:scale-95 focus-visible:outline-2 focus-visible:outline-calculator-focus focus-visible:outline-offset-2'

  // Estilos según variante
  const variantStyles = {
    default: 'bg-calculator-button text-calculator-text hover:bg-calculator-button-hover',
    operator:
      'bg-calculator-button-op text-calculator-text hover:bg-calculator-button-op-hover text-[28px]',
    action:
      'bg-calculator-button-ac text-calculator-text-ac hover:bg-calculator-button-ac-hover',
    scientific:
      'bg-calculator-button text-calculator-text hover:bg-calculator-button-hover text-sm font-medium',
    conversion:
      'bg-calculator-button text-calculator-text hover:bg-calculator-button-hover text-sm font-medium',
  }

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children || label}
    </button>
  )
}
