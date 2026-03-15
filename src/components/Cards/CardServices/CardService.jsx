

const CardService = ({icon, title, description, link}) => {
  return (
      <div className="flex flex-col gap-(--spacing-sm) text-(--neutral) p-(--spacing-sm) border rounded-sm border-(--neutral-light)">
        <div className="flex items-center gap-(--spacing-xxxs)">
          <img className="w-[24px] h-[24px]" src={icon} alt="icon.svg" />
          <h3 className='heading-5 text-(--primary)'>{title}</h3>
        </div>
        <p className="paragraph">{description}</p>
        {link && <a href={link} className="text-(--secondary) hover:text-(--accent) transition ease duration-200">Más información →</a>}
      </div>
  )
}

export default CardService


