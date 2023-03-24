import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Dashboard from '../../pages/Dashboard/Dashboard'
import NotFound from '../../pages/NotFound/NotFound'
import Home from '../../pages/Home/Home'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
      <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='user/:userId'
          element={<Dashboard />}
        />
        <Route
          path='not-found'
          element={<NotFound />}
        />
        <Route
          path='*'
          element={<Navigate to='/not-found' />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
