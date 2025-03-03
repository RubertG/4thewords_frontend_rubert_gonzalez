export const LegendList = ({
  className,
  loading,
  error,
  legends,
  children,
  onLoading,
  onError,
  onEmpty
}) => {
  return (
    <ul className={className}>
      {loading && onLoading}
      {error && !loading && onError}
      {legends.length === 0 && !loading && !error && onEmpty}
      {legends.length > 0 && !loading && !error && children(legends)}
    </ul>
  )
}
