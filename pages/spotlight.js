import { ArtPiecePreview } from "@/components/ArtPiecePreview";
import { Navigation } from "@/components/Navigation";
import { imageConfigDefault } from "next/dist/shared/lib/image-config";

export default function Spotlight({ data, isLoading }) {
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  const randomItem = Math.floor(Math.random() * data.length);

  const { imageSource: image, artist, name: title } = data[randomItem];
  return (
    <>
      <ArtPiecePreview {...{ image, artist, title }} />;
      <Navigation />
    </>
  );
}
