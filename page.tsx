import Link from "next/link";
import { CTAStrip } from "@/components/cta-strip";

export default function HomePage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-4 pt-12 md:pt-16 pb-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-zinc-300">
              Luxury Chauffeur Service • Southern California
            </div>
            <h1 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight text-white">
              Arrive in style with <span className="text-zinc-200">Ev&Ti</span>
            </h1>
            <p className="mt-4 text-zinc-400 text-base md:text-lg leading-relaxed">
              Premium black car & limousine service for airport transfers, hourly chauffeur, weddings, and nights out.
              Serving Los Angeles, San Diego, Palm Springs, and Santa Barbara.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Link
                href="/booking"
                className="inline-flex justify-center items-center rounded-xl px-5 py-3 text-sm bg-white text-zinc-900 hover:bg-zinc-200 transition font-medium"
              >
                Request a Ride
              </Link>
              <Link
                href="/fleet"
                className="inline-flex justify-center items-center rounded-xl px-5 py-3 text-sm glass hover:bg-white/10 transition"
              >
                View Fleet
              </Link>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
              <InfoCard title="Request-only booking" desc="Minimum 3 hours before pickup." />
              <InfoCard title="Deposit required" desc="50% or full amount (trip-dependent)." />
            </div>
          </div>

          <div className="rounded-3xl glass p-6 md:p-8">
            <div className="text-sm text-zinc-400">Popular services</div>
            <div className="mt-4 grid gap-3">
              <ServiceRow title="Airport Transfers" desc="LAX • SAN • PSP • SBA + private airports" />
              <ServiceRow title="Hourly Chauffeur" desc="Minimum 3 hours • business or leisure" />
              <ServiceRow title="Weddings" desc="Photo stops • coordinated timing • luxury arrival" />
              <ServiceRow title="Night Out" desc="Safe, private, and stress-free ride home" />
            </div>
            <div className="mt-6 text-xs text-zinc-500">
              Tip: For fastest confirmation, submit a booking request and we’ll call you back.
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-14">
        <div className="grid md:grid-cols-3 gap-4">
          <Feature title="Professional Chauffeurs" desc="Reliable, discreet, and punctual service." />
          <Feature title="Luxury Experience" desc="Clean vehicles, smooth rides, premium comfort." />
          <Feature title="Simple Booking" desc="Request online, confirm by phone or email." />
        </div>
      </section>

      <CTAStrip />
    </>
  );
}

function InfoCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl glass p-4">
      <div className="font-medium text-white">{title}</div>
      <div className="mt-1 text-zinc-400 text-xs">{desc}</div>
    </div>
  );
}

function ServiceRow({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl bg-black/20 border border-white/10 p-4">
      <div className="font-medium text-white">{title}</div>
      <div className="mt-1 text-sm text-zinc-400">{desc}</div>
    </div>
  );
}

function Feature({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-3xl glass p-6">
      <div className="text-white font-semibold">{title}</div>
      <p className="mt-2 text-sm text-zinc-400 leading-relaxed">{desc}</p>
    </div>
  );
}
