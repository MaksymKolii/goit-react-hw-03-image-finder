import axios from 'axios';
const URL = 'https://pixabay.com/api/';
const searchParams = new URLSearchParams({
  key: '30620047-2b41fea3ffb04e82a67076d5b',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
});

export function fetchImages(page, keyWord) {
  const search = `${URL}?q=${keyWord}&${searchParams}&page=${page}&per_page=12`;
  return axios.get(search);
}
