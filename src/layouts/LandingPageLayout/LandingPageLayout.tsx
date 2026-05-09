import { Outlet } from 'react-router-dom'
import LandingHeader from './components/LandingHeader/LandingHeader'
import Footer from './components/Footer/Footer'

function LandingPageLayout() {
  return (
    <div>
      <LandingHeader />
      <main className="mx-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default LandingPageLayout
