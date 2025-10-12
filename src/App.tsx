/**
 * Componente principal App - Calculadora Culichi
 * Integra todos los componentes y maneja el estado global
 */

import { useState, useEffect, useCallback } from 'react'
import { Display } from './components/Display'
import { Keypad } from './components/Keypad'
import { History } from './components/History'
import { SplashScreen } from './components/SplashScreen'
import { ModeMenu } from './components/ModeMenu'
import { useCalculator } from './hooks/useCalculator'
import type { CalculatorMode } from './types/calculator'

// Importar imagen del icono
import iconUrl from '/iconoCalaculadora.jpg'

function App() {
  const calculator = useCalculator()
  const [historyOpen, setHistoryOpen] = useState(false)
  const [calculatorMode, setCalculatorMode] = useState<CalculatorMode>('basic')
  const [conversionEnabled, setConversionEnabled] = useState(false)

  // Manejo de teclado físico
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const key = event.key

      // Números
      if (key >= '0' && key <= '9') {
        calculator.handleDigit(key)
      }
      // Operadores
      else if (key === '+') {
        calculator.processOperator('+')
      } else if (key === '-') {
        calculator.processOperator('−')
      } else if (key === '*') {
        calculator.processOperator('×')
      } else if (key === '/') {
        event.preventDefault()
        calculator.processOperator('÷')
      }
      // Igual
      else if (key === 'Enter' || key === '=') {
        calculator.calculate()
      }
      // Limpiar
      else if (key === 'Escape') {
        calculator.reset()
      }
      // Borrar
      else if (key === 'Backspace') {
        calculator.backspace()
      }
      // Decimal
      else if (key === '.') {
        calculator.handleDecimal()
      }
      // Porcentaje
      else if (key === '%') {
        calculator.convertToPercentage()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [calculator])

  const handleModeChange = useCallback((mode: CalculatorMode) => {
    setCalculatorMode(mode)
  }, [])

  const showScientific = calculatorMode === 'scientific'
  const showConversion = conversionEnabled

  return (
    <>
      <SplashScreen />

      <div className="font-sf bg-calculator-bg flex items-center justify-center p-8 min-h-screen">
        <div className="w-[380px] max-w-[calc(100%-40px)] bg-calculator-panel rounded-calculator p-6 pb-[50px] shadow-calculator relative overflow-visible">
          {/* Botón hamburguesa */}
          <button
            className="absolute top-4 left-4 z-[1000] bg-transparent border-none rounded-lg w-6 h-6 flex flex-col items-center justify-center cursor-pointer transition-all duration-200 hover:bg-calculator-button-op/10"
            onClick={() => setHistoryOpen(!historyOpen)}
            aria-label="Abrir menú de historial"
          >
            <span className="block w-4 h-0.5 bg-calculator-button-op my-[1.5px] rounded-sm transition-all duration-200"></span>
            <span className="block w-4 h-0.5 bg-calculator-button-op my-[1.5px] rounded-sm transition-all duration-200"></span>
            <span className="block w-4 h-0.5 bg-calculator-button-op my-[1.5px] rounded-sm transition-all duration-200"></span>
          </button>

          {/* Menú flotante de modos */}
          <ModeMenu
            iconUrl={iconUrl}
            onModeChange={handleModeChange}
            onConversionToggle={setConversionEnabled}
            currentMode={calculatorMode}
            conversionEnabled={conversionEnabled}
          />

          {/* Historial */}
          <History
            isOpen={historyOpen}
            onClose={() => setHistoryOpen(false)}
            history={calculator.state.calculatorHistory}
            onClearHistory={calculator.clearHistory}
            onLoadLast={calculator.loadLastCalculation}
          />

          {/* Pantalla */}
          <Display
            value={calculator.state.buffer}
            tempMessage={calculator.tempMessage}
          />

          {/* Teclado */}
          <Keypad
            onDigit={calculator.handleDigit}
            onOperator={calculator.processOperator}
            onEquals={calculator.calculate}
            onClear={calculator.reset}
            onToggleSign={calculator.toggleSign}
            onPercentage={calculator.convertToPercentage}
            onDecimal={calculator.handleDecimal}
            onScientific={calculator.applyScientific}
            onConversion={calculator.applyConversionFn}
            onConstant={calculator.applyConstant}
            showScientific={showScientific}
            showConversion={showConversion}
            iconUrl={iconUrl}
          />
        </div>
      </div>
    </>
  )
}

export default App
