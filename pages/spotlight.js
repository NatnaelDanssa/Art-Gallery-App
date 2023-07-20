import { ArtPiecePreview } from "@/components/ArtPiecePreview";

export default function Spotlight({ data, isLoading }) {
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  const randomItem = Math.floor(Math.random() * data.length);

  const { imageSource: image, artist, name: title } = data[randomItem];
  return (
    <>
      <ArtPiecePreview {...{ image, artist, title }} />
    </>
  );
}
