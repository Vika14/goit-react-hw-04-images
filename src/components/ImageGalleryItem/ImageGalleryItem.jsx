import css from './imageGalleryItem.module.css';

export const ImageGalleryItem = ({ image, onClick }) => {
  const handleClick = () => {
    onClick(image.tags, image.largeImageURL);
  };

  return (
    <li className={css.imageGalleryItem}>
      <img
        onClick={onClick}
        src={image.webformatURL}
        alt={image.tags}
        className={css.imageGalleryItemImage}
      />
    </li>
  );
};
