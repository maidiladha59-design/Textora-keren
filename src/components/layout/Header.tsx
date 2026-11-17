import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { DesktopNav } from "@/components/layout/DesktopNav";
import { MobileNav } from "@/components/layout/MobileNav";
import { Logo } from "@/components/ui/Logo";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { dictionary } from "@/lib/i18n/id";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-[var(--header-background)] backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          aria-label={dictionary.header.brandHome}
          className="shrink-0 rounded-lg"
        >
          <Logo />
        </Link>

        <div className="hidden lg:block">
          <DesktopNav />
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden lg:block">
            <ThemeToggle />
          </div>
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
