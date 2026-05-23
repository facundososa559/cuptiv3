import React from 'react'
import Hero from '../components/Hero/Hero'
import ContainerText from '../components/Container/ContainerText'
import CardMethodology from '../components/Cards/CardMethodology/CardMethodology'
import CardService from '../components/Cards/CardServices/CardService'
import CardProjectDetail from '../components/Cards/CardProjectDetail/CardProjectDetail'
import file from "../assets/icons/file.svg"

// Icons
import magnifying from "../assets/icons/magnifying-glass.svg"
import chartLine from "../assets/icons/chart-line.svg"
import chekCircle from "../assets/icons/check-circle.svg"
import statsUp from "../assets/icons/stats-up.svg"
import sun from "../assets/icons/sun.svg"
import fan from "../assets/icons/fan.svg"
import presentation from "../assets/icons/presentation-chart.svg"
import gear from "../assets/icons/gear.svg"
import pencil from "../assets/icons/pencil-line.svg"

// Project images
import centro from "../assets/project-images/centro-logistico-dzno.jpeg"
import supermercado from "../assets/project-images/supermercado-dznito.png"
import NavBar from '../components/Navigation/NavBar'

function Renovables() {
  return (
    <div>
      <NavBar />
      <Hero 
        page="renovables"
        title="Instalación de paneles solares y sistemas de energía renovable."
        subtitle="Instalamos sistemas de energía renovable con retorno de inversión en menos de 5 años, reduciendo costos a la hora de generar energía."
        cta="Quiero ahorrar energía"
        ctaLink="#info"
      />

      <section 
        id='info'
        className='
          py-(--spacing-xxxl)
          px-(--section-padding-inline-sm) 
          md:px-(--section-padding-inline-md) 
          xl:px-(--section-padding-inline-xl)  
      '>
        <ContainerText 
          title="Podés generar tu propia energía y reducir costos desde el primer día →" 
          description="Ofrecemos proyectos llave en mano de energías renovables, adaptados a las necesidades de cada cliente.

          Diseñamos, instalamos y habilitamos sistemas que permiten reducir hasta un 80% el costo de la factura de UTE, con períodos de repago estimados entre 6 y 8 años.

          Contamos con firma instaladora habilitada por UTE, lo que nos permite garantizar un servicio seguro, profesional y en cumplimiento con toda la normativa vigente."
        />
      </section>

      <section 
        className='
          flex 
          flex-col 
          items-center
          gap-(--spacing-xxl)
          py-(--spacing-xxl) 
          px-(--section-padding-inline-sm) 
          md:px-(--section-padding-inline-md) 
          xl:px-(--section-padding-inline-xl)
        '>
        <h3 className='heading-4 text-(--primary) text-center'>Metodología</h3>
        <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-(--spacing-xl)'>
          <CardMethodology 
            icon={magnifying}
            title="Relevamiento inicial"
            description="Visita técnica para evaluar el sitio, relevar consumos energéticos y definir necesidades del cliente."
          />
          <CardMethodology 
            icon={chartLine}
            title="Análisis de factibilidad"
            description="Estudio técnico-económico que incluye estimación del recurso, dimensionamiento preliminar y evaluación del potencial de ahorro."
          />
          <CardMethodology 
            icon={pencil}
            title="Diseño del sistema"
            description="Diseño detallado del sistema, adaptado a la necesidad específica del cliente y normativa vigente."
          />
          <CardMethodology 
            icon={presentation}
            title="Propuesta técnica y económica"
            description="Presentación de la solución propuesta, con detalle de componentes, costos, ahorros estimados y retorno de inversión."
          />
          <CardMethodology 
            icon={chekCircle}
            title="Instalación y habilitación"
            description="Montaje del sistema por personal habilitado, gestión de trámites con UTE y puesta en marcha."
          />
          <CardMethodology 
            icon={statsUp}
            title="Seguimiento y monitoreo"
            description="Capacitación al usuario y monitoreo continuo para verificar el desempeño."
          />
        </div>
      </section>

      <section 
        className='
          flex 
          flex-col 
          items-center
          gap-(--spacing-xxl)
          py-(--spacing-xxl)  
          px-(--section-padding-inline-sm) 
          md:px-(--section-padding-inline-md) 
          xl:px-(--section-padding-inline-xl)
        '>
        <h3 className='heading-4 text-(--primary) text-center'>¿Qué sigue después?</h3>
        <div className='flex flex-col md:flex-row gap-(--spacing-xxs)'>
          <CardService 
            icon={sun}
            title="Energía solar"
            description="Instalación de sistemas fotovoltaicos con firma técnica CAT B, sistemas solares térmicos para ACS y sistemas de bombeo solar. Diseños adaptados a cada necesidad, maximizando el aprovechamiento del recurso solar."
          />
          <CardService 
            icon={fan}
            title="Energía eólica"
            description="Estudios de factibilidad y diseño de sistemas eólicos de pequeña y mediana escala para generación distribuida o autoconsumo. Evaluación del recurso eólico y dimensionamiento del sistema. Mantenimiento de aerogeneradores y trabajo en palas."
          />
          <CardService 
            icon={gear}
            title="O&M de parques fotovoltaicos"
            description="Servicios de operación y mantenimiento de plantas solares, que incluyen monitoreo remoto, inspecciones periódicas, limpieza de módulos y diagnóstico de fallas. Garantizamos el rendimiento óptimo y la vida útil del sistema."
          />
        </div>
      </section>

      <section 
        className='
          flex 
          flex-col 
          gap-(--spacing-xl)
          py-(--spacing-xxxl)
          px-(--section-padding-inline-sm) 
          md:px-(--section-padding-inline-md) 
          xl:px-(--section-padding-inline-xl)
        '>
        <h3 className='heading-3 text-(--primary)'>Proyectos realizados</h3>
        <div className='flex flex-col gap-(--spacing-xxl)'>
          <CardProjectDetail 
            image={centro}
            title="Instalación fotovoltaica de 50kW para el Centro Logístico de la Intendencia de Durazno."
            description="Proyecto llave en mano diseñado para cubrir hasta el 75 % del consumo energético del establecimiento, optimizando los costos operativos y reduciendo significativamente la huella de carbono institucional. Período de repago estimado en 7 años."
          />
          <CardProjectDetail 
            image={supermercado}
            title="Instalación fotovoltaica de 20 kW para el supermercado Duraznito Service."
            description="Proyecto llave en mano desarrollado para cubrir hasta el 65 % del consumo energético del local comercial, optimizando los costos operativos y reduciendo significativamente la huella de carbono del supermercado. Período de repago estimado en 7 años."
          />
        </div>
      </section>
    </div>
  )
}

export default Renovables
