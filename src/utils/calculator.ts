/**
 * Lógica de cálculo de la calculadora Culichi
 * Funciones puras para operaciones matemáticas
 */

import type {
  BasicOperator,
  ScientificFunction,
  ConversionFunction,
  MathConstant,
} from '@/types/calculator'

/**
 * Aplica una operación básica entre dos números
 */
export function applyOperation(
  operator: BasicOperator,
  a: number,
  b: number
): number {
  switch (operator) {
    case '+':
      return a + b
    case '−':
      return a - b
    case '×':
      return a * b
    case '÷':
      if (b === 0) {
        throw new Error('División por cero')
      }
      return a / b
  }
}

/**
 * Aplica una función científica a un número
 */
export function applyScientificFunction(
  fn: ScientificFunction,
  value: number
): number {
  switch (fn) {
    case 'sin':
      return Math.sin((value * Math.PI) / 180)
    case 'cos':
      return Math.cos((value * Math.PI) / 180)
    case 'tan':
      return Math.tan((value * Math.PI) / 180)
    case 'log':
      return Math.log10(value)
    case 'ln':
      return Math.log(value)
    case '√':
      return Math.sqrt(value)
    case 'x²':
      return Math.pow(value, 2)
  }
}

/**
 * Aplica una conversión de unidades
 */
export function applyConversion(
  fn: ConversionFunction,
  value: number
): { result: number; message: string } {
  switch (fn) {
    case '°C→°F': {
      const result = (value * 9) / 5 + 32
      return { result, message: `${value}°C = ${result}°F` }
    }
    case 'km→mi': {
      const result = value * 0.621371
      return { result, message: `${value}km = ${result}mi` }
    }
    case 'kg→lb': {
      const result = value * 2.20462
      return { result, message: `${value}kg = ${result}lb` }
    }
    case 'm→ft': {
      const result = value * 3.28084
      return { result, message: `${value}m = ${result}ft` }
    }
  }
}

/**
 * Obtiene el valor de una constante matemática
 */
export function getMathConstant(constant: MathConstant): number {
  switch (constant) {
    case 'π':
      return Math.PI
    case 'e':
      return Math.E
  }
}

/**
 * Formatea un número para mostrar en la pantalla
 * Usa el locale es-MX para formato mexicano
 */
export function formatNumber(value: string | number): string {
  const num = typeof value === 'string' ? parseFloat(value) : value

  if (isNaN(num)) return '0'

  // Si es un número muy grande o muy pequeño, usar notación científica
  if (Math.abs(num) > 1e10 || (Math.abs(num) < 1e-6 && num !== 0)) {
    return num.toExponential(6)
  }

  // Formatear con separadores de miles para es-MX
  return num.toLocaleString('es-MX', {
    maximumFractionDigits: 8,
    useGrouping: true,
  })
}

/**
 * Valida si una entrada es válida
 */
export function isValidInput(buffer: string, char: string): boolean {
  // Solo permitir un punto decimal
  if (char === '.' && buffer.includes('.')) {
    return false
  }

  // No permitir múltiples ceros al inicio
  if (char === '0' && buffer === '0') {
    return false
  }

  return true
}
