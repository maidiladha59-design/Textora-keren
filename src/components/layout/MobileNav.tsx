"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import {
  accountLinks,
  exploreLinks,
  generatorLinks,
  legalLinks,
  type NavLink,
} from "@/config/navigation";
import { dictionary } from "@/lib/i18n/id";

function NavSection({
  title,
  links,
  onNavigate,
}: {
  title: string;
  links: readonly NavLink[];
  onNavigate: () => void;
}) {
  return (
    <div className="py-3">
      <p className="mb-1.5 px-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
        {title}
      </p>
      <ul>
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              onClick={onNavigate}
              className="flex min-h-11 items-center rounded-xl px-3 text-sm font-medium text-foreground transition-colors hover:bg-surface-muted focus-visible:bg-surface-muted"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) {
      return;
    }

    if (open && !dialog.open) {
      dialog.showModal();
      document.body.style.overflow = "hidden";
    } else if (!open && dialog.open) {
      dialog.close();
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function close() {
    setOpen(false);
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-expanded={open}
        aria-haspopup="dialog"
        aria-controls="mobile-navigation"
        aria-label={dictionary.header.openMenu}
        className="grid size-11 place-items-center rounded-full border border-border bg-surface text-foreground transition-colors hover:bg-surface-muted lg:hidden"
      >
        <Menu className="size-5" aria-hidden="true" />
      </button>

      <dialog
        ref={dialogRef}
        id="mobile-navigation"
        aria-labelledby="mobile-nav-title"
        onClose={close}
        onPointerDown={(event) => {
          if (event.target === dialogRef.current) {
            dialogRef.current.close();
          }
        }}
        className="mobile-nav-dialog fixed inset-0 m-0 h-dvh max-h-none w-screen max-w-none overflow-hidden bg-transparent p-0 text-foreground"
      >
        <div className="mobile-nav-panel ml-auto flex h-full w-[min(88vw,22rem)] flex-col border-l border-border bg-background shadow-2xl">
          <div className="flex h-16 shrink-0 items-center justify-between border-b border-border px-3 pl-4">
            <span>
              <Logo />
            </span>
            <button
              type="button"
              autoFocus
              onClick={close}
              aria-label={dictionary.nav.closeMenu}
              className="grid size-11 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-surface-muted hover:text-foreground"
            >
              <X className="size-5" aria-hidden="true" />
            </button>
          </div>

          <nav
            aria-label={dictionary.header.menuLabel}
            className="flex-1 overflow-y-auto px-2 py-2"
          >
            <h2 id="mobile-nav-title" className="sr-only">
              {dictionary.header.menuLabel}
            </h2>
            <NavSection
              title={dictionary.nav.tools}
              links={generatorLinks}
              onNavigate={close}
            />
            <NavSection
              title={dictionary.nav.explore}
              links={exploreLinks}
              onNavigate={close}
            />
            <NavSection
              title={dictionary.nav.account}
              links={accountLinks}
              onNavigate={close}
            />
            <NavSection
              title={dictionary.nav.legal}
              links={legalLinks}
              onNavigate={close}
            />
          </nav>

          <div className="shrink-0 border-t border-border p-4">
            <p className="mb-2 px-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              {dictionary.theme.label}
            </p>
            <ThemeToggle variant="panel" />
          </div>
        </div>
      </dialog>
    </>
  );
}
