import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Impressum from './components/Impressum'
import Blog from './components/Blog'
import BlogArticle from './components/BlogArticle'

function isStandalonePage(hash) {
  return hash === '#impressum' || hash === '#blog' || hash.startsWith('#blog/')
}

function App() {
  const [page, setPage] = useState(window.location.hash)

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
    const onHashChange = () => setPage(window.location.hash)
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  useEffect(() => {
    if (isStandalonePage(page) || page === '' || page === '#') {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
      return
    }

    const id = page.startsWith('#') ? page.slice(1) : ''
    document.getElementById(id)?.scrollIntoView()
  }, [page])

  if (page === '#impressum') {
    return <Impressum />
  }

  if (page === '#blog') {
    return <Blog />
  }

  if (page.startsWith('#blog/')) {
    const slug = decodeURIComponent(page.slice('#blog/'.length))
    return <BlogArticle slug={slug} />
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
