import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Política de cookies",
  robots: { index: false, follow: true },
  alternates: { canonical: "/cookies" },
};

export default function CookiesPage() {
  return (
    <LegalLayout title="Política de cookies" updatedAt="Pendiente de fecha de publicación">
      <h2>1. Qué son las cookies</h2>
      <p>
        Las cookies son pequeños archivos que se almacenan en el navegador del
        usuario al visitar un sitio web, y que permiten recordar información
        sobre su visita.
      </p>

      <h2>2. Cookies utilizadas en este sitio</h2>
      <ul>
        <li>
          <strong>Cookies técnicas necesarias:</strong> imprescindibles para
          el funcionamiento básico del sitio.
        </li>
        <li>
          <strong>Google Maps:</strong> al mostrar mapas o contenido de Google
          Maps Platform (ubicación del taller, reseñas), Google puede
          establecer sus propias cookies, sujetas a su política de
          privacidad.
        </li>
      </ul>
      <p>
        Actualmente este sitio no incorpora cookies analíticas o publicitarias
        de terceros. Si en el futuro se incorporan (por ejemplo, analítica de
        uso), se solicitará el consentimiento previo del usuario y se
        actualizará esta política.
      </p>

      <h2>3. Cómo gestionar las cookies</h2>
      <p>
        El usuario puede permitir, bloquear o eliminar las cookies instaladas
        en su equipo mediante la configuración de su navegador.
      </p>

      <h2>4. Más información</h2>
      <p>
        Para cualquier duda sobre esta política, puede escribir a{" "}
        {siteConfig.email}.
      </p>
    </LegalLayout>
  );
}
