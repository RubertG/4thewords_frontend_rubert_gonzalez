import { Route, Routes } from 'react-router'
import { Home } from '../features/legends/pages/Home'
import { CreateLegend } from '../features/legends/pages/CreateLegend'
import { EditLegend } from '../features/legends/pages/EditLegend'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/crear-leyenda' element={<CreateLegend />} />
      <Route path='/editar-leyenda/:id' element={<EditLegend />} />
    </Routes>
  )
}

export { AppRoutes }
