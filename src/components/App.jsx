import React, { useEffect, useState } from 'react';
import { Loader } from './Loader/Loader';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { fetchImages } from './Services/api';

export const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentSearch, setCurrentSearch] = useState('');
  const [totalImages, setTotalImages] = useState(0);
  const [page, setPage] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState('');
  const [modalAlt, setModalAlt] = useState('');

  useEffect(() => {
    if (!currentSearch) return;
    async function data() {
      try {
        setIsLoading(true);
        const fetch = await fetchImages(currentSearch, page);
        if (fetch.totalImages === 0) {
          return alert('No images');
        }
        setImages(previmages => [...previmages, ...fetch.images]);
        setTotalImages(fetch.totalImages);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    data();
  }, [currentSearch, page]);

  const handleSubmit = async e => {
    e.preventDefault();
    const inputSearch = e.target.elements.inputSearch;
    if (inputSearch.value.trim() === '') {
      return;
    }

    setCurrentSearch(inputSearch.value);
    setPage(1);
    setImages([]);
    setTotalImages(0);
  };

  const handleLoadMore = async () => {
    setPage(page + 1);
  };

  const handleImageClick = (src, alt) => {
    setModalOpen(true);
    setModalAlt(alt);
    setModalImg(src);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setModalAlt('');
    setModalImg('');
  };

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gridGap: '16px',
        paddingBottom: '24px',
      }}
    >
      <Searchbar onSubmit={handleSubmit} />
      <ImageGallery onImageClick={handleImageClick} images={images} />
      {images.length !== totalImages && !isLoading && (
        <Button onClick={handleLoadMore} />
      )}
      {isLoading && <Loader />}
      {modalOpen ? (
        <Modal src={modalImg} alt={modalAlt} modalClose={handleModalClose} />
      ) : null}
    </div>
  );
};
