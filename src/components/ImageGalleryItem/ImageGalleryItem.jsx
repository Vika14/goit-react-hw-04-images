import css from './imageGalleryItem.module.css';

export const ImageGalleryItem = ({
  image: { tags, largeImageURL, webformatURL },
  onClick,
}) => {
  return (
    <li className={css.imageGalleryItem}>
      <img
        onClick={() => onClick(tags, largeImageURL)}
        src={webformatURL}
        alt={tags}
        className={css.imageGalleryItemImage}
      />
    </li>
  );
};
