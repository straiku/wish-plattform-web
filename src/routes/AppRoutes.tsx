import { Route, Routes } from 'react-router-dom'
import { Suspense , lazy } from 'react'
import LazyLoading from './components/LazyLoading'

const LoginPage = lazy(() => import('../pages/LoginPage'))

const AppRoutes=()=>{

  return(
    <Suspense fallback={<LazyLoading/>}>
      <Routes>

      <Route path='/login' element={<LoginPage/>} />
      <Route path='*' element={<LoginPage/>}></Route>
  
     </Routes>
    </Suspense>
  )
}
export default AppRoutes