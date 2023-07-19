import Link from "next/link";

export default function HomePage({data}) {
  return (
    <div>
      <Link href="/spotlight">Spotlight</Link>
      <Link href="/favourites">Favourites</Link>
    </div>
  );
}