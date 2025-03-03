import { cva } from "class-variance-authority"

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap px-3 py-1.5 rounded-xl border cursor-pointer font-medium transition-colors [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:size-3',
  {
    variants: {
      variant: {
        primary: "bg-blue-700 text-gray-100 border-blue-700 hover:bg-blue-800 hover:border-blue-800",
        ghost: 'text-gray-700 border-transparent hover:bg-gray-100 hover:border-gray-100',
        outline: 'text-gray-700 border-gray-300 hover:bg-gray-100 hover:border-gray-600',
        danger: 'bg-red-700 text-gray-100 border-red-700 hover:bg-red-800 hover:border-red-800'
      },
      size: {
        normal: 'text-base',
        small: 'text-sm'
      }
    },
    defaultVariants: {
      variant: 'primary',
      size: 'normal'
    }
  }
)

export const Button = ({
  children, className, variant, size, ...props
}) => {
  const classNames = buttonVariants({ variant, size }) + (className ? ` ${className}` : '')

  return (
    <button
      className={classNames}
      {...props}
    >
      {children}
    </button>
  )
}
