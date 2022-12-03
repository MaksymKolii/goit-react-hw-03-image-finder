import React, { Component } from 'react';
import { GlobalStyle } from './utils/GlobalStyles';
import s from './appCSS/App.module.css';

import { fetchImages } from 'services/moviesApi';
import { Searchbar } from './Searchbar/Searchbar';
import { imagesMapper } from './utils/mapper';
import { ImagesGallery } from './ImagesGallery/ImagesGallery';
// import { Loader } from './Loader/Loader';
// import Modal from './Modal/Modal';

export class App extends Component {
  state = {
    images: [],
    currentImage: null,
    isShown: false,
    page: 1,
    totalPages: null,
    query: '',
    isLoading: false,
    eror: null,
  };

  componentDidUpdate(_, prev) {
    const { page, totalPages, images } = this.state;

    if (prev.page !== page && page !== 1) {
      this.getImages();
    }

    if (page >= totalPages && images !== prev.images) {
      alert("We're sorry, but you've reached the end of search results.");
    }
  }

  getImages = async () => {
    const { page, query } = this.state;
    this.setState({ isLoading: true });
    const array = await fetchImages(query, page);

    console.log(array);

    this.setState(prev => ({
      images: [...prev.images, ...imagesMapper(array)],
    }));
    this.setState({ isLoading: false });
  };

  // showImages = data => {
  //   this.setState(({ isShown }) => ({
  //     isShown: !isShown,
  //     query: data,
  //     inages: [],
  //     page: 1,
  //   }));
  // };

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

        {/* {showModal && (
          <Modal onClose={this.toggleModal}>
            <button type="button" onClick={this.toggleModal}>
              Close modal
            </button>
          </Modal>
        )} */}

        <GlobalStyle />
      </div>
    );
  }
}
