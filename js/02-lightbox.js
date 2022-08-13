import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryContainer = document.querySelector(".gallery");
const galleryInsert = createGalleryMarkup(galleryItems);
galleryContainer.insertAdjacentHTML("afterbegin", galleryInsert); 

function createGalleryMarkup(galleryItems) {
    const markup = galleryItems.map(({preview, original, description}) => {
        return `
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`
            
    }).join('')
    return markup
}
new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionsDelay: 250,
});

