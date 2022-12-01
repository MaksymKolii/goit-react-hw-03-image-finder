import React, { Component } from 'react';
import { GlobalStyle } from './utils/GlobalStyles';

import { Searchbar } from './Searchbar/Searchbar';
import { imagesMapper } from './utils/mapper';
import { ImagesGallery } from './ImagesGallery/ImagesGallery';
import images from './Data/images.json';

export class App extends Component {
  state = {
    images: imagesMapper(images),
  };

  render() {
    const { images } = this.state;

    return (
      <div>
        <Searchbar onSubmit="888"></Searchbar>
        <ImagesGallery options={images}></ImagesGallery>
        <GlobalStyle />
      </div>
    );
  }
}
