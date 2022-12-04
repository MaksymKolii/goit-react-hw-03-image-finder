import React, { Component } from 'react';
import { GlobalStyle } from './utils/GlobalStyles';
// import s from './appCSS/App.module.css';

import { fetchImages } from 'services/apiFetcher';
import { Searchbar } from './Searchbar/Searchbar';
import { imagesMapper } from '../services/imageMapper';
import { ImagesGallery } from './ImageGallery/ImageGallery';
// import { Loader } from './Loader/Loader';
// import Modal from './Modal/Modal';

export class App extends Component {
  state = {
    images: [],
    currentImage: null,
    isShown: false,
    page: 1,
    query: null,
    isLoading: false,
    eror: null,
  };

  componentDidUpdate(_, prev) {
    const { page, totalPages, images, query } = this.state;

    if (prev.page !== page || prev.query !== query) {
      this.getImages();
    }

    // if (page === prev.page && images === prev.images) {
    //   alert("We're sorry, but you've reached the end of search results.");
    // }
  }

  getImages = async () => {
    const { page, query } = this.state;
    this.setState({ isLoading: true });
    try {
      const array = await fetchImages(query, page);
      if (!array.length) {
        alert(
          'Sorry, there are no images matching your search query. Please try again.'
        );
      }

      console.log(array);

      this.setState(prev => ({
        images: [...prev.images, ...imagesMapper(array)],
      }));
      this.setState({ isLoading: false });
    } catch (error) {
      console.log(error);
    }
  };

  // showImages = data => {
  //   this.setState(({ isShown }) => ({
  //     isShown: !isShown,
  //     query: data,
  //     inages: [],
  //     page: 1,
  //   }));
  // };

  // openModal = data => {
  //   this.setState({ currentImage: data });
  // };

  // closeModal = () => {
  //   this.setState({ currentImage: null });
  // };
  // handleFormSubmit = query => {
  //   this.setState({ query });
  // };

  onFormSubmit = query => {
    // if (query.trim().length === 0) {
    //   alert('Please, enter Something !!!');
    //   return;
    // }

    this.setState({
      query,
      page: 1,
      images: [],
    });
  };

  render() {
    const { images, query } = this.state;
    // console.log(currentImage);
    // console.log(images);

    return (
      <div className="77">
        <Searchbar
          onSubmit={this.onFormSubmit}
          // query={query}
          // handleInputChange={this.handleInputChange}
        ></Searchbar>
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
