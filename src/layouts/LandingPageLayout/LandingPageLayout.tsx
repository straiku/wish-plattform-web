import { Outlet } from 'react-router-dom'
import LandingHeader from './components/LandingHeader/LandingHeader'

function LandingPageLayout() {
  return (
    <div>
      <LandingHeader />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default LandingPageLayout
