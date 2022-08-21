// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

const divBoxParentEl = document.querySelector('.gallery');

const galleryMarkup = createGallaryMarkup(galleryItems);
divBoxParentEl.insertAdjacentHTML('beforeend', galleryMarkup);

function createGallaryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" title="${description}" alt="${description}" />
</a>`;
    })
    .join('');
}

let gallery = new SimpleLightbox('.gallery a');
gallery.on('show.simplelightbox', function () {});
gallery.options.fadeSpeed = 250;

console.log(galleryItems);
