import { Upload } from "lucide-react"

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

export const FileInput = ({ className, multiple, text, ...props }) => {
  return (
    <label htmlFor="file" className={`inline-flex items-center justify-center gap-1 whitespace-nowrap px-3 py-1.5 rounded-xl font-medium transition-colors space-x-2 cursor-pointer [&_svg]:shrink-0 [&_svg]:size-4 text-sm text-gray-700 hover:bg-gray-100 hover:border-gray-100 ${className}`}>
      <Upload />
      {text}

      <input
        type="file"
        id="file"
        accept="image/*"
        multiple={multiple}
        className="hidden"
        {...props}
      />
    </label>
  )
}