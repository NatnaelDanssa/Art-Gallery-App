export default function ArtPieces({ data }) {
  return (
    <section>
      Art pieces
      <div>{data.map(({ slug }) => slug)}</div>
    </section>
  );
}
