/**
 * Componente Keypad - Teclado de la calculadora
 * Contiene todos los botones organizados en filas
 */

import { Button } from './Button'
import type {
  BasicOperator,
  ScientificFunction,
  ConversionFunction,
  MathConstant,
} from '@/types/calculator'

interface KeypadProps {
  onDigit: (digit: string) => void
  onOperator: (op: BasicOperator) => void
  onEquals: () => void
  onClear: () => void
  onToggleSign: () => void
  onPercentage: () => void
  onDecimal: () => void
  onScientific: (fn: ScientificFunction) => void
  onConversion: (fn: ConversionFunction) => void
  onConstant: (constant: MathConstant) => void
  showScientific: boolean
  showConversion: boolean
  iconUrl?: string
}

export function Keypad({
  onDigit,
  onOperator,
  onEquals,
  onClear,
  onToggleSign,
  onPercentage,
  onDecimal,
  onScientific,
  onConversion,
  onConstant,
  showScientific,
  showConversion,
  iconUrl,
}: KeypadProps) {
  return (
    <section className="grid grid-cols-4 gap-calculator-gap" id="calcButtons">
      {/* Fila 1: Funciones básicas */}
      <Button
        label="AC"
        variant="action"
        onClick={onClear}
        aria-label="Limpiar"
      />
      <Button
        label="+/−"
        variant="action"
        onClick={onToggleSign}
        aria-label="Cambio de signo"
      />
      <Button
        label="%"
        variant="action"
        onClick={onPercentage}
        aria-label="Porcentaje"
      />
      <Button
        label="÷"
        variant="operator"
        onClick={() => onOperator('÷')}
        aria-label="Dividir"
      />

      {/* Filas científicas (condicionales) */}
      {showScientific && (
        <>
          <Button
            label="sin"
            variant="scientific"
            onClick={() => onScientific('sin')}
            aria-label="Seno"
          />
          <Button
            label="cos"
            variant="scientific"
            onClick={() => onScientific('cos')}
            aria-label="Coseno"
          />
          <Button
            label="tan"
            variant="scientific"
            onClick={() => onScientific('tan')}
            aria-label="Tangente"
          />
          <Button
            label="ln"
            variant="scientific"
            onClick={() => onScientific('ln')}
            aria-label="Logaritmo natural"
          />

          <Button
            label="log"
            variant="scientific"
            onClick={() => onScientific('log')}
            aria-label="Logaritmo base 10"
          />
          <Button
            label="√"
            variant="scientific"
            onClick={() => onScientific('√')}
            aria-label="Raíz cuadrada"
          />
          <Button
            label="x²"
            variant="scientific"
            onClick={() => onScientific('x²')}
            aria-label="Al cuadrado"
          />
          <Button
            label="π"
            variant="scientific"
            onClick={() => onConstant('π')}
            aria-label="Pi"
          />
        </>
      )}

      {/* Fila de conversión (condicional) */}
      {showConversion && (
        <>
          <Button
            label="°C→°F"
            variant="conversion"
            onClick={() => onConversion('°C→°F')}
            aria-label="Celsius a Fahrenheit"
          />
          <Button
            label="km→mi"
            variant="conversion"
            onClick={() => onConversion('km→mi')}
            aria-label="Kilómetros a millas"
          />
          <Button
            label="kg→lb"
            variant="conversion"
            onClick={() => onConversion('kg→lb')}
            aria-label="Kilogramos a libras"
          />
          <Button
            label="m→ft"
            variant="conversion"
            onClick={() => onConversion('m→ft')}
            aria-label="Metros a pies"
          />
        </>
      )}

      {/* Fila 2: 7-9 y multiplicación */}
      <Button label="7" onClick={() => onDigit('7')} aria-label="Siete" />
      <Button label="8" onClick={() => onDigit('8')} aria-label="Ocho" />
      <Button label="9" onClick={() => onDigit('9')} aria-label="Nueve" />
      <Button
        label="×"
        variant="operator"
        onClick={() => onOperator('×')}
        aria-label="Multiplicar"
      />

      {/* Fila 3: 4-6 y resta */}
      <Button label="4" onClick={() => onDigit('4')} aria-label="Cuatro" />
      <Button label="5" onClick={() => onDigit('5')} aria-label="Cinco" />
      <Button label="6" onClick={() => onDigit('6')} aria-label="Seis" />
      <Button
        label="−"
        variant="operator"
        onClick={() => onOperator('−')}
        aria-label="Restar"
      />

      {/* Fila 4: 1-3 y suma */}
      <Button label="1" onClick={() => onDigit('1')} aria-label="Uno" />
      <Button label="2" onClick={() => onDigit('2')} aria-label="Dos" />
      <Button label="3" onClick={() => onDigit('3')} aria-label="Tres" />
      <Button
        label="+"
        variant="operator"
        onClick={() => onOperator('+')}
        aria-label="Sumar"
      />

      {/* Fila 5: Icono, 0, decimal e igual */}
      <Button label="" onClick={() => {}} aria-label="Icono Calculadora">
        {iconUrl && (
          <img
            src={iconUrl}
            alt="Icono Calculadora"
            className="w-10 h-10 object-contain pointer-events-none"
            draggable="false"
          />
        )}
      </Button>
      <Button label="0" onClick={() => onDigit('0')} aria-label="Cero" />
      <Button label="." onClick={onDecimal} aria-label="Punto decimal" />
      <Button
        label="="
        variant="operator"
        onClick={onEquals}
        aria-label="Igual"
      />
    </section>
  )
}
