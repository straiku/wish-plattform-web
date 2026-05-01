import { Route, Routes } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import LazyLoading from './components/LazyLoading'
import LandingPageLayout from '../layouts/LandingPageLayout/LandingPageLayout'

const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'))
const LandingPage = lazy(() => import('../pages/LandingPage/LandingPage'))

const AppRoutes = () => {
  return (
    <Suspense fallback={<LazyLoading />}>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<LandingPageLayout />}>
          <Route index element={<LandingPage />} />
        </Route>
        <Route path="*" element={<LoginPage />}></Route>
      </Routes>
    </Suspense>
  )
}
export default AppRoutes
