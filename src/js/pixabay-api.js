const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '43345199-e8902240a3be22b0f4c9e0aa7';

export const fetchPhotosByQuery = query => {
  const searchParams = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`${BASE_URL}?${searchParams}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
  });
};
