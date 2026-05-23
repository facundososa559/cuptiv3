import React from 'react'
import Hero from '../components/Hero/Hero'
import ContainerText from '../components/Container/ContainerText'
import CardMethodology from '../components/Cards/CardMethodology/CardMethodology'
import CardService from '../components/Cards/CardServices/CardService'
import CardProjectDetail from '../components/Cards/CardProjectDetail/CardProjectDetail'

// Icons
import magnifying from "../assets/icons/magnifying-glass.svg"
import chartLine from "../assets/icons/chart-line.svg"
import chekCircle from "../assets/icons/check-circle.svg"
import clipboardText from "../assets/icons/clipboard-text.svg"
import presentation from "../assets/icons/presentation-chart.svg"
import gear from "../assets/icons/gear.svg"
import arrows from "../assets/icons/arrows-clockwise.svg"
import pencil from "../assets/icons/pencil-line.svg"


// Project Images
import copagran from "../assets/project-images/Copagran.jpeg"
import funsa from "../assets/project-images/Funsa.jpeg"
import ucot from "../assets/project-images/Ucot.jpeg"
import coleme from "../assets/project-images/Coleme.jpeg"
import ctc from "../assets/project-images/Ctc.jpeg"
import NavBar from '../components/Navigation/NavBar'

function Efficiency() {
  return (
    <div>
      <NavBar />
      <Hero
        page="efficiency"
        title="Auditorías de eficiencia energética e implementación de medidas."
        subtitle="Minimizamos tu consumo de energía sin tener que modificar tus hábitos de consumo, ni llevar cabo grandes inversiones iniciales de dinero."
        cta="Quiero ahorrar energía"
        ctaLink="/calculadora"
      />

      <section 
        className='
          py-(--spacing-xxxl)
          px-(--section-padding-inline-sm) 
          md:px-(--section-padding-inline-md) 
          xl:px-(--section-padding-inline-xl)
        '>
        <ContainerText
          title="Generamos ahorro sin inversión inicial de tiempo o de dinero →"
          description="Realizamos auditorías de eficiencia energética orientadas a identificar oportunidades de ahorro energético y económico en instalaciones industriales, comerciales o residenciales.

          A través de un análisis detallado del consumo energético, mediciones en sitio y cálculos técnicos, se proponen Medidas de Mejora en Eficiencia Energética (MMEE) que optimizan el uso de los recursos energéticos, reducen emisiones de CO₂ y mejoran la competitividad.

          Además, mediante la Línea de Asistencia para Eficiencia Energética (LAEE) del MIEM, se puede acceder a un reembolso de hasta el 85% del costo de la auditoría."
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
        <h3 className='heading-4 text-(--primary) text-center'>Metodología de una auditoría energética</h3>
        <div className='flex flex-col md:flex-row gap-(--spacing-xs)'>
          <CardMethodology 
            icon={magnifying}
            title="Recolección de datos"
            description="Obtención de mediciones y registros del consumo energético."
          />
          <CardMethodology 
            icon={chartLine}
            title="Análisis y procesamiento"
            description="Procesamiento y análisis de la información recopilada."
          />
          <CardMethodology 
            icon={chekCircle}
            title="Diagnóstico energético"
            description="Obtención de indicadores energéticos, línea base y definición de MMEE."
          />
          <CardMethodology 
            icon={clipboardText}
            title="Informe técnico"
            description="Documento detallado con consumo, medidas, ahorros estimados e inversiones."
          />
          <CardMethodology 
            icon={presentation}
            title="Presentación del informe"
            description="Exposición de resultados y recomendaciones al cliente."
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
        <div className='grid md:grid-cols-2 gap-(--spacing-xs)'>
          <CardService 
            icon={gear}
            title="Implementación de medidas"
            description="Bombas de calor Iluminación LED. Movilidad eléctrica Motores eléctricos (comando y control, cambio por motor eficiente). Calderas (diagnóstico, medición de humos, determinación de eficiencia). Aireación de silos. Análisis de facturación de UTE"
          />
          <CardService 
            icon={arrows}
            title="SGE (Sistemas de Gestión de la Energía)"
            description="Asesoramos en la implementación de Sistemas de Gestión de la Energía, que permiten mantener y mejorar de forma continua el desempeño energético de la organización, integrando la eficiencia en todos los procesos."
          />
          <CardService 
            icon={pencil}
            title="Certificaciones de eficiencia energética"
            description="El programa de Certificados de Eficiencia Energética (CEE) del MIEM ofrece un reconocimiento económico a los usuarios que implementan medidas de eficiencia energética (MMEE), permitiendo recuperar hasta un 30% de la inversión realizada en dichas medidas."
          />
          <CardService 
            icon={clipboardText}
            title="Análisis de facturación de UTE"
            description="Es el primer paso para generar un ahorro económico instantáneo. Analizamos en detalle su factura de UTE, incluyendo:  Tipo de tarifa contratada Potencia contratada Consumo de energía reactiva  Simulamos distintos escenarios para identificar la combinación más eficiente, permitiendo reducir costos sin necesidad de realizar inversiones iniciales."
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
            image={copagran}
            title="Copagran"
            description="Auditoria Energética realizada en planta de Young departamento de Rio Negro. Se realizaron los siguientes estudios:

            Análisis de secador de granos a GLP.
            Análisis y registro eléctrico de los motores del Sistema de Transporte de granos.
            Análisis y registro eléctrico de los motores del Sistema de Aireación de silos.
            Análisis y registro eléctrico de los motores ventiladores de aspiración de polvos.
            Análisis de Iluminación.
            Análisis de humos de combustión de leña en caldera Humotubular."
          />

          <CardProjectDetail 
            image={funsa}
            title="Funsa"
            description="Auditoria Energética en planta de fabricación de cubiertas de FUNSA. Se realizaron los siguientes estudios:

            Sistema de aire comprimido.
            Sistema de generación y distribución de vapor.
            Sistema de bombeo de agua.
            Análisis de generador de corriente continúa de 500KW.
            Análisis de consumo energético en ambientes controlados."
          />
          <CardProjectDetail 
            image={ucot}
            title="UCOT"
            description="Se realizó una auditoria sobre el consumo de combustible y funcionamiento de la flota de unidades de transporte de la empresa UCOT.

            La Auditoria se centró en un análisis estadístico de los datos disponibles por la empresa, una caracterización detallada de la ruta por donde se efectúan los recorridos y finalmente ensayos de campo con registro instantáneo de consumo de combustible en diferentes condiciones de manejo y funcionamiento.

            La auditoría arrojo buenos resultados llegando a considerar ahorros de hasta un 10% en el consumo de combustible."
          />
          <CardProjectDetail 
            image={coleme}
            title="COLEME"
            description="Auditoria energética en la planta de producción de leche pausterizada y fabricación de quesos. Se realizaron los siguientes estudios:

            Sistema de generación de frio y banco de hielo.
            Sistema de bombeo de agua.
            Sistema de generación y distribución de vapor."
          />
          <CardProjectDetail 
            image={ctc}
            title="CTC"
            description="Auditoria energética realiza en la planta de fabricación de productos cerámicos de empalme Olmos. Se realizaron los siguientes estudios:

            Sistema de aire comprimido.
            Sistema de molienda.
            Sistema de secado de pasta cerámica.
            Análisis de consumo de GLP en el horno.
            Análisis de consumo energético en ambientes controlados."
          />
        </div>
      </section>
    </div>
  )
}

export default Efficiency
