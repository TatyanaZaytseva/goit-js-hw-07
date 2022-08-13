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
function onCardHandleClick(event) {
    event.preventDefault()
     
    if (!event.target.classList.contains('gallery__image')) {
        return
    }
    const urlOriginalPhoto = event.target.dataset.source
    

    const instance = basicLightbox.create(`<img src="${urlOriginalPhoto}">`)

    instance.show()
    const visib = basicLightbox.visible()
        
    galleryContainer.addEventListener('keydown', onEscapeClick)
    function onEscapeClick(event) {
        event.preventDefault()
        console.log("key:", event.key)
        console.log("code:", event.code)
        if (!visib) {
            return
        }
        if (event.key === 'Escape') {
            instance.close()
        }
    }
}



