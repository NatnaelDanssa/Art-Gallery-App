import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <Link href="/artpieces">Artpieces</Link>
      <Link href="/spotlight">Spotlight</Link>
      <Link href="/favourites">Favourites</Link>
    </div>
  );
}
