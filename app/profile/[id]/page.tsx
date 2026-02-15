"use client";
const [mode, setMode] = useState<"spicy" | "social">("spicy");
const [action, setAction] = useState<string | null>(null);

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-neutral-50 p-6">
      <div className="mx-auto max-w-md rounded-3xl border border-black/10 bg-white p-6">
        <div className="text-lg font-semibold">Profile</div>
        <div className="mt-2 text-sm text-black/60">
          Next: Spicy/Social toggle, action chips, and action-before-like.
        </div>
      </div>
    </div>
  );
}
