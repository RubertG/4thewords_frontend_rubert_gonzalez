import { createPortal } from "react-dom"
import { X } from "lucide-react"
import { useDisableScroll } from "../../hooks/useDisableScroll"

export const Modal = ({
  children, isOpen, onClose, className
}) => {
  useDisableScroll(isOpen)

  if (!isOpen) return null

  return (
    createPortal(
      <div className="fixed top-0 left-0 z-50 w-full h-full bg-gray-950/50 backdrop-blur-sm flex items-center justify-center fade-in p-3">
        <section className={`bg-white p-4 rounded-lg w-full max-w-xl ${className}`}>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-xl text-gray-950 bg-white rounded-full p-1 hover:bg-gray-200 transition-colors cursor-pointer"
          >
            <X />
          </button>

          {children}
        </section>
      </div>,
      document.body
    )
  )
}
