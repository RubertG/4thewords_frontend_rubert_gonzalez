import { LoaderCircle } from "lucide-react"

export const Loading = ({
  className = ""
}) => {
  return (
    <div className={className}>
      <LoaderCircle className="animate-spin text-blue-800" />
    </div>
  )
}