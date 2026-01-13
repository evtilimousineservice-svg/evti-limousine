"use client";

import { useMemo, useState } from "react";

type FormState = {
  name: string;
  phone: string;
  email: string;
  pickup: string;
  dropoff: string;
  date: string;
  time: string;
  hours: string;
  passengers: string;
  notes: string;
  service: string;
};

const DEFAULT_EMAIL = "ev.tilimousineservice@gmail.com";

function buildMailto(state: FormState) {
  const subject = `Ride Request — ${state.name || "New Client"}`;
  const lines = [
    "New booking request (request-only, minimum 3 hours before):",
    "",
    `Name: ${state.name}`,
    `Phone: ${state.phone}`,
    `Email: ${state.email}`,
    `Service: ${state.service}`,
    `Pickup: ${state.pickup}`,
    `Drop-off: ${state.dropoff}`,
    `Date: ${state.date}`,
    `Time: ${state.time}`,
    `Estimated Hours: ${state.hours}`,
    `Passengers: ${state.passengers}`,
    "",
    "Notes:",
    state.notes || "(none)",
    "",
    "Deposit: 50% or Full Amount (as agreed)",
  ];
  const body = lines.join("\n");
  const params = new URLSearchParams({ subject, body });
  return `mailto:${DEFAULT_EMAIL}?${params.toString()}`;
}

export function BookingForm() {
  const [state, setState] = useState<FormState>({
    name: "",
    phone: "",
    email: "",
    pickup: "",
    dropoff: "",
    date: "",
    time: "",
    hours: "3",
    passengers: "1",
    notes: "",
    service: "Airport Transfer",
  });

  const mailto = useMemo(() => buildMailto(state), [state]);

  return (
    <div className="rounded-3xl glass p-6 md:p-8">
      <h2 className="text-xl font-semibold text-white">Request a Booking</h2>
      <p className="mt-2 text-zinc-400 text-sm">
        Request-only booking. Please submit at least <span className="text-white">3 hours</span> before pickup.
        We confirm by phone or email.
      </p>

      <div className="mt-6 grid md:grid-cols-2 gap-4">
        <Field label="Full Name" value={state.name} onChange={(v)=>setState(s=>({...s,name:v}))} placeholder="Your name" />
        <Field label="Phone" value={state.phone} onChange={(v)=>setState(s=>({...s,phone:v}))} placeholder="(818) 213-9430" />
        <Field label="Email" value={state.email} onChange={(v)=>setState(s=>({...s,email:v}))} placeholder="you@email.com" />
        <SelectField
          label="Service Type"
          value={state.service}
          onChange={(v)=>setState(s=>({...s,service:v}))}
          options={["Airport Transfer","Hourly Chauffeur","Point-to-Point","Corporate / Executive","Wedding","Night Out","Other"]}
        />
        <Field label="Pickup Location" value={state.pickup} onChange={(v)=>setState(s=>({...s,pickup:v}))} placeholder="Address / Airport / Hotel" />
        <Field label="Drop-off Location" value={state.dropoff} onChange={(v)=>setState(s=>({...s,dropoff:v}))} placeholder="Address / Venue" />
        <Field label="Date" type="date" value={state.date} onChange={(v)=>setState(s=>({...s,date:v}))} />
        <Field label="Time" type="time" value={state.time} onChange={(v)=>setState(s=>({...s,time:v}))} />
        <Field label="Estimated Hours" value={state.hours} onChange={(v)=>setState(s=>({...s,hours:v}))} placeholder="3" />
        <Field label="Passengers" value={state.passengers} onChange={(v)=>setState(s=>({...s,passengers:v}))} placeholder="1" />
      </div>

      <div className="mt-4">
        <label className="text-sm text-zinc-300">Notes / Special Requests</label>
        <textarea
          className="mt-2 w-full rounded-2xl bg-black/30 border border-white/10 px-4 py-3 outline-none focus:border-white/20 min-h-[110px]"
          value={state.notes}
          onChange={(e)=>setState(s=>({...s,notes:e.target.value}))}
          placeholder="Child seat, luggage count, flight #, etc."
        />
      </div>

      <div className="mt-6 flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
        <div className="text-xs text-zinc-400">
          Deposit required: <span className="text-white">50% or Full Amount</span> (depending on the trip).
        </div>
        <a
          href={mailto}
          className="inline-flex justify-center items-center rounded-xl px-5 py-3 text-sm bg-white text-zinc-900 hover:bg-zinc-200 transition font-medium"
        >
          Send Request
        </a>
      </div>

      <div className="mt-4 text-xs text-zinc-500">
        Want automated emails instead of mailto? See README to enable a serverless email endpoint (Resend / SMTP).
      </div>
    </div>
  );
}

function Field({ label, value, onChange, placeholder, type = "text" }: { label: string; value: string; onChange: (v: string)=>void; placeholder?: string; type?: string; }) {
  return (
    <div>
      <label className="text-sm text-zinc-300">{label}</label>
      <input
        type={type}
        className="mt-2 w-full rounded-2xl bg-black/30 border border-white/10 px-4 py-3 outline-none focus:border-white/20"
        value={value}
        placeholder={placeholder}
        onChange={(e)=>onChange(e.target.value)}
      />
    </div>
  );
}

function SelectField({ label, value, onChange, options }: { label: string; value: string; onChange: (v: string)=>void; options: string[]; }) {
  return (
    <div>
      <label className="text-sm text-zinc-300">{label}</label>
      <select
        className="mt-2 w-full rounded-2xl bg-black/30 border border-white/10 px-4 py-3 outline-none focus:border-white/20"
        value={value}
        onChange={(e)=>onChange(e.target.value)}
      >
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}
