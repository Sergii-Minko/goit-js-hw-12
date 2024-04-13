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

const onSearchFormSubmit = morePhotos => async event => {
  event.preventDefault();
  const searchQuery = inputEl.value.trim();

  if (!morePhotos && (searchQuery === '' || searchQuery === null)) {
    galleryEl.innerHTML = '';
    inputEl.value = '';
    iziToast.error(getToastSettings());
    return;
  }
  if (!morePhotos) {
    pageNumber = 1;
    galleryEl.innerHTML = '';
  }
  try {
    loaderEl.classList.add('is-visible');

    const { data } = await fetchPhotosByQuery(searchQuery, pageNumber);
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
