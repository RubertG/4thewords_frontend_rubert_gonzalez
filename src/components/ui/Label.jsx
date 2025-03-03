export const Label = ({
  children,
  text,
  className,
  ...props
}) => {
  return (
    <label
      className={`block text-sm text-gray-800 space-y-1 ${className}`}
      {...props}
    >
      <p>{text}</p>
      {children}
    </label>
  )
}