
import errorimgImp from '../img/error.svg';
import xbtnimg from '../img/btn.png';

export const createGalleryCardsTemplate = images => {
  return images
    .map(
      imageData => `
    <li class="gallery-item">
      <a class="gallery-link" href="${imageData.largeImageURL}">
        <img
          class="gallery-image"
          src="${imageData.webformatURL}"
          alt="${imageData.tags}"
        />
      </a>

      <div class="info">
        <p class="info-item">
          <b>Likes</b>
          ${imageData.likes}
        </p>
        <p class="info-item">
          <b>Views</b>
          ${imageData.views}
        </p>
        <p class="info-item">
          <b>Comments</b>
          ${imageData.comments}
        </p>
        <p class="info-item">
          <b>Downloads</b>
          ${imageData.downloads}
        </p>
      </div>
    </li>
  `
    )
    .join('');
};
const customizeToast = () => {
  const xbtn = document.querySelector('.iziToast-close');

  xbtn.style.color = '#fff';
  xbtn.style.backgroundImage = `url('${xbtnimg}')`;
  xbtn.style.setProperty('opacity', '1');
  xbtn.style.setProperty('fill', '#fff');
  xbtn.style.setProperty('background-size', '12px');

  const messagealert = document.querySelector('.iziToast');
  messagealert.style.setProperty('width', '432px');
  messagealert.style.setProperty('height', '88px');
  messagealert.style.setProperty('display', 'flex');
  messagealert.style.setProperty('align-items', 'center');
  messagealert.style.setProperty('justify-content', 'center');
};

export const getToastSettings = () => {
  return {
    // title: 'Error',
    message: `Sorry, there are no images matching your search query. Please, try again!`,
    color: '#EF4040',
    titleColor: '#fff',
    messageColor: '#fff',
    progressBarColor: '#B51B1B',
    iconColor: '#fff',
    iconUrl: errorimgImp,
    position: 'topRight',
    timeout: 2000,
    onOpening: customizeToast,
  };
};
