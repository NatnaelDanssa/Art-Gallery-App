import { ArtPiecePreview } from "../ArtPiecePreview";
export function ArtPieces({ pieces }) {
  console.log("pieces", pieces);
  return (
    <ul>
      {pieces.map((artPiece) => (
        <ArtPiecePreview
          key={artPiece.slug}
          title={artPiece.name}
          image={artPiece.imageSource}
          artist={artPiece.artist}
        />
      ))}
    </ul>
  );
}
