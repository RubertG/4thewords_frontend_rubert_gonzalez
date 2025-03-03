export const Title = ({ children, className }) => {
  return (
    <h1 className={`text-3xl text-gray-950 font-extrabold text-center md:text-4xl ${className}`}>
      {children}
    </h1>
  )
}