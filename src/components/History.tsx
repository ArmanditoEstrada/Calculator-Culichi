/**
 * Componente History - Panel lateral de historial de cálculos
 * Muestra el historial con opciones de editar y borrar
 */

import { useState } from 'react'

interface HistoryProps {
  isOpen: boolean
  onClose: () => void
  history: string[]
  onClearHistory: () => void
  onLoadLast: () => void
}

export function History({
  isOpen,
  onClose,
  history,
  onClearHistory,
  onLoadLast,
}: HistoryProps) {
  const [activePeriod, setActivePeriod] = useState<'recent' | 'month'>('recent')

  const handleClear = () => {
    if (history.length === 0) {
      return
    }
    if (confirm('¿Estás seguro de que quieres borrar todo el historial?')) {
      onClearHistory()
    }
  }

  const handleEdit = () => {
    if (history.length === 0) {
      return
    }
    onLoadLast()
    onClose()
  }

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 w-full h-full bg-black/30 z-[999] transition-all duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 w-[350px] h-screen bg-calculator-sidebar border-r border-calculator-sidebar-dark z-[1001] transition-all duration-300 flex flex-col shadow-[2px_0_20px_rgba(0,0,0,0.3)] ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        aria-label="Historial de cálculos"
      >
        {/* Header */}
        <div className="pt-[60px] px-5 pb-5 border-b border-calculator-sidebar-dark flex justify-between items-center">
          <h3 className="text-calculator-text text-2xl font-bold m-0">
            Historial
          </h3>
          <button
            className="bg-transparent border-none text-calculator-button-op text-2xl cursor-pointer p-2 rounded-md transition-all duration-200 w-10 h-10 flex items-center justify-center hover:bg-calculator-button-op/10"
            onClick={onClose}
            aria-label="Cerrar menú"
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-hidden flex flex-col">
          <section className="flex-1 flex flex-col p-5 pb-5">
            {/* Period Tabs */}
            <div className="flex mb-5 border-b border-calculator-sidebar-dark">
              <button
                className={`flex-1 bg-transparent border-none text-base py-3 px-4 cursor-pointer transition-colors duration-200 border-b-2 ${
                  activePeriod === 'recent'
                    ? 'text-calculator-button-op border-calculator-button-op'
                    : 'text-calculator-gray border-transparent'
                }`}
                onClick={() => setActivePeriod('recent')}
              >
                Últimos 7 días
              </button>
              <button
                className={`flex-1 bg-transparent border-none text-base py-3 px-4 cursor-pointer transition-colors duration-200 border-b-2 ${
                  activePeriod === 'month'
                    ? 'text-calculator-button-op border-calculator-button-op'
                    : 'text-calculator-gray border-transparent'
                }`}
                onClick={() => setActivePeriod('month')}
              >
                Últimos 30 días
              </button>
            </div>

            {/* History Content */}
            <div className="flex-1 overflow-y-auto mb-5">
              {history.length === 0 ? (
                <p className="text-calculator-gray text-center mt-8">
                  No hay cálculos en el historial
                </p>
              ) : (
                history.slice(-10).reverse().map((calc, index) => {
                  const [expression, result] = calc.split(' = ')
                  return (
                    <div
                      key={index}
                      className="bg-calculator-sidebar-dark rounded-xl py-3 px-4 mb-2 text-calculator-text text-base font-sf-mono flex justify-between items-center transition-colors duration-200 hover:bg-[#3A3A3C]"
                    >
                      <span className="calc-expression">{expression}</span>
                      <span className="calc-result font-bold">{result}</span>
                    </div>
                  )
                })
              )}
            </div>

            {/* Actions */}
            <div className="flex gap-3 pt-5 border-t border-calculator-sidebar-dark">
              <button
                className="flex-1 border-none py-3 px-4 rounded-lg text-base font-semibold cursor-pointer transition-all duration-200 bg-calculator-button-op text-white hover:bg-calculator-button-op-hover hover:text-black"
                onClick={handleEdit}
              >
                Editar
              </button>
              <button
                className="flex-1 border-none py-3 px-4 rounded-lg text-base font-semibold cursor-pointer transition-all duration-200 bg-[#FF3B30] text-white hover:bg-[#D70015]"
                onClick={handleClear}
              >
                Borrar
              </button>
            </div>
          </section>
        </div>
      </aside>
    </>
  )
}
