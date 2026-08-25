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
        Este sitio web no dispone de formularios ni de base de datos propia:
        no recoge ni almacena datos personales de forma automática. El
        contacto para pedir cita se realiza directamente a través de
        WhatsApp, llamada telefónica o email, usando las aplicaciones y
        servicios del propio usuario.
      </p>
      <p>
        Cuando el usuario contacta por estos medios, los datos que comparta
        (nombre, teléfono, email, datos del vehículo, descripción del
        problema, etc.) son recibidos y tratados directamente por{" "}
        {siteConfig.legalName} como destinatario de la comunicación, no a
        través de este sitio web.
      </p>

      <h2>3. WhatsApp</h2>
      <p>
        Los botones de WhatsApp de este sitio abren una conversación en la
        aplicación de WhatsApp del usuario. Esa conversación se rige por las
        condiciones y la política de privacidad de WhatsApp/Meta, ajenas a
        este sitio web.
      </p>

      <h2>4. Finalidad</h2>
      <p>
        Los datos recibidos por {siteConfig.legalName} a través de estos
        canales se utilizan exclusivamente para gestionar la solicitud de
        cita previa y contactar con el usuario para confirmar disponibilidad.
        No se utilizan para fines distintos ni se ceden a terceros salvo
        obligación legal.
      </p>

      <h2>5. Conservación de los datos</h2>
      <p>
        Los datos se conservarán durante el tiempo necesario para gestionar la
        solicitud y, posteriormente, durante los plazos legalmente exigibles.
      </p>

      <h2>6. Servicios de terceros integrados en el sitio</h2>
      <p>
        Este sitio integra Google Maps Platform (mapa de ubicación y, cuando
        esté disponible, reseñas y fotos del perfil de negocio), que solo se
        carga tras el consentimiento de cookies del usuario. El uso de Google
        Maps Platform está sujeto a las condiciones y política de privacidad
        de Google.
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
