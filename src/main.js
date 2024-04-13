import SimpleLightbox from 'simplelightbox';
import iziToast from 'izitoast';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { fetchPhotosByQuery } from './js/pixabay-api';
import {
  createGalleryCardsTemplate,
  getToastSettings,
} from './js/render-functions';
const galleryEl = document.querySelector('.js-gallery');
const loaderEl = document.querySelector('.js-loader');
const inputEl = document.querySelector('.js-search-input');
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

const onSearchFormSubmit = event => {
  event.preventDefault();

  const searchQuery = inputEl.value.trim();

  if (searchQuery === '' || searchQuery === null) {
    galleryEl.innerHTML = '';

    inputEl.value = '';

    iziToast.error(getToastSettings());

    return;
  }

  galleryEl.innerHTML = '';
  loaderEl.classList.add('is-visible');

  // імітація затримки запиту на сервер
  setTimeout(() => {
    fetchPhotosByQuery(searchQuery)
      .finally(() => {
        loaderEl.classList.remove('is-visible');
      })
      .then(data => {
        console.log(data.hits); // Отримання масиву hits

        if (data.hits.length === 0) {
          galleryEl.innerHTML = '';
          inputEl.value = '';
          iziToast.error(getToastSettings());

          return;
        }

        let photos = data.hits; // Отримання масиву фотографій
        galleryEl.innerHTML = createGalleryCardsTemplate(photos);
        lightbox.refresh();

        lightbox.on('shown.simplelightbox', () => {
          const background = document.querySelector('.sl-overlay');
          const nextBtn = document.querySelector('.sl-next');
          const prevBtn = document.querySelector('.sl-prev');
          const closeBtn = document.querySelector('.sl-close');

          background.style.backgroundColor = '#2E2F42';
          nextBtn.style.color = '#fff';
          prevBtn.style.color = '#fff';
          closeBtn.style.color = '#fff';
        });
      })
      .catch(err => {
        console.log(err);
      });
  }, 2000); //  Затримка 2 секунди
};

const submitButtonEl = document.querySelector('.search-btn');
submitButtonEl.addEventListener('click', onSearchFormSubmit);
