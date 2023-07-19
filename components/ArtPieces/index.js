export function ArtPieces({ pieces }) {
  console.log("pieces", pieces);
  return (
    <li>
      {pieces.map((artPiece) => (
        <li key={artPiece.id}>
          {artPiece.id}, {artPiece.imageUrl}, {artPiece.title}
        </li>
      ))}
    </li>
  );
}
