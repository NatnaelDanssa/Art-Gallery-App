import { useRouter } from "next/router";

export default function ArtPiece() {
  const router = useRouter();
  return <section>ArtPiece {router.query.id}</section>;
}
