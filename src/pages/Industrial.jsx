import React from 'react'
import NavBar from '../components/Navigation/NavBar'
import Hero from '../components/Hero/Hero'
import ContainerText from '../components/Container/ContainerText'
import CardMethodology from '../components/Cards/CardMethodology/CardMethodology'
import CardService from '../components/Cards/CardServices/CardService'
import CardProjectDetail from '../components/Cards/CardProjectDetail/CardProjectDetail'
import latu from "../assets/project-images/latu.jpeg"

// Icons
import magnifying from "../assets/icons/magnifying-glass.svg"
import chartLine from "../assets/icons/chart-line.svg"
import statsUp from "../assets/icons/stats-up.svg"
import folder from "../assets/icons/folder.svg"
import clipboardText from "../assets/icons/clipboard-text.svg"
import presentation from "../assets/icons/presentation-chart.svg"
import gear from "../assets/icons/gear.svg"
import pencil from "../assets/icons/pencil-line.svg"

function Industrial() {
  return (
    <div>
      <NavBar />
      <Hero 
        page="industrial"
        title="Soluciones de diseño mecánico y automatización industrial."
        subtitle="Con el objetivo de maximizar la productividad y eficiencia operativa."
        cta="Quiero agilizar mis procesos"
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
          title="Optimizamos los procesos de tu industria →" 
          description="Brindamos servicios de ingeniería que abarcan múltiples disciplinas del sector industrial, desde las etapas iniciales de relevamiento, diseño e ingeniería básica, hasta la ejecución, habilitación y puesta en marcha de instalaciones y procesos.

          Desarrollamos soluciones a medida para optimizar la eficiencia operativa, reducir costos, cumplir con la normativa vigente y garantizar la seguridad de las instalaciones."
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
            title="Relevamiento técnico"
            description="Visita al sitio para relevar infraestructura, procesos y requerimientos normativos."
          />
          <CardMethodology 
            icon={chartLine}
            title="Análisis y diagnóstico"
            description="Evaluación técnica del estado actual y detección de oportunidades de mejora."
          />
          <CardMethodology 
            icon={pencil}
            title="Diseño de soluciones"
            description="Desarrollo de propuestas técnicas a medida: diseño mecánico, rediseño de procesos o sistemas."
          />
          <CardMethodology 
            icon={presentation}
            title="Propuesta técnica y económica"
            description="Presentación del proyecto con detalle de alcance, costos, plazos e impacto esperado."
          />
          <CardMethodology 
            icon={clipboardText}
            title="Gestión de habilitaciones"
            description="Tramitación ante organismos como SIME y URSEA para habilitación de instalaciones industriales, calderas y sistemas térmicos."
          />
          <CardMethodology 
            icon={statsUp}
            title="Supervisión y ejecución"
            description="Acompañamiento durante la ejecución del proyecto y supervisión técnica para garantizar la correcta implementación."
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
        <div className='grid grid-cols-3 md:flex-row gap-(--spacing-xxs)'>
          <CardService 
            icon={folder}
            title="Proyectos de ingeniería"
            description="Desarrollamos proyectos integrales adaptados a las necesidades específicas del cliente, que abarcan desde el diseño conceptual hasta la ejecución y puesta en marcha, garantizando soluciones eficientes y seguras."
          />
          <CardService 
            icon={gear}
            title="Diseño mecánico"
            description="Realizamos diseños detallados de componentes y sistemas mecánicos, utilizando herramientas CAD y modelado 3D para asegurar precisión y optimización de recursos."
          />
          <CardService 
            icon={clipboardText}
            title="Habilitaciones SIME"
            description="Gestionamos la documentación, trámites y certificaciones necesarias ante el Servicio de Instalaciones Mecánicas y Eléctricas (SIME), asegurando el cumplimiento normativo y la legalidad de las instalaciones industriales."
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
        <h3 className='heading-3 text-(--primary)'>Proyecto realizado</h3>
        <CardProjectDetail 
            image={latu}
            title="Escultura en Movimiento instalada en el LATU"
            description="Escultura dotada con movimiento relativo entre sus módulos, mediante 7 articulaciones, accionadas por motores eléctricos, controlados por un PLC y variadores de frecuencia.
            
            Estructura de acero recubierta por madera, tiene una envergadura de 5 metros de alto y 4 metros de ancho. Construida por las empresas Urumaquinas y Todotaller."
        />
      </section>
    </div>
  )
}

export default Industrial
