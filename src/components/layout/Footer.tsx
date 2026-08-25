import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { mailtoHref, siteConfig, telHref, whatsappHref } from "@/lib/config";
import { serviceGroups, services } from "@/content/services";

const legalLinks = [
  { href: "/aviso-legal", label: "Aviso legal" },
  { href: "/privacidad", label: "Política de privacidad" },
  { href: "/cookies", label: "Política de cookies" },
];

const socialLinks = [
  { href: siteConfig.social.facebook, label: "Facebook", Icon: FacebookIcon },
  { href: siteConfig.social.instagram, label: "Instagram", Icon: InstagramIcon },
  { href: siteConfig.social.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
].filter((s) => s.href);

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border-on-dark bg-background-dark pb-24 text-text-on-dark-secondary lg:pb-0">
      <Container className="grid grid-cols-1 gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Image
            src="/brand/logo.png"
            alt={siteConfig.legalName}
            width={1200}
            height={321}
            className="mb-4 h-9 w-auto"
          />
          <p className="text-sm leading-relaxed">{siteConfig.description}</p>
          {socialLinks.length > 0 && (
            <div className="mt-5 flex gap-3">
              {socialLinks.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border-on-dark hover:bg-white/10"
                >
                  <Icon className="h-4 w-4" aria-hidden />
                </a>
              ))}
            </div>
          )}
        </div>

        <div>
          <p className="mb-4 text-sm font-bold text-text-on-dark-primary uppercase tracking-wide">
            Servicios
          </p>
          <ul className="space-y-2 text-sm">
            {serviceGroups.map((group) => (
              <li key={group.id}>
                <span className="text-text-on-dark-primary/70">{group.label}</span>
                <ul className="mt-1 space-y-1 pl-2">
                  {services
                    .filter((s) => s.group === group.id)
                    .slice(0, 3)
                    .map((service) => (
                      <li key={service.slug}>
                        <Link href={`/servicios/${service.slug}`} className="hover:text-white">
                          {service.navLabel}
                        </Link>
                      </li>
                    ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-4 text-sm font-bold text-text-on-dark-primary uppercase tracking-wide">
            Contacto
          </p>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
              <span>{siteConfig.address.full}</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0" aria-hidden />
              <a href={telHref()} className="hover:text-white">
                {siteConfig.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0" aria-hidden />
              <a href={mailtoHref()} className="hover:text-white">
                {siteConfig.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="mb-4 text-sm font-bold text-text-on-dark-primary uppercase tracking-wide">
            Enlaces
          </p>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/taller" className="hover:text-white">
                Taller
              </Link>
            </li>
            <li>
              <Link href="/consejos" className="hover:text-white">
                Consejos
              </Link>
            </li>
            <li>
              <a
                href={whatsappHref()}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                Pedir cita por WhatsApp
              </a>
            </li>
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <div className="border-t border-border-on-dark">
        <Container className="flex flex-col items-center justify-between gap-2 py-6 text-xs sm:flex-row">
          <p>
            © {new Date().getFullYear()} {siteConfig.legalName}. Todos los derechos reservados.
          </p>
          <p>{siteConfig.address.full}</p>
        </Container>
      </div>
    </footer>
  );
}
