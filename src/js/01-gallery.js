// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

const divBoxParentEl = document.querySelector('.gallery');

const galleryMarkup = createGallaryMarkup(galleryItems);
divBoxParentEl.insertAdjacentHTML('beforeend', galleryMarkup);

divBoxParentEl.addEventListener('click', handleImageClick);

function createGallaryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" title="${description}" alt="${description}" />
</a>`;
    })
    .join('');
}

function handleImageClick(event) {
  event.preventDefault();

  if (!event.target.classList.contains('gallery__image')) {
    return;
  }
}
let gallery = new SimpleLightbox('.gallery a');
gallery.on('show.simplelightbox', function () {});
gallery.options.fadeSpeed = 250;

console.log(galleryItems);
