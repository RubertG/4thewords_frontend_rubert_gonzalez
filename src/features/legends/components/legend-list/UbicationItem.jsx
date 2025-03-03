export const UbicationItem = ({
  value, label
}) => {
  return (
    <li>
      <p className="font-bold text-center text-sm">{value}</p>
      <p className="text-xs text-center -mt-1">{label}</p>
    </li>
  )
}
