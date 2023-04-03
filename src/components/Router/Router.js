import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Dashboard from '../../pages/Dashboard/Dashboard'
import NotFound from '../../pages/NotFound/NotFound'

/**
 * Router component defining the app's routes and their associated components
 * @returns {JSX.Element} - router JSX element
 */
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='user/:userId'
          element={<Dashboard />} // Dashboard component to display on /user/:userId route
        />
        <Route
          path='not-found'
          element={<NotFound />} // NotFound component to display on /not-found route
        />
        <Route
          path='*'
          element={<Navigate to='/not-found' />} // Redirect all other routes to NotFound component
        />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
