import { useNavigate } from "react-router-dom"

export default function CardBlog({ title, description, date, slug, cover }) {
  const navigate = useNavigate()

  return (
    <article
      onClick={() => navigate(`/blog/${slug}`)}
      className="cursor-pointer flex flex-col"
    >
      {/* Imagen de portada */}
      <div className="overflow-hidden rounded-tl-sm rounded-tr-sm">
        <img
          src={cover}
          alt={title}
          className="w-full h-50 object-cover"
        />
      </div>

      {/* Metadata */}
      <div className="flex flex-col gap-(--spacing-xxs) p-(--spacing-sm) text-(--neutral) border border-t-0 rounded-bl-sm rounded-br-sm border-(--neutral-light)">
        <h4 className="heading-5 text-(--primary)">{title}</h4>
        <p className="paragraph">{description}</p>
        <div className='flex flex-column justify-between pt-(--spacing-xs) mt-(--spacing-sm) border-t-1 border-black/20'>
          <a onClick={() => navigate(`/blog/${slug}`)} className='paragraph text-(--secondary) hover:text-(--accent) transition ease duration-200'>Leer artículo →</a>
          <span className="paragraph)">{date}</span>
        </div>
      </div>
    </article>
  )
}
