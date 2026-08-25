import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Aviso legal",
  robots: { index: false, follow: true },
  alternates: { canonical: "/aviso-legal" },
};

export default function AvisoLegalPage() {
  return (
    <LegalLayout title="Aviso legal" updatedAt="Pendiente de fecha de publicación">
      <h2>1. Datos identificativos</h2>
      <p>
        En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la
        Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se
        informa de los siguientes datos: el titular de este sitio web es{" "}
        {siteConfig.legalName} ({siteConfig.name}), con domicilio en{" "}
        {siteConfig.address.full}, dirección de correo electrónico{" "}
        {siteConfig.email} y teléfono {siteConfig.phoneDisplay}. El NIF/CIF y
        los datos de inscripción registral quedan pendientes de confirmación
        por el propietario.
      </p>

      <h2>2. Objeto</h2>
      <p>
        Este sitio web tiene como finalidad informar sobre los servicios del
        taller de electromecánica {siteConfig.name} y permitir la solicitud de
        cita previa a través del formulario correspondiente.
      </p>

      <h2>3. Condiciones de uso</h2>
      <p>
        El acceso y uso de este sitio web atribuye la condición de usuario e
        implica la aceptación de las condiciones incluidas en este aviso
        legal. El usuario se compromete a hacer un uso adecuado del sitio y a
        no emplearlo para fines ilícitos.
      </p>

      <h2>4. Propiedad intelectual e industrial</h2>
      <p>
        Los contenidos, marcas, logotipos y demás elementos de este sitio web
        son propiedad de {siteConfig.legalName} o de terceros que han
        autorizado su uso, quedando prohibida su reproducción sin
        autorización expresa.
      </p>

      <h2>5. Servicios de terceros</h2>
      <p>
        Este sitio web utiliza servicios de Google Maps Platform (mapas,
        reseñas y fotos de Google) para mostrar la ubicación del taller y
        contenido público del perfil de negocio. El uso de estos servicios
        está sujeto a las condiciones y políticas de privacidad de Google.
      </p>

      <h2>6. Responsabilidad</h2>
      <p>
        {siteConfig.legalName} no se hace responsable de los daños derivados
        de un uso inadecuado del sitio web, ni garantiza la disponibilidad
        continua de los contenidos o servicios de terceros integrados.
      </p>

      <h2>7. Legislación aplicable</h2>
      <p>
        Las presentes condiciones se rigen por la legislación española. Para
        cualquier controversia, las partes se someten a los juzgados y
        tribunales que correspondan según la normativa vigente.
      </p>
    </LegalLayout>
  );
}
