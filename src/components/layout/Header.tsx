"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteConfig, telHref, whatsappHref } from "@/lib/config";
import { serviceGroups, services } from "@/content/services";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/taller", label: "Taller" },
  { href: "/consejos", label: "Consejos" },
  { href: "/contacto", label: "Contacto" },
];

export function Header() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border-on-dark bg-background-dark/95 backdrop-blur supports-[backdrop-filter]:bg-background-dark/90">
      <Container className="flex h-20 items-center justify-between gap-4 py-3">
        <Link href="/" className="flex shrink-0 items-center" aria-label={siteConfig.name}>
          <Image
            src="/brand/logo.png"
            alt={siteConfig.legalName}
            width={1200}
            height={321}
            className="h-9 w-auto sm:h-10"
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegación principal">
          <Link
            href="/"
            className="rounded-btn px-3 py-2 text-sm font-medium text-text-on-dark-primary hover:bg-white/10"
          >
            Inicio
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              className="flex items-center gap-1 rounded-btn px-3 py-2 text-sm font-medium text-text-on-dark-primary hover:bg-white/10"
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              onClick={() => setServicesOpen((v) => !v)}
            >
              Servicios
              <ChevronDown className="h-4 w-4" aria-hidden />
            </button>

            {servicesOpen && (
              <div className="absolute left-1/2 top-full w-[640px] -translate-x-1/2 pt-3">
                <div className="grid grid-cols-3 gap-6 rounded-card-lg border border-border-on-dark bg-background-dark p-6 shadow-xl shadow-black/20">
                  {serviceGroups.map((group) => (
                    <div key={group.id}>
                      <p className="mb-3 text-xs font-bold tracking-wide text-text-on-dark-secondary uppercase">
                        {group.label}
                      </p>
                      <ul className="space-y-2">
                        {services
                          .filter((s) => s.group === group.id)
                          .map((service) => (
                            <li key={service.slug}>
                              <Link
                                href={`/servicios/${service.slug}`}
                                className="text-sm text-text-on-dark-primary hover:text-brand-accent-on-dark"
                                onClick={() => setServicesOpen(false)}
                              >
                                {service.navLabel}
                              </Link>
                            </li>
                          ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="mt-3 rounded-card-lg border border-border-on-dark bg-background-dark px-6 py-3 text-center shadow-xl shadow-black/20">
                  <Link
                    href="/servicios"
                    className="text-sm font-semibold text-brand-accent-on-dark"
                    onClick={() => setServicesOpen(false)}
                  >
                    Ver todos los servicios →
                  </Link>
                </div>
              </div>
            )}
          </div>

          {navLinks.slice(1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-btn px-3 py-2 text-sm font-medium text-text-on-dark-primary hover:bg-white/10"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={telHref()}
            className="flex items-center gap-2 text-sm font-semibold text-text-on-dark-primary hover:text-brand-accent-on-dark"
          >
            <Phone className="h-4 w-4" aria-hidden />
            {siteConfig.phoneDisplay}
          </a>
          <Button href={whatsappHref()} target="_blank" rel="noopener noreferrer">
            WhatsApp
          </Button>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-btn border border-border-on-dark text-text-on-dark-primary lg:hidden"
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
        </button>
      </Container>

      {mobileOpen && (
        <div className="max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-border-on-dark bg-background-dark lg:hidden">
          <Container className="flex flex-col gap-1 py-4 pb-36">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-btn px-3 py-2.5 text-base font-medium text-text-on-dark-primary hover:bg-white/10"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <p className="mt-3 px-3 text-xs font-bold tracking-wide text-text-on-dark-secondary uppercase">
              Servicios
            </p>
            {serviceGroups.map((group) => (
              <div key={group.id} className="px-3 py-1">
                <p className="mb-1 text-xs font-semibold text-text-on-dark-secondary">{group.label}</p>
                <ul className="flex flex-col gap-1">
                  {services
                    .filter((s) => s.group === group.id)
                    .map((service) => (
                      <li key={service.slug}>
                        <Link
                          href={`/servicios/${service.slug}`}
                          className="block py-1 text-sm text-text-on-dark-primary hover:text-brand-accent-on-dark"
                          onClick={() => setMobileOpen(false)}
                        >
                          {service.navLabel}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            ))}

            <Link
              href="/servicios"
              className="mt-2 px-3 py-2 text-sm font-semibold text-brand-accent-on-dark"
              onClick={() => setMobileOpen(false)}
            >
              Ver todos los servicios →
            </Link>

            <Button
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 w-full"
            >
              WhatsApp
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
}
