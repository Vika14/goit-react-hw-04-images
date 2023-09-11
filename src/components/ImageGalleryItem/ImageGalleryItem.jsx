import css from './imageGalleryItem.module.css';

export const ImageGalleryItem = ({
  image: { tags, largeImageURL, webformatURL },
  onClick,
}) => {
  return (
    <li className={css.imageGalleryItem}>
      <img
        onClick={() => onClick(largeImageURL, tags)}
        src={webformatURL}
        alt={tags}
        className={css.imageGalleryItemImage}
      />
    </li>
  );
};
