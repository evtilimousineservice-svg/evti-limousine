import Link from "next/link";

export function CTAStrip() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-14">
      <div className="rounded-3xl glass p-6 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <h3 className="text-xl md:text-2xl font-semibold text-white">Ready to ride in luxury?</h3>
          <p className="mt-2 text-zinc-400">
            Request-only booking • Minimum 3 hours in advance • Fast confirmation by phone or email.
          </p>
        </div>
        <div className="flex gap-3">
          <Link
            href="/booking"
            className="inline-flex items-center rounded-xl px-5 py-3 text-sm bg-white text-zinc-900 hover:bg-zinc-200 transition font-medium"
          >
            Request a Ride
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-xl px-5 py-3 text-sm glass hover:bg-white/10 transition"
          >
            Contact
          </Link>
        </div>
      </div>
    </section>
  );
}
