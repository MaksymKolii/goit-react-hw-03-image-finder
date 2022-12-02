import React, { Component } from 'react';
import { GlobalStyle } from './utils/GlobalStyles';

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
    showModal: false,
    isShown: false,
    page: 1,
    query: '911',
    isLoading: false,
    eror: null,
  };

  // componentDidUpdate(_, prev) {
  //   const { isShown } = this.state;
  //   if (isShown !== prev.isShown) {
  //     this.getImages();
  //   }
  // }

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

  render() {
    // this.getImages();
    const { images, currentImage, showModal } = this.state;
    console.log(currentImage);
    console.log(images);

    return (
      <div>
        <Searchbar onSubmit="888"></Searchbar>
        <ImagesGallery
          options={images}
          // openModal={this.openModal}
        ></ImagesGallery>
        <button type="button" onClick={this.toggleModal}>
          Open Modal
        </button>

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
