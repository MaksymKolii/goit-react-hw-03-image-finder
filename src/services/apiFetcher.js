import axios from 'axios';
// const axios = require('axios').default;
const URL = 'https://pixabay.com/api/';
const searchParams = new URLSearchParams({
  key: '30620047-2b41fea3ffb04e82a67076d5b',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
});

export async function fetchImages(keyWord, page) {
  const search = `${URL}?q=${keyWord}&${searchParams}&page=${page}&per_page=12`;

  const response = await axios.get(search);

  return response.data;
}
