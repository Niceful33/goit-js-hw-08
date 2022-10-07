import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');

const galleryMarkup = galleryItems.reduce(
  (acc, item) =>
    acc +
    `<a class="gallery__link" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>`,
  ''
);
galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

// galleryContainer.addEventListener('click', onClick);
// function onClick(evt) {
//   evt.preventDefault;
//   if (evt.target.nodeName !== 'IMG') {
//     return;
//   }
// }
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
