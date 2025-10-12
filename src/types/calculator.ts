/**
 * Tipos para la calculadora Culichi
 * Define todas las operaciones y el estado de la aplicación
 */

export type BasicOperator = '+' | '−' | '×' | '÷'

export type ScientificFunction =
  | 'sin'
  | 'cos'
  | 'tan'
  | 'log'
  | 'ln'
  | '√'
  | 'x²'

export type ConversionFunction =
  | '°C→°F'
  | 'km→mi'
  | 'kg→lb'
  | 'm→ft'

export type MathConstant = 'π' | 'e'

export type CalculatorMode = 'basic' | 'scientific' | 'notes'

export interface CalculatorState {
  buffer: string
  runningTotal: number
  previousOperator: BasicOperator | null
  calculatorHistory: string[]
  error: boolean
  overwrite: boolean
}

export interface TemporaryMessage {
  text: string
  show: boolean
}
