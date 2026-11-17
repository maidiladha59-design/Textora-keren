import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Logo } from "@/components/ui/Logo";
import {
  accountLinks,
  exploreLinks,
  generatorLinks,
  legalLinks,
  type NavLink,
} from "@/config/navigation";
import { dictionary } from "@/lib/i18n/id";

const COPYRIGHT_YEAR = new Date().getFullYear();

function FooterColumn({
  title,
  links,
  className,
}: {
  title: string;
  links: readonly NavLink[];
  className?: string;
}) {
  return (
    <div className={className}>
      <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
        {title}
      </h2>
      <ul className="mt-3 space-y-0.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="inline-flex min-h-9 items-center text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <Container className="py-12 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12">
          <div className="sm:col-span-2 lg:col-span-4">
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-6 text-muted-foreground">
              {dictionary.footer.description}
            </p>
            <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-border bg-surface-muted px-3 py-1.5 text-xs font-medium text-muted-foreground">
              <ShieldCheck className="size-3.5" aria-hidden="true" />
              Teks diproses di browser
            </p>
          </div>

          <FooterColumn
            className="lg:col-span-3"
            title={dictionary.nav.tools}
            links={generatorLinks}
          />

          <div className="lg:col-span-2">
            <FooterColumn
              title={dictionary.nav.explore}
              links={exploreLinks}
            />
            <FooterColumn
              className="mt-8"
              title={dictionary.nav.account}
              links={accountLinks}
            />
          </div>

          <FooterColumn
            className="lg:col-span-3"
            title={dictionary.nav.legal}
            links={legalLinks}
          />
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>{dictionary.footer.copyright(COPYRIGHT_YEAR)}</p>
          <p>{dictionary.footer.localNote}</p>
        </div>
      </Container>
    </footer>
  );
}
