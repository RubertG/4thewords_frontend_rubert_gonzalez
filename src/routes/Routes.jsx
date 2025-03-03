import { Route, Routes } from 'react-router'
import { Home } from '../features/legends/pages/Home'
import { CreateLegend } from '../features/legends/pages/CreateLegend'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/crear-leyenda' element={<CreateLegend />} />
    </Routes>
  )
}

export { AppRoutes }
