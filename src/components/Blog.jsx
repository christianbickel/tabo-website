import { useEffect, useLayoutEffect } from 'react'
import { ArrowRight } from 'lucide-react'
import Navbar from './Navbar'
import Footer from './Footer'
import { posts } from '../blog/posts'

const defaultTitle = 'Tabo GmbH – Beteiligungen, Beratung & Software'

export function BlogLayout({ children }) {
  return (
    <div className="min-h-screen bg-white text-charcoal">
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default function Blog() {
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [])

  useEffect(() => {
    const previous = document.title
    document.title = `Blog – ${defaultTitle}`
    return () => {
      document.title = previous
    }
  }, [])

  return (
    <BlogLayout>
      <main className="max-w-6xl mx-auto px-6 pt-32 pb-24">
        <p className="text-sm font-medium tracking-widest uppercase text-charcoal/40 mb-4">
          Blog
        </p>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-charcoal mb-16">
          Aus der Praxis
        </h1>

        <div className="grid gap-8 max-w-3xl">
          {posts.map((post) => (
            <a
              key={post.slug}
              href={`#blog/${post.slug}`}
              className="group block rounded-2xl border border-gray-100 p-8 md:p-10 hover:border-gray-200 hover:shadow-lg transition-all"
            >
              <p className="text-sm text-charcoal/40">
                <time dateTime={post.date}>{post.dateLabel}</time>
                {' · '}
                {post.readingTime} Lesezeit
              </p>
              <h2 className="mt-4 text-2xl md:text-3xl font-bold tracking-tight text-charcoal group-hover:text-accent transition-colors">
                {post.title}
              </h2>
              <p className="mt-4 text-charcoal/60 leading-relaxed">{post.excerpt}</p>
              <span className="inline-flex items-center gap-2 mt-6 text-sm font-medium text-charcoal">
                Weiterlesen
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-0.5 transition-transform"
                />
              </span>
            </a>
          ))}
        </div>
      </main>
    </BlogLayout>
  )
}
