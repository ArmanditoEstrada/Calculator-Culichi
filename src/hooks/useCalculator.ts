/**
 * Hook personalizado para el estado y lógica de la calculadora
 */

import { useState, useCallback } from 'react'
import type {
  CalculatorState,
  BasicOperator,
  ScientificFunction,
  ConversionFunction,
  MathConstant,
  TemporaryMessage,
} from '@/types/calculator'
import {
  applyOperation,
  applyScientificFunction,
  applyConversion,
  getMathConstant,
  isValidInput,
} from '@/utils/calculator'

const INITIAL_STATE: CalculatorState = {
  buffer: '0',
  runningTotal: 0,
  previousOperator: null,
  calculatorHistory: [],
  error: false,
  overwrite: false,
}

export function useCalculator() {
  const [state, setState] = useState<CalculatorState>(INITIAL_STATE)
  const [tempMessage, setTempMessage] = useState<TemporaryMessage>({
    text: '',
    show: false,
  })

  /**
   * Muestra un mensaje temporal
   */
  const showTemporaryMessage = useCallback((message: string) => {
    setTempMessage({ text: message, show: true })
    setTimeout(() => {
      setTempMessage({ text: '', show: false })
    }, 2000)
  }, [])

  /**
   * Resetea la calculadora
   */
  const reset = useCallback(() => {
    setState(INITIAL_STATE)
  }, [])

  /**
   * Cambia el signo del número actual
   */
  const toggleSign = useCallback(() => {
    setState(prev => ({
      ...prev,
      buffer: prev.buffer === '0' ? '0' : prev.buffer.startsWith('-')
        ? prev.buffer.substring(1)
        : '-' + prev.buffer,
    }))
  }, [])

  /**
   * Convierte a porcentaje
   */
  const convertToPercentage = useCallback(() => {
    setState(prev => ({
      ...prev,
      buffer: String(parseFloat(prev.buffer) / 100),
    }))
  }, [])

  /**
   * Maneja la entrada de dígitos
   */
  const handleDigit = useCallback((digit: string) => {
    setState(prev => {
      if (!isValidInput(prev.buffer, digit)) {
        return prev
      }

      const newBuffer =
        prev.buffer === '0' && digit !== '.'
          ? digit
          : prev.buffer + digit

      return {
        ...prev,
        buffer: newBuffer,
      }
    })
  }, [])

  /**
   * Maneja el punto decimal
   */
  const handleDecimal = useCallback(() => {
    setState(prev => {
      if (prev.buffer.includes('.')) {
        return prev
      }
      return {
        ...prev,
        buffer: prev.buffer + '.',
      }
    })
  }, [])

  /**
   * Borra el último dígito
   */
  const backspace = useCallback(() => {
    setState(prev => ({
      ...prev,
      buffer: prev.buffer.length === 1 ? '0' : prev.buffer.slice(0, -1),
    }))
  }, [])

  /**
   * Procesa un operador
   */
  const processOperator = useCallback((operator: BasicOperator) => {
    setState(prev => {
      if (prev.buffer === '0') return prev

      const currentValue = parseFloat(prev.buffer)

      if (prev.runningTotal === 0) {
        return {
          ...prev,
          runningTotal: currentValue,
          previousOperator: operator,
          buffer: '0',
        }
      } else {
        try {
          const result = applyOperation(
            prev.previousOperator!,
            prev.runningTotal,
            currentValue
          )
          return {
            ...prev,
            runningTotal: result,
            previousOperator: operator,
            buffer: '0',
            error: false,
          }
        } catch {
          return {
            ...prev,
            buffer: 'Error',
            error: true,
          }
        }
      }
    })
  }, [])

  /**
   * Calcula el resultado
   */
  const calculate = useCallback(() => {
    setState(prev => {
      if (!prev.previousOperator) return prev

      const currentValue = parseFloat(prev.buffer)

      try {
        const result = applyOperation(
          prev.previousOperator,
          prev.runningTotal,
          currentValue
        )

        const calculation = `${prev.runningTotal} ${prev.previousOperator} ${prev.buffer} = ${result}`

        return {
          ...prev,
          buffer: String(result),
          runningTotal: 0,
          previousOperator: null,
          calculatorHistory: [...prev.calculatorHistory, calculation],
          error: false,
        }
      } catch {
        return {
          ...prev,
          buffer: 'Error',
          error: true,
          runningTotal: 0,
          previousOperator: null,
        }
      }
    })
  }, [])

  /**
   * Aplica una función científica
   */
  const applyScientific = useCallback(
    (fn: ScientificFunction) => {
      setState(prev => {
        const value = parseFloat(prev.buffer)
        const result = applyScientificFunction(fn, value)
        return {
          ...prev,
          buffer: String(result),
        }
      })
    },
    []
  )

  /**
   * Aplica una conversión de unidades
   */
  const applyConversionFn = useCallback(
    (fn: ConversionFunction) => {
      setState(prev => {
        const value = parseFloat(prev.buffer)
        const { result, message } = applyConversion(fn, value)
        showTemporaryMessage(message)
        return {
          ...prev,
          buffer: String(result),
        }
      })
    },
    [showTemporaryMessage]
  )

  /**
   * Aplica una constante matemática
   */
  const applyConstant = useCallback((constant: MathConstant) => {
    setState(prev => ({
      ...prev,
      buffer: String(getMathConstant(constant)),
    }))
  }, [])

  /**
   * Limpia el historial
   */
  const clearHistory = useCallback(() => {
    setState(prev => ({
      ...prev,
      calculatorHistory: [],
    }))
    showTemporaryMessage('Historial borrado')
  }, [showTemporaryMessage])

  /**
   * Carga la última operación para editar
   */
  const loadLastCalculation = useCallback(() => {
    setState(prev => {
      if (prev.calculatorHistory.length === 0) {
        return prev
      }

      const lastCalc = prev.calculatorHistory[prev.calculatorHistory.length - 1]
      const match = lastCalc.match(/[\d.]+$/)

      if (match) {
        showTemporaryMessage('Última operación cargada para editar')
        return {
          ...prev,
          buffer: match[0],
        }
      }

      return prev
    })
  }, [showTemporaryMessage])

  return {
    state,
    tempMessage,
    reset,
    toggleSign,
    convertToPercentage,
    handleDigit,
    handleDecimal,
    backspace,
    processOperator,
    calculate,
    applyScientific,
    applyConversionFn,
    applyConstant,
    clearHistory,
    loadLastCalculation,
    showTemporaryMessage,
  }
}
