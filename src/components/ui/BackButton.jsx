import { Link } from "react-router";
import { Button } from "./Button";
import { ArrowLeft } from "lucide-react";

export const BackButton = ({
  variant = "ghost",
  size = "small",
  text,
  to,
  ...props
}) => {
  return (
    <Link to={to}>
      <Button
        size={size}
        variant={variant}
        {...props}
      >
        <ArrowLeft />
        {text}
      </Button>
    </Link>
  )
}