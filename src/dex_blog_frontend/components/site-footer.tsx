import Link from "next/link";
import packageJson from "../../package.json";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();
  const version = packageJson.version;

  return (
    <footer className="border-t border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/20">
      <div className="container relative mx-auto px-4 py-8">
        <div className="flex flex-col items-center md:flex-row md:justify-end md:items-center">
          <div className="mb-4 text-center md:mb-0 md:absolute md:left-1/2 md:-translate-x-1/2">
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} All rights reserved
            </p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">
              v{version}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
