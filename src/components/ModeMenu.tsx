/**
 * Componente ModeMenu - Menú flotante para cambiar modos
 * Permite cambiar entre básico, científico y activar conversiones
 */

import { useState, useRef, useEffect } from 'react'
import type { CalculatorMode } from '@/types/calculator'

interface ModeMenuProps {
  iconUrl?: string
  onModeChange: (mode: CalculatorMode) => void
  onConversionToggle: (enabled: boolean) => void
  currentMode: CalculatorMode
  conversionEnabled: boolean
}

export function ModeMenu({
  iconUrl,
  onModeChange,
  onConversionToggle,
  currentMode,
  conversionEnabled,
}: ModeMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!isOpen) return

    const handleClickOutside = (e: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    setTimeout(() => {
      document.addEventListener('mousedown', handleClickOutside)
    }, 1)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  const handleModeClick = (mode: CalculatorMode) => {
    onModeChange(mode)
    setIsOpen(false)
  }

  return (
    <>
      {/* FAB Button */}
      <button
        ref={buttonRef}
        className="absolute bottom-8 left-5 z-[1100] w-14 h-14 rounded-full bg-[#181818] shadow-[0_2px_12px_rgba(0,0,0,0.25)] border-none flex items-center justify-center cursor-pointer transition-shadow duration-200 hover:shadow-[0_4px_24px_rgba(0,0,0,0.35)]"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Cambiar modo"
      >
        {iconUrl && (
          <img
            src={iconUrl}
            alt="Icono Calculadora"
            className="w-8 h-8 object-contain pointer-events-none"
            draggable="false"
          />
        )}
      </button>

      {/* Popup Menu */}
      {isOpen && (
        <nav
          ref={menuRef}
          className="absolute left-[14px] bottom-24 min-w-[220px] bg-[#181818] rounded-[18px] shadow-[0_6px_32px_rgba(0,0,0,0.28)] py-[14px] z-[1200] animate-[fab-fadein_0.25s]"
          aria-label="Menú de modos de calculadora"
        >
          <ul className="list-none m-0 p-0">
            <li
              className={`py-3 px-[22px] text-white text-lg flex items-center cursor-pointer border-none bg-transparent transition-all duration-[130ms] ${
                currentMode === 'basic'
                  ? 'bg-[#232325] text-calculator-button-op'
                  : 'hover:bg-[#232325] hover:text-calculator-button-op'
              }`}
              onClick={() => handleModeClick('basic')}
            >
              <span className="w-9 inline-block mr-3">÷×</span> Básica
            </li>
            <li
              className={`py-3 px-[22px] text-white text-lg flex items-center cursor-pointer border-none bg-transparent transition-all duration-[130ms] ${
                currentMode === 'scientific'
                  ? 'bg-[#232325] text-calculator-button-op'
                  : 'hover:bg-[#232325] hover:text-calculator-button-op'
              }`}
              onClick={() => handleModeClick('scientific')}
            >
              <span className="w-9 inline-block mr-3">𝑓(x)</span> Científica
            </li>
            <li
              className={`py-3 px-[22px] text-white text-lg flex items-center cursor-pointer border-none bg-transparent transition-all duration-[130ms] ${
                currentMode === 'notes'
                  ? 'bg-[#232325] text-calculator-button-op'
                  : 'hover:bg-[#232325] hover:text-calculator-button-op'
              }`}
              onClick={() => handleModeClick('notes')}
            >
              <span className="w-9 inline-block mr-3">𝑥/𝑦</span> Notas matemáticas
            </li>
            <li className="h-px bg-calculator-sidebar-dark my-2 pointer-events-none"></li>
            <li className="py-3 px-[22px] text-white text-lg flex items-center cursor-pointer border-none bg-transparent transition-all duration-[130ms] hover:bg-[#232325] hover:text-calculator-button-op">
              <label className="flex items-center cursor-pointer w-full">
                <div className="relative inline-block w-9 h-[22px] mr-[10px]">
                  <input
                    type="checkbox"
                    className="opacity-0 w-0 h-0"
                    checked={conversionEnabled}
                    onChange={e => onConversionToggle(e.target.checked)}
                  />
                  <span
                    className={`absolute cursor-pointer top-0 left-0 right-0 bottom-0 rounded-[14px] transition-all duration-200 ${
                      conversionEnabled ? 'bg-calculator-button-op' : 'bg-[#333]'
                    } before:absolute before:content-[''] before:h-4 before:w-4 before:left-[3px] before:bottom-[3px] before:bg-white before:rounded-full before:transition-all before:duration-200 ${
                      conversionEnabled ? 'before:translate-x-[14px]' : ''
                    }`}
                  ></span>
                </div>
                Convertir
              </label>
            </li>
          </ul>
        </nav>
      )}

      <style>{`
        @keyframes fab-fadein {
          from {
            opacity: 0;
            transform: translateY(32px);
          }
          to {
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </>
  )
}
