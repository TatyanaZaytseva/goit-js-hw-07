import { galleryItems } from './gallery-items.js'
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const galleryInsert = createGalleryMarkup(galleryItems);
galleryContainer.insertAdjacentHTML("afterbegin", galleryInsert); 

function createGalleryMarkup(galleryItems) {
    const markup = galleryItems.map(({preview, original, description}) => {
        return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"/>
            </a>
        </div>`
     }).join('')
    return markup
}

galleryContainer.addEventListener('click', onCardHandleClick)
const instance = basicLightbox.create(`<img src="" alt="full-image"/>`)

function onCardHandleClick(event) {
    event.preventDefault()
     
    if (event.target.nodeName !== "IMG") {
        return
    }
    let urlOriginalPhoto = event.target.dataset.source
    
    const modalImage = instance.element().querySelector('img')
    modalImage.src = urlOriginalPhoto
    instance.show()
    const visib = basicLightbox.visible()
        
    window.addEventListener('keydown', onEscapeClick)
}
function onCloseModal() {
    instance.close()
    window.removeEventListener('keydown', onEscapeClick)
}
function onEscapeClick(event) {
        if (event.key === 'Escape') {
            onCloseModal()
        }
}


