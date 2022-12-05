import React, { Component } from 'react';
import { GlobalStyle } from './utils/GlobalStyles';
import { APP } from './App.styled';
import { fetchImages } from 'services/apiFetcher';
import { Searchbar } from './Searchbar/Searchbar';
import { imagesMapper } from '../services/imageMapper';
import { ImagesGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    images: [],
    clickedImageUrl: null,
    page: 1,
    query: null,
    isLoading: false,
    totPages: null,
  };

  componentDidUpdate(_, prev) {
    const { images, page, totPages, query } = this.state;

    if (prev.page !== page || prev.query !== query) {
      this.getImages();
    }
    if (page === totPages && images !== prev.images && page !== 1) {
      this.nextPage();
      alert("We're sorry, but you've reached the end of search results.");
    }
    this.scrollHandler();
  }

  getCkickedImgUrl = data => {
    this.setState({ clickedImageUrl: data });
  };

  getImages = async () => {
    const { page, query } = this.state;
    this.setState({ isLoading: true });
    try {
      const array = await fetchImages(query, page);

      if (!array.hits.length) {
        alert(
          'Sorry, there are no images matching your search query. Please try again.'
        );
      }
      this.setState({ totPages: Math.floor(array.totalHits / 12) });

      console.log(array);
      console.log(array.totalHits);
      this.setState(prev => ({
        images: [...prev.images, ...imagesMapper(array.hits)],
      }));
      this.setState({ isLoading: false });
    } catch (error) {
      console.log(error);
    }
  };

  nextPage = () => {
    this.setState(({ page }) => ({
      page: page + 1,
    }));
  };

  closeModal = () => {
    this.setState({ clickedImageUrl: null });
  };

  onFormSubmit = query => {
    this.setState({
      query,
      page: 1,
      images: [],
    });
  };

  scrollHandler = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  render() {
    const { images, isLoading, page, totPages, clickedImageUrl } = this.state;

    return (
      <APP>
        <Searchbar onSubmit={this.onFormSubmit} loading={isLoading}></Searchbar>
        {images && (
          <ImagesGallery options={images} onClick={this.getCkickedImgUrl} />
        )}

        {isLoading ? (
          <Loader />
        ) : (
          images &&
          page < totPages && (
            <Button onClick={this.nextPage} loading={isLoading} />
          )
        )}
        {clickedImageUrl && (
          <Modal closeModal={this.closeModal} url={clickedImageUrl} />
        )}

        <GlobalStyle />
      </APP>
    );
  }
}
