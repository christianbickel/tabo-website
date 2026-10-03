import { useEffect, useLayoutEffect } from 'react'
import { ArrowLeft } from 'lucide-react'
import { BlogLayout } from './Blog'
import { getPost } from '../blog/posts'

const defaultTitle = 'Tabo GmbH – Beteiligungen, Beratung & Software'

function ArticleBody({ blocks }) {
  return (
    <div className="mt-12 space-y-6 text-base md:text-lg leading-relaxed text-charcoal/80">
      {blocks.map((block, index) => {
        if (block.type === 'h2') {
          return (
            <h2
              key={index}
              className="pt-8 text-2xl md:text-3xl font-bold tracking-tight text-charcoal"
            >
              {block.text}
            </h2>
          )
        }

        if (block.type === 'ul') {
          return (
            <ul key={index} className="list-disc space-y-2 pl-6 marker:text-charcoal/30">
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )
        }

        if (block.type === 'quote') {
          return (
            <blockquote
              key={index}
              className="border-l-2 border-accent pl-5 font-medium text-charcoal"
            >
              {block.text}
            </blockquote>
          )
        }

        if (block.type === 'steps') {
          return (
            <div key={index} className="space-y-8 pt-2">
              {block.items.map((item, stepIndex) => (
                <section key={item.title}>
                  <h3 className="text-lg font-semibold text-charcoal">
                    {stepIndex + 1}. {item.title}
                  </h3>
                  <p className="mt-2">{item.text}</p>
                </section>
              ))}
            </div>
          )
        }

        if (block.type === 'emphasis') {
          return (
            <p
              key={index}
              className="pt-2 text-xl md:text-2xl font-semibold tracking-tight text-charcoal"
            >
              {block.text}
            </p>
          )
        }

        return <p key={index}>{block.text}</p>
      })}
    </div>
  )
}

export default function BlogArticle({ slug }) {
  const post = getPost(slug)

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [slug])

  useEffect(() => {
    const previous = document.title
    document.title = post ? `${post.title} – Tabo GmbH` : `Artikel nicht gefunden – ${defaultTitle}`
    return () => {
      document.title = previous
    }
  }, [post])

  if (!post) {
    return (
      <BlogLayout>
        <main className="max-w-3xl mx-auto px-6 pt-32 pb-24">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            Artikel nicht gefunden
          </h1>
          <a
            href="#blog"
            className="inline-flex items-center gap-2 mt-8 text-sm font-medium text-charcoal/70 hover:text-charcoal transition-colors"
          >
            <ArrowLeft size={16} />
            Zurück zum Blog
          </a>
        </main>
      </BlogLayout>
    )
  }

  return (
    <BlogLayout>
      <main className="max-w-3xl mx-auto px-6 pt-32 pb-24">
        <a
          href="#blog"
          className="inline-flex items-center gap-2 text-sm font-medium text-charcoal/70 hover:text-charcoal transition-colors"
        >
          <ArrowLeft size={16} />
          Alle Artikel
        </a>

        <p className="mt-10 text-sm text-charcoal/40">
          <time dateTime={post.date}>{post.dateLabel}</time>
          {' · '}
          {post.readingTime} Lesezeit
        </p>
        <h1 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight leading-[1.12] text-charcoal">
          {post.title}
        </h1>

        <ArticleBody blocks={post.blocks} />
      </main>
    </BlogLayout>
  )
}
