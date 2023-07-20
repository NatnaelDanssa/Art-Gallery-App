import Image from "next/image";
import styles from "./ArtPiecePreview.module.css";
export function ArtPiecePreview({ image, title, artist }) {
  console.log("image", image);
  return (
    <article>
      <figure className={styles.Figure}>
        <Image
          src={image}
          width={500}
          height={500}
          alt="Picture of the author"
        />
        <figcaption className={styles.Figcaption}>
          <span>{title}</span>
          <small>{artist}</small>
        </figcaption>
      </figure>
    </article>
  );
}
