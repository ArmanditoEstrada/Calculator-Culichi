/**
 * Componente Display - Pantalla de la calculadora
 * Muestra el valor actual o mensajes temporales
 */

import { formatNumber } from '@/utils/calculator'
import type { TemporaryMessage } from '@/types/calculator'

interface DisplayProps {
  value: string
  tempMessage: TemporaryMessage
}

export function Display({ value, tempMessage }: DisplayProps) {
  // Formato del valor mostrado
  let displayValue = value
  if (value !== 'Error' && !tempMessage.show) {
    if (value.startsWith('-') && value !== '-0' && value !== '0') {
      const num = value.substring(1)
      displayValue = `(${formatNumber(num)})`
    } else {
      displayValue = formatNumber(value)
    }
  }

  return (
    <section
      className="h-[120px] rounded-calculator-sm bg-transparent text-calculator-text flex items-end justify-end px-5 text-5xl font-extralight tracking-tight mt-3 mb-6"
      aria-label="Pantalla de la calculadora"
      aria-live="polite"
    >
      {tempMessage.show ? (
        <span className="text-2xl text-calculator-button-op">
          {tempMessage.text}
        </span>
      ) : (
        displayValue
      )}
    </section>
  )
}
