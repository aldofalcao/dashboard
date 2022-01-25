import { Navigate, Route, Routes } from 'react-router-dom'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/inicial' element={<p>Página inicial</p>} />
      <Route path='*' element={<Navigate to='/inicial' />} />
    </Routes>
  )
}
