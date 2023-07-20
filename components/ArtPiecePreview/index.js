import Image from "next/image";
import styles from "./ArtPiecePreview.module.css";
export function ArtPiecePreview({ image, title, artist }) {
  console.log("image", image);
  return (
    <article>
      <figure className={styles.Figure}>
        <div className={styles.ImgWrapper}>
          <Image
            src={image}
            width={360}
            height={360}
            alt="Picture of the author"
          />

          <figcaption className={styles.Figcaption}>
            <span aria-label="title">{title}</span>
            <small aria-label="artist">{artist}</small>
          </figcaption>
        </div>
      </figure>
    </article>
  );
}
