import React, { Component } from 'react';
import { GlobalStyle } from './utils/GlobalStyles';
import s from './appCSS/App.module.css';

import { fetchImages } from 'services/moviesApi';
import { Searchbar } from './Searchbar/Searchbar';
import { imagesMapper } from './utils/mapper';
import { ImagesGallery } from './ImagesGallery/ImagesGallery';
import { Loader } from './Loader/Loader';
// import images from '../data/images.json';
import Modal from './Modal/Modal';

export class App extends Component {
  state = {
    images: [],
    currentImage: null,
    isSearch: false,
    page: 1,
    query: '',
    isLoading: false,
    eror: null,
  };

  componentDidUpdate(_, prev) {
    const { query, page } = this.state;
    if (query !== prev.query || page !== prev.page) {
      this.getImages();
    }
  }
  getImages = () => {
    const { page, query } = this.state;
    this.setState({ isLoading: true });
    fetchImages(page, query)
      .then(({ data: { hits } }) => {
        this.setState(prev => ({
          images: [...prev.images, ...imagesMapper(hits)],
        }));
      })
      .catch(error => {
        this.setState({ error: error.message });
      })
      .finally(() => this.setState({ isLoading: false }));
  };

  showImages = data => {
    this.setState(({ isSearch }) => ({
      isSearch: !isSearch,
      query: data,
      inages: [],
      page: 1,
    }));
  };
  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
  openModal = data => {
    this.setState({ currentImage: data });
  };

  closeModal = () => {
    this.setState({ currentImage: null });
  };
  handleFormSubmit = query => {
    this.setState({ query });
  };
  render() {
    const { images, currentImage, showModal } = this.state;
    // console.log(currentImage);
    // console.log(images);

    return (
      <div className={s.App}>
        <Searchbar onSubmit={this.handleFormSubmit}></Searchbar>
        <ImagesGallery options={images}></ImagesGallery>
        {/* <button type="button" onClick={this.toggleModal}>
          Open Modal
        </button> */}

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <button type="button" onClick={this.toggleModal}>
              Close modal
            </button>
          </Modal>
        )}

        <GlobalStyle />
      </div>
    );
  }
}
