import Hero from './components/Hero'
import Preview from './components/Preview'

export default function LandingPage() {
  return (
    <div>
      <div className="bg-primary">
        <Hero/>
      </div>
      <div className="bg-white">
          <Preview/>
      </div> 
    </div>
  )
}
