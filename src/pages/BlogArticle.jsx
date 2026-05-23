import { useParams, useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { articles } from "../components/BlogData/Articles.js"
import ReactMarkdown from "react-markdown"
import NavBar from "../components/Navigation/NavBar.jsx"

export default function BlogArticle() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const article = articles.find((a) => a.slug === slug)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (!article) {
    return (
      <div className="flex flex-col items-center justify-center py-(--spacing-xxxl) gap-(--spacing-sm)">
        <p className="body text-(--muted)">Artículo no encontrado.</p>
        <button
          onClick={() => navigate("/")}
          className="body text-(--primary) underline"
        >
          Volver al inicio
        </button>
      </div>
    )
  }

  return (
    <div>
      <div className="bg-(--primary) h-[88px]">
        <NavBar />
      </div>
      <main className="
          flex
          flex-col
          gap-(--spacing-sm)
          py-(--spacing-xxxl)
          px-(--section-padding-inline-sm)
          md:px-(--section-padding-inline-md)
          lg:px-(--blog-article-inline-lg)
          mx-auto
        ">

        {/* Header del artículo */}
        <div className="flex flex-col gap-(--spacing-lg)">
          <div className="flex flex-col gap-(--spacing-xs) border-b-1 border-(--neutral-light) pb-(--spacing-sm)">
            <h1 className="heading-2">{article.title}</h1>
            <span className="paragraph text-(--neutral)">{article.author} | {article.date}</span>
          </div>
          <img src={article.cover} alt="cover.webp" className="rounded-sm h-[460px]"/>
        </div>


        {/* Cuerpo del artículo */}
        <article className="flex flex-col pt-(--spacing-sm)">
          <ReactMarkdown
            components={{
              h2: ({ node, ...props }) => <h2 className="heading-3 text mt-8 mb-4" {...props} />,
              h3: ({ node, ...props }) => <h3 className="heading-4 text mt-6 mb-3" {...props} />,
              p: ({ node, ...props }) => <p className="paragraph text mb-4" {...props} />,
              ul: ({ node, ...props }) => <ul className="list-disc pl-6 mb-4 flex flex-col gap-2" {...props} />,
              ol: ({ node, ...props }) => <ol className="list-decimal pl-6 mb-4 flex flex-col gap-2" {...props} />,
              li: ({ node, ...props }) => <li className="paragraph" {...props} />,
              blockquote: ({ node, ...props }) => <blockquote className="border-l-4 border-(--primary) pl-4 italic my-6" {...props} />,
              strong: ({ node, ...props }) => <strong className="font-bold" {...props} />,
              em: ({ node, ...props }) => <em className="italic" {...props} />,
            }}
          >
            {article.body}
          </ReactMarkdown>
        </article>

      </main>
    </div>
  )
}
