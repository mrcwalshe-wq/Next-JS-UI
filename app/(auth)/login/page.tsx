import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <Link
        href="/discover"
        className="rounded-xl bg-black px-6 py-3 text-white font-semibold"
      >
        Open Discover
      </Link>
    </main>
  );
}
