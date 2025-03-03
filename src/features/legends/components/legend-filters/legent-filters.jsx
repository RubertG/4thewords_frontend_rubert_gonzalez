import { FilterX } from "lucide-react"
import { Button } from "../../../../components/ui/Button"
import { Input } from "../../../../components/ui/Input"
import { Label } from "../../../../components/ui/Label"
import { Option, Select } from "../../../../components/ui/Select"

export const LegendFilters = ({
  className,
  getBy,
  filters,
  setFilters,
  filterLegends,
  clearFilters
}) => {
  const categories = getBy("category")
  const provinces = getBy("province")
  const cantons = getBy("canton")
  const districts = getBy("district")

  const handleFilterChange = (e) => {
    const { id, value } = e.target

    setFilters(id, value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    filterLegends()
  }

  return (
    <form
      className={`grid grid-cols-1 gap-x-6 gap-y-4 md:grid-cols-2 border border-gray-100 shadow-md shadow-gray-100/40 rounded-xl p-4 ${className}`}
      onSubmit={onSubmit}
    >
      <Label htmlFor="name" text="Buscar por nombre">
        <Input
          placeholder="Buscar leyenda por nombre"
          id="name"
          onChange={handleFilterChange}
          value={filters.name || ''}
        />
      </Label>

      <Label htmlFor="legend_date" text="Buscar por fecha">
        <Input
          placeholder="Buscar leyenda por fecha"
          id="legend_date"
          type="date"
          value={filters.legend_date || ''}
          onChange={handleFilterChange}
        />
      </Label>

      <Label htmlFor="category" text="Buscar por categoría">
        <Select
          id="category"
          defaultValue={filters.category || ""}
          onChange={handleFilterChange}
        >
          <Option value="">Selecciona una categoría</Option>
          {
            categories.map(category => (
              <Option key={category} value={category}>
                {category}
              </Option>
            ))
          }
        </Select>
      </Label>

      <Label htmlFor="province" text="Buscar por provincia">
        <Select
          id="province"
          defaultValue={filters.province || ""}
          onChange={handleFilterChange}
        >
          <Option value="">Selecciona una provincia</Option>
          {
            provinces.map(province => (
              <Option key={province} value={province}>
                {province}
              </Option>
            ))
          }
        </Select>
      </Label>

      <Label htmlFor="canton" text="Buscar por cantón">
        <Select
          id="canton"
          defaultValue={filters.canton || ""}
          onChange={handleFilterChange}
        >
          <Option value="">Selecciona un cantón</Option>
          {
            cantons.map(canton => (
              <Option key={canton} value={canton}>
                {canton}
              </Option>
            ))
          }
        </Select>
      </Label>

      <Label htmlFor="district" text="Buscar por distrito">
        <Select
          id="district"
          defaultValue={filters.district || ""}
          onChange={handleFilterChange}
        >
          <Option value="">Selecciona un distrito</Option>
          {
            districts.map(district => (
              <Option key={district} value={district}>
                {district}
              </Option>
            ))
          }
        </Select>
      </Label>

      <div className="flex items-center justify-start">
        <Button
          type="submit"
          variant="primary"
          size="small"
          className="md:w-fit"
        >
          Aplicar filtros
        </Button>

        <Button
          variant="outline"
          size="small"
          className="ml-2 h-full"
          onClick={clearFilters}
        >
          <FilterX />
          Limpiar filtros
        </Button>
      </div>
    </form>
  )
}