import React from 'react'
import NavBar from '../components/Navigation/NavBar'
import Hero from '../components/Hero/Hero'
import CardService from '../components/Cards/CardServices/CardService'
import CardProject from '../components/Cards/CardProject/CardProject'
import ContainerImage from '../components/Container/ContainerImage'
import aboutImage from "../assets/images/about.jpg"
import Counter from '../components/Counters/Counter'
import { articles } from "../components/BlogData/Articles.js"

//Icons
import sun from "../assets/icons/sun.svg"
import statsUp from "../assets/icons/stats-up.svg"
import gear from "../assets/icons/gear.svg"
import Logos from '../components/Logos/Logos'
import CardBlog from '../components/Cards/CardBlog/CardBlog'


function Home() {
  console.log(sun);
  
  return (
    <div>

      {/* ============================= NAVBAR ============================== */}
      <NavBar />

      {/* ==================== HERO ==================== */}
      <Hero
        page="home"
        title="Soluciones integrales en energías renovables, eficiencia energética e ingeniería industrial."
        subtitle={
        <span>
          {/* <p>Ofrecemos soluciones integrales en energías renovables, eficiencia energética e ingeniería industrial.</p> */}
          <p>Pensamos en empresas que buscan optimizar costos, mejorar su desempeño energético y avanzar hacia la sostenibilidad.</p>
        </span>}
        cta="Quiero empezar a ahorrar "
        ctaLink="/calculadora"
      />



      {/* =========== AUTORIDAD ========== */}
      <section className='
          flex
          flex-col
          gap-(--spacing-xxl)
          py-(--spacing-xxxl)
          px-(--section-padding-inline-sm) 
          md:px-(--section-padding-inline-md) 
          lg:px-(--section-padding-inline-lg)'
        >
        <h3 className='heading-3 text-(--primary) text-center'>Empresas que ya confiaron en nosotros</h3>
        <Logos />
      </section>

      

      {/* =========== SERVICIOS =========== */}
      <section 
        className='
          flex
          flex-col
          gap-(--spacing-xl)
          py-(--spacing-xxxl)
          px-(--section-padding-inline-sm) 
          md:px-(--section-padding-inline-md) 
          lg:px-(--section-padding-inline-lg)
        '>
        <h3 className='heading-3 text-(--primary)'>Nuestros servicios</h3>
        <div 
          className='
            grid
            grid-cols-3
            gap-(--spacing-xxs) 
            md:flex-row
          '>
          <CardService
            icon={sun}
            id="energias-renovables"
            title="Energías renovables"
            description="Nos dedicamos al desarrollo de proyectos e instalación de energía renovable para que ahorres en tu factura de luz."
            link="/energias-renovables"
          />
          <CardService
            icon={statsUp}
            id="eficiencia-energetica"
            title="Eficiencia energética"
            description="Realizamos proyectos de eficiencia energética orientados a reducir el consumo de energía y los costos de tu empresa o industria."
            link="/eficiencia-energetica"
          />
          <CardService
            icon={gear}
            id="diseno-industrial"
            title="Diseño Industrial"
            description="Soluciones de diseño mecánico y automatización industrial para optimizar procesos con alto grado de ingeniería en detalle."
            link="/ingenieria-industrial"
          />
        </div>
      </section>


      {/* ===================== BLOG =================== */}
      <section className='
          flex
          flex-col
          gap-(--spacing-xxl)
          py-(--spacing-xxxl)
          px-(--section-padding-inline-sm) 
          md:px-(--section-padding-inline-md) 
          lg:px-(--section-padding-inline-lg)'
        >
        <h3 className='heading-3 text-(--primary) text-center'>Novedades y noticias</h3>
        <div 
          className='
            grid
            grid-cols-3
            gap-(--spacing-xxs) 
            md:flex-row
          '>
            
           {/* ========= CARDS LIST ========= */} 
            {articles.map((article) => (
              <CardBlog
                key={article.slug}
                title={article.title}
                description={article.description}
                date={article.date}
                slug={article.slug}
                cover={article.cover}
              />
            ))}
        </div>

      </section>



      {/* ============= PROYECTOS ============== */}
      <section 
        className='
          flex
          flex-col
          gap-(--spacing-xl)
          py-(--spacing-xxl)
          px-(--section-padding-inline-sm) 
          md:px-(--section-padding-inline-md) 
          lg:px-(--section-padding-inline-lg)
        '>
        <h3 className='heading-3 text-(--primary)'>Proyectos destacados</h3>
        <div 
          className='
            grid
            grid-cols-3
            gap-(--spacing-xxs) 
            md:flex-row
          '>
          <CardProject
            category="ENERGÍAS RENOVABLES"
            title="Intendencia de Durazno"
            description="Instalación fotovoltaica para el Centro Logístico de la Intendencia de Durazno."
            year="2025"
            link="/energias-renovables"
          />
          <CardProject
            category="EFICIENCIA ENERGÉTICA"
            title="Copagran"
            description="Auditoría energética realizada en planta de Young, Río Negro."
            year="2018"
            link="/eficiencia-energetica"
          />
          <CardProject
            category="INGENIERÍA INDUSTRIAL"
            title="Escultura en Movimiento LATU"
            description="Escultura cinética con movimiento rotativo entre sus módulos."
            year="2017"
            link="/ingenieria-industrial"
          />
        </div>
      </section>




      {/* =========== ABOUT ============ */}
      <section 
        className='
          flex
          flex-col
          gap-(--spacing-xl)
          py-(--spacing-xxxl)
          px-(--section-padding-inline-sm) 
          md:px-(--section-padding-inline-md) 
          lg:px-(--section-padding-inline-lg)
        '>
        <ContainerImage
          image={aboutImage}
          title="SOBRE NOSOTROS"
          heading="Somos una empresa cooperativa especializada en soluciones energéticas eficientes y sostenibles."
          description={`CUPTI Ingeniería fue fundada en el año 2013 por seis socios, en aquel entonces estudiantes de ingeniería, con el objetivo de convertirse en la referencia en el sector de la ingeniería y la eficiencia energética.
          
          Desde nuestra fundación hemos incorporado nuevos socios, y áreas de especialización para ofrecer soluciones integrales que ayudan a nuestros clientes a optimizar sus recursos energéticos y mejorar sus procesos industriales.`}
        />
      </section>




      {/* ============= CONTADORES ============ */}
      <section 
        className='
          flex 
          flex-col 
          justify-center
          gap-(--spacing-xxxl) 
          md:flex-row 
          pb-(--spacing-xxl)
          px-(--section-padding-inline-sm) 
          md:px-(--section-padding-inline-md) 
          lg:px-(--section-padding-inline-lg
        '>
        <Counter number="10" description="Años de experiencia" />
        <Counter number="100" description="Proyectos terminados" />
        <Counter number="135.000" description="kWh ahorrados en todo el país" />
      </section>

      

      
    </div>
  )
}

export default Home
