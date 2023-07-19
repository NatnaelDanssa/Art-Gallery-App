export function ArtPieces({ pieces }) {
  console.log("pieces", pieces);
  return (
    <li>
      {pieces.map((artPiece) => (
        <li key={artPiece.id}>
          {artPiece.imageSource},{artPiece.name}, {artPiece.artist}
        </li>
      ))}
    </li>
  );
}
