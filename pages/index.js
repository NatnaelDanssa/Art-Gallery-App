import Link from "next/link";
import { ArtPieces } from "@/components/ArtPieces";

export default function HomePage({ data }) {
  console.log("data", data);
  return (
    <>
      {data && <ArtPieces pieces={data}></ArtPieces>}
      <Link href="/spotlight">Spotlight</Link>
      <Link href="/favourites">Favourites</Link>
    </>
  );
}
