import Image from "next/image";
export function ArtPiecePreview({ image, title, artist }) {
  console.log("image", image);
  return (
    <article>
      <Image src={image} width={500} height={500} alt="Picture of the author" />
      {title}
      {artist}
    </article>
  );
}
