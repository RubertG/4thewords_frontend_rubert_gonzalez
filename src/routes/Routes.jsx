import { Route, Routes } from 'react-router'
import { Home } from '../features/legends/pages/Home'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  )
}

export { AppRoutes }
