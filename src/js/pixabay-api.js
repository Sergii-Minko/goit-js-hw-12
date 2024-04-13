import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '43345199-e8902240a3be22b0f4c9e0aa7';

export const fetchPhotosByQuery = (query, pageNumber = 1) => {
  const axiosOptions = {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: pageNumber,
      per_page: 40,
    },
  };

  return axios.get(``, axiosOptions);
};
