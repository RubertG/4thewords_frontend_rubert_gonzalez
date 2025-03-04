import { LoaderCircle } from "lucide-react"

export const Loading = ({
  className = "text-blue-800"
}) => {
  return (
    <div className={className}>
      <LoaderCircle className="animate-spin" />
    </div>
  )
}