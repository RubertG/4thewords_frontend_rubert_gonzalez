import { Button } from "../../../../components/ui/Button";
import { Input, FileInput } from "../../../../components/forms/Input";
import { Label } from "../../../../components/forms/Label";
import { Textarea } from "../../../../components/forms/Textarea";
import { InputError } from "../../../../components/forms/InputError";
import { Loading } from "../../../../components/ui/Loading";
import { useLegendForm } from "../../hooks/useLegendForm";

export const LegendForm = ({
  className,
  loading,
  onSubmit,
  defaultValues = {}
}) => {
  const { errors, handleSubmit, imageFile, register } = useLegendForm(defaultValues)

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`space-y-3 ${className}`}
    >
      <div className="grid grid-cols-1 gap-x-6 gap-y-4 md:grid-cols-2">
        <Label htmlFor="name" text="Nombre de la leyenda" className="md:text-base">
          <Input
            placeholder="Ej: La Llorona"
            {...register('name')}
          />

          {errors.name?.message && (
            <InputError error={errors.name.message} />
          )}
        </Label>

        <Label htmlFor="legend_date" text="Fecha de la leyenda" className="md:text-base">
          <Input
            placeholder="Ej: 2021-10-31"
            id="legend_date"
            type="date"
            {...register('legend_date')}
          />

          {errors.legend_date?.message && (
            <InputError error={errors.legend_date.message} />
          )}
        </Label>

        <Label htmlFor="category" text="Categoría de la leyenda" className="md:text-base">
          <Input
            placeholder="Ej: Terror"
            id="category"
            {...register('category')}
          />

          {errors.category?.message && (
            <InputError error={errors.category.message} />
          )}
        </Label>

        <Label htmlFor="province" text="Provincia de la leyenda" className="md:text-base">
          <Input
            placeholder="Ej: San José"
            id="province"
            {...register('province')}
          />

          {errors.province?.message && (
            <InputError error={errors.province.message} />
          )}
        </Label>

        <Label htmlFor="canton" text="Cantón de la leyenda" className="md:text-base">
          <Input
            placeholder="Ej: San José"
            id="canton"
            {...register('canton')}
          />

          {errors.canton?.message && (
            <InputError error={errors.canton.message} />
          )}
        </Label>

        <Label htmlFor="district" text="Distrito de la leyenda" className="md:text-base">
          <Input
            placeholder="Ej: San José"
            id="district"
            {...register('district')}
          />

          {errors.district?.message && (
            <InputError error={errors.district.message} />
          )}
        </Label>

        <Label
          className="md:col-span-2 md:text-base"
          htmlFor="description"
          text="Descripción de la leyenda"
        >
          <Textarea
            id="description"
            {...register('description')}
          />

          {errors.description?.message && (
            <InputError error={errors.description.message} />
          )}
        </Label>
      </div>

      <footer className="md:flex md:justify-between md:flex-wrap">
        <div className="flex flex-col items-center">
          <FileInput
            className="w-full"
            text="Subir imagen de la leyenda"
            multiple={false}
            {...register('image_url')}
          />

          {errors.image_url?.message && (
            <InputError error={errors.image_url.message} />
          )}

          {(imageFile && imageFile?.length > 0) && (
            <img
              src={typeof imageFile === "string" ? imageFile : URL.createObjectURL(imageFile[0])}
              alt="Vista previa de la imagen"
              className="w-full object-cover object-center rounded-xl aspect-[4/4] bg-gray-200 max-w-96 md:max-w-44 mt-3"
            />
          )}
        </div>

        <div className="mt-4 md:mt-0">
          <Button
            type="submit"
            variant="primary"
            size="small"
            className="w-full md:w-fit h-fit"
            disable={String(loading)}
          >

            {loading ? (
              <>
                <Loading className="text-white" />
                Guardando leyenda
              </>
            ) : "Guardar leyenda"}
          </Button>
        </div>
      </footer>
    </form>
  )
}