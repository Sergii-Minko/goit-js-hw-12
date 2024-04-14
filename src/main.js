import SimpleLightbox from 'simplelightbox';
import iziToast from 'izitoast';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { fetchPhotosByQuery } from './js/pixabay-api';
import {
  createGalleryCardsTemplate,
  getToastSettings,
  getToastSettingsEnd,
  customizeLightbox,
} from './js/render-functions';
const galleryEl = document.querySelector('.js-gallery');
const submitButtonEl = document.querySelector('.search-btn');
const moresearchEl = document.querySelector('.more-search-btn');
const loaderEl = document.querySelector('.js-loader');
const inputEl = document.querySelector('.js-search-input');
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
let pageNumber = 1;
const perPage = 40;
let searchQuery = '';

var scrollToTopBtn = document.querySelector('.scrollToTopBtn');

const onSearchFormSubmit = morePhotos => async event => {
  event.preventDefault();
  if (!morePhotos) {
    searchQuery = inputEl.value.trim();
    inputEl.value = '';
    pageNumber = 1;
    galleryEl.innerHTML = '';
    if (moresearchEl.classList.contains('is-visible')) {
      console.log('remove');
      moresearchEl.classList.remove('is-visible');
    }
  }

  if (!morePhotos && (searchQuery === '' || searchQuery === null)) {
    iziToast.error(getToastSettings());
    // moresearchEl.classList.remove('is-visible');

    return;
  }

  try {
    loaderEl.classList.add('is-visible');

    const { data } = await fetchPhotosByQuery(searchQuery, pageNumber, perPage);
    loaderEl.classList.remove('is-visible');
    const totalPages = Math.ceil(data.totalHits / perPage);
    if (!morePhotos && data.hits.length === 0) {
      galleryEl.innerHTML = '';
      inputEl.value = '';
      iziToast.error(getToastSettings());
      pageNumber = 1;
      loaderEl.classList.remove('is-visible');
      moresearchEl.classList.remove('is-visible');
      return;
    }
    const getHeightImgCard = () =>
      document.querySelector('.gallery-item').getBoundingClientRect();
    if (morePhotos) {
      galleryEl.insertAdjacentHTML(
        'beforeend',
        createGalleryCardsTemplate(data.hits)
      );
      window.scrollBy({
        top: getHeightImgCard().height * 2,
        left: 0,
        behavior: 'smooth',
      });
      // scrollToTopBtn.classList.add('is-visible');
    } else {
      galleryEl.innerHTML = createGalleryCardsTemplate(data.hits);
    }
    lightbox.refresh();

    lightbox.on('shown.simplelightbox', customizeLightbox);

    pageNumber = pageNumber + 1;

    if (pageNumber <= totalPages) {
      moresearchEl.classList.add('is-visible');
    } else {
      moresearchEl.classList.remove('is-visible');
      iziToast.info(getToastSettingsEnd());
    }
  } catch (err) {
    loaderEl.classList.remove('is-visible');
    moresearchEl.classList.remove('is-visible');
    console.log(err);
  }
};

submitButtonEl.addEventListener('click', onSearchFormSubmit(false));
moresearchEl.addEventListener('click', onSearchFormSubmit(true));
// Додаємо обробник події для кліку на кнопці
scrollToTopBtn.addEventListener('click', event => {
  event.preventDefault();
  // Прокручуємо сторінку вверх
  window.scrollTo({
    top: 0,
    behavior: 'smooth', // Зробити прокрутку плавною
  });
  console.log('clicked');
  // Відключаємо клас "is-visible" для кнопки
  // scrollToTopBtn.classList.remove('is-visible');
});
window.addEventListener('scroll', event =>
  window.scrollY >= 32
    ? scrollToTopBtn.classList.add('is-visible')
    : scrollToTopBtn.classList.remove('is-visible')
);
