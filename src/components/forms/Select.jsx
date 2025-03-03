import { ChevronDown } from "lucide-react"

export const Option = ({
  children,
  ...props
}) => {
  return (
    <option className="py-2 text-sm" {...props}>
      {children}
    </option>
  )
}

export const Select = ({
  className,
  children,
  ...props
}) => {
  return (
    <div className="relative">
      <ChevronDown className="absolute size-4 text-gray-700 right-3 top-1/2 -translate-y-1/2 z-50" />

      <select className={`px-3 py-1.5 border rounded-xl text-sm w-full border-gray-200 placeholder:text-gray-400 text-gray-700 outline-0 focus:border-blue-700 focus:ring-1 focus:ring-blue-700 transition-colors appearance-none ${className}`} {...props}>

        {children}
      </select>
    </div>
  )
}