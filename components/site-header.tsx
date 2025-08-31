"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/buy-ticket", label: "Buy Ticket" },
  { href: "/results", label: "Check Results" },
  { href: "/winners", label: "Winners" },
  { href: "/contact", label: "Contact" },
]

export function SiteHeader() {
  const pathname = usePathname()
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-heading text-xl font-extrabold tracking-wide text-brand">MEGA KERALA</span>
          <span className="rounded-md border px-2 py-1 text-[11px] font-semibold text-[#1f2937] bg-yellow-50 border-yellow-200">
            LOTTERY
          </span>
        </Link>
        <nav aria-label="Main" className="flex items-center gap-1 text-sm">
          {links.map((l) => {
            const active = pathname === l.href
            return (
              <Link
                key={l.href}
                href={l.href}
                className={
                  "px-3 py-2 font-medium text-[#111827] hover:opacity-90 transition " + (active ? "nav-pill" : "")
                }
                aria-current={active ? "page" : undefined}
              >
                {l.label}
              </Link>
            )
          })}
          <button
            aria-label="Theme"
            className="ml-2 inline-flex h-9 w-9 items-center justify-center rounded-full border text-[#111827]/80 hover:bg-gray-50"
            title="Theme"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>
        </nav>
      </div>
    </header>
  )
}
