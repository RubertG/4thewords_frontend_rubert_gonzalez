import clsx from "clsx"

export const Badge = ({
  children, className
}) => {
  return (
    <span
      className={clsx(
        "inline-block py-1 px-3 rounded-full text-white bg-blue-900 text-xs",
        className
      )}
    >
      {children}
    </span>
  )
}