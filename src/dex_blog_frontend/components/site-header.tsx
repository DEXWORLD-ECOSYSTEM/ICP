'use client';

import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Menu, X } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { useState } from 'react';
import { cn } from '@/lib/utils';

// --- COMPONENTES REUTILIZÁVEIS ---

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/categories/technology', label: 'Technology' },
  { href: '/categories/productivity', label: 'Productivity' },
  { href: '/categories/lifestyle', label: 'Lifestyle' },
];

const Logo = () => (
  <Link href="/" className="font-headline text-2xl font-bold text-foreground">
    DEX World
  </Link>
);

const NavMenu = ({ onClick }: { onClick?: () => void }) => (
  <nav
    className={cn(
      'flex items-center space-x-6 text-sm font-medium',
      onClick && 'mt-8 flex-col space-y-4 space-x-0'
    )}
  >
    {navLinks.map((link) => (
      <Link
        key={link.href}
        href={link.href}
        className={cn(
          'text-muted-foreground transition-colors hover:text-foreground',
          onClick && 'text-lg'
        )}
        onClick={onClick}
      >
        {link.label}
      </Link>
    ))}
  </nav>
);

// --- COMPONENTE PRINCIPAL ---

export function SiteHeader() {
  const [isSheetOpen, setSheetOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/20">
      <div className="container mx-auto flex h-16 items-center px-4">
        {/* === LAYOUT DESKTOP === */}
        <div className="hidden w-full items-center md:flex">
          {/* Esquerda: Logo e Navegação */}
          <div className="mr-4 flex items-center">
            <Logo />
            <div className="ml-6">
              <NavMenu />
            </div>
          </div>

          {/* Direita: Busca */}
          <div className="flex flex-1 items-center justify-end">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search articles..."
                className="pl-9"
              />
            </div>
          </div>
        </div>

        {/* === LAYOUT MOBILE === */}
        <div className="flex w-full items-center justify-between md:hidden">
          {isSearchOpen ? (
            // --- Vista de Busca Ativa ---
            <div className="flex w-full items-center gap-x-2">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search articles..."
                  className="w-full pl-9"
                  autoFocus
                />
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSearchOpen(false)}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
          ) : (
            // --- Vista Padrão ---
            <>
              {/* Esquerda: Menu Hamburguer */}
              <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left">
                  <SheetHeader>
                    <SheetTitle>
                      <Logo />
                    </SheetTitle>
                  </SheetHeader>
                  <NavMenu onClick={() => setSheetOpen(false)} />
                </SheetContent>
              </Sheet>

              {/* Centro: Logo */}
              <Logo />

              {/* Direita: Ícone de Busca */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSearchOpen(true)}
              >
                <Search className="h-5 w-5" />
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
