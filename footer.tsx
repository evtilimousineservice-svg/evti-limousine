export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-10 grid md:grid-cols-3 gap-8 text-sm text-zinc-300">
        <div>
          <div className="font-semibold text-white">Ev&Ti Limousine Service</div>
          <p className="mt-2 text-zinc-400">
            Luxury black car & limousine service across Southern California.
            Request-only bookings (minimum 3 hours before).
          </p>
        </div>
        <div>
          <div className="font-semibold text-white">Service Areas</div>
          <ul className="mt-2 space-y-1 text-zinc-400">
            <li>Los Angeles</li>
            <li>San Diego</li>
            <li>Palm Springs</li>
            <li>Santa Barbara</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold text-white">Contact</div>
          <ul className="mt-2 space-y-1 text-zinc-400">
            <li><a className="hover:text-white" href="tel:+18182139430">818-213-9430</a></li>
            <li><a className="hover:text-white" href="mailto:ev.tilimousineservice@gmail.com">ev.tilimousineservice@gmail.com</a></li>
          </ul>
          <p className="mt-4 text-xs text-zinc-500">
            © {new Date().getFullYear()} Ev&Ti Limousine Service. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
