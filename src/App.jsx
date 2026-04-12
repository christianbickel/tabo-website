import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Impressum from './components/Impressum'

function App() {
  const [page, setPage] = useState(window.location.hash)

  useEffect(() => {
    const onHashChange = () => {
      setPage(window.location.hash)
      window.scrollTo(0, 0)
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  if (page === '#impressum') {
    return <Impressum />
  }

  return (
    <div className="min-h-screen bg-white text-charcoal">
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
