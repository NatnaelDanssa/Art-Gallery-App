import { ArtPieces } from "@/components/ArtPieces";
import { Navigation } from "@/components/Navigation";

export default function HomePage({ data, isLoading }) {
  console.log("data", data);
  if (isLoading) {
    return <h1>loading...</h1>;
  }
  return (
    <>
      <ArtPieces pieces={data}></ArtPieces>
      <Navigation />
    </>
  );
}
