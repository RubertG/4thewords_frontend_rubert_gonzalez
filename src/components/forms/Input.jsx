export const Input = ({
  className,
  ...props
}) => {
  return (
    <input
      className={`px-3 py-1.5 border rounded-xl text-sm w-full border-gray-200 placeholder:text-gray-400 text-gray-900 outline-0 focus:border-blue-700 focus:ring-1 focus:ring-blue-700 transition-colors ${className}`}
      {...props}
    />
  )
}