export const InputError = ({ error, className }) => {
  return (
    <p className={`text-red-500 text-sm mt-0.5 ${className}`}>
      {error}
    </p>
  )
}