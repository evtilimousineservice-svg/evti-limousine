import Link from "next/link";

const phone = "818-213-9430";
const phoneHref = "tel:+18182139430";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/70 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between gap-3">
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl glass">
            <span className="text-lg font-semibold">E</span>
          </span>
          <div className="leading-tight">
            <div className="font-semibold">Ev&Ti</div>
            <div className="text-xs text-zinc-400">Limousine Service</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-300">
          <Link className="hover:text-white" href="/services">Services</Link>
          <Link className="hover:text-white" href="/fleet">Fleet</Link>
          <Link className="hover:text-white" href="/rates">Rates & Deposits</Link>
          <Link className="hover:text-white" href="/booking">Book</Link>
          <Link className="hover:text-white" href="/contact">Contact</Link>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={phoneHref}
            className="hidden sm:inline-flex items-center rounded-xl px-3 py-2 text-sm glass hover:bg-white/10 transition"
          >
            Call: {phone}
          </a>
          <Link
            href="/booking"
            className="inline-flex items-center rounded-xl px-4 py-2 text-sm bg-white text-zinc-900 hover:bg-zinc-200 transition font-medium"
          >
            Request a Ride
          </Link>
        </div>
      </div>
    </header>
  );
}
