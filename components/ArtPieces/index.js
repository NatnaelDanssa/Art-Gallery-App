export function ArtPieces({ pieces }) {
  console.log("pieces", pieces);
  return (
    <ul>
      {pieces.map((artPiece) => (
        <li key={artPiece.slug}>
          {artPiece.slug}, {artPiece.imageUrl}, {artPiece.title}
        </li>
      ))}
    </ul>
  );
}
