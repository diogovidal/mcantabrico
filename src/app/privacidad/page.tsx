import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Política de privacidad",
  robots: { index: false, follow: true },
  alternates: { canonical: "/privacidad" },
};

export default function PrivacidadPage() {
  return (
    <LegalLayout title="Política de privacidad" updatedAt="Pendiente de fecha de publicación">
      <h2>1. Responsable del tratamiento</h2>
      <p>
        {siteConfig.legalName}, con domicilio en {siteConfig.address.full} y
        correo electrónico {siteConfig.email}, es el responsable del
        tratamiento de los datos personales recogidos a través de este sitio
        web.
      </p>

      <h2>2. Datos que se recogen</h2>
      <p>
        A través del formulario de {"«Pedir cita»"} se recogen los
        siguientes datos: nombre, teléfono, email (opcional), marca y modelo
        del vehículo, matrícula (opcional), servicio o motivo de la consulta,
        descripción del problema (opcional) y fecha preferida (opcional).
      </p>

      <h2>3. Finalidad</h2>
      <p>
        Los datos se utilizan exclusivamente para gestionar la solicitud de
        cita previa y contactar con el usuario para confirmar disponibilidad.
        No se utilizan para fines distintos ni se ceden a terceros salvo
        obligación legal o para la prestación del propio servicio (por
        ejemplo, el envío del email de notificación a través de un proveedor
        de email transaccional).
      </p>

      <h2>4. Base legal</h2>
      <p>
        La base legal para el tratamiento es el consentimiento explícito del
        usuario, otorgado al marcar la casilla correspondiente en el
        formulario.
      </p>

      <h2>5. Conservación de los datos</h2>
      <p>
        Los datos se conservarán durante el tiempo necesario para gestionar la
        solicitud y, posteriormente, durante los plazos legalmente exigibles.
      </p>

      <h2>6. Encargados de tratamiento y servicios de terceros</h2>
      <p>
        Para el funcionamiento del formulario de cita previa y de las
        secciones de reseñas/ubicación, este sitio puede apoyarse en
        proveedores de infraestructura y comunicación (por ejemplo, servicios
        de base de datos, envío de email transaccional y Google Maps
        Platform). El uso de Google Maps Platform está sujeto a las
        condiciones y política de privacidad de Google.
      </p>

      <h2>7. Derechos de las personas usuarias</h2>
      <p>
        El usuario puede ejercer sus derechos de acceso, rectificación,
        supresión, oposición, limitación y portabilidad escribiendo a{" "}
        {siteConfig.email}.
      </p>
    </LegalLayout>
  );
}
