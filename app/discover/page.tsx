"use client";

import { useMemo, useState } from "react";

type IntentMode = "now" | "later";
type Profile = {
  id: string;
  name: string;
  age: number;
  distanceMiles: number;
  intent: IntentMode;
  photo: string;
};

const MOCK: Profile[] = [
  { id: "1", name: "Leo",  age: 29, distanceMiles: 2, intent: "now",   photo: "https://images.unsplash.com/photo-1520975958225-3f61d3f5d5d7?auto=format&fit=crop&w=1200&q=80" },
  { id: "2", name: "Mika", age: 33, distanceMiles: 4, intent: "later", photo: "https://images.unsplash.com/photo-1541647376583-8934aaf3448a?auto=format&fit=crop&w=1200&q=80" },
  { id: "3", name: "Noah", age: 26, distanceMiles: 1, intent: "now",   photo: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&w=1200&q=80" },
  { id: "4", name: "Rafa", age: 31, distanceMiles: 3, intent: "later", photo: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80" },
];

function Pill({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={[
        "px-3 py-1 rounded-full text-sm border transition",
        active ? "bg-black text-white border-black" : "bg-white text-black border-black/20 hover:border-black/40",
      ].join(" ")}
    >
      {children}
    </button>
  );
}

export default function DiscoverPage() {
  const [intent, setIntent] = useState<IntentMode>("now");
  const profiles = useMemo(() => MOCK.filter(p => p.intent === intent), [intent]);

  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="mx-auto max-w-6xl px-4 py-6">
        <div className="flex items-center justify-between gap-4">
          <div className="text-lg font-semibold tracking-tight">Gayze</div>
          <div className="flex gap-2">
            <Pill active={intent === "now"} onClick={() => setIntent("now")}>Now</Pill>
            <Pill active={intent === "later"} onClick={() => setIntent("later")}>Later</Pill>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {profiles.map((p) => (
            <a
              key={p.id}
              href={`/profile/${p.id}`}
              className="group overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm hover:shadow transition"
            >
              <div className="relative aspect-[3/4]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.photo} alt={p.name} className="h-full w-full object-cover group-hover:scale-[1.02] transition" />
                <div className="absolute top-2 right-2 rounded-full bg-black/75 px-2 py-1 text-[10px] font-semibold uppercase text-white">
                  {p.intent}
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent p-3 text-white">
                  <div className="flex items-end gap-2">
                    <div className="text-base font-semibold">{p.name}</div>
                    <div className="text-sm opacity-90">{p.age}</div>
                  </div>
                  <div className="text-xs opacity-80">{p.distanceMiles} mi</div>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-4 text-xs text-black/50">
          Tap a profile to choose Spicy/Social actions and Like with intent.
        </div>
      </div>
    </div>
  );
}
