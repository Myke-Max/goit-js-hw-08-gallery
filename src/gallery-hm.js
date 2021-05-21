import galleryItems from "./gallery-items.js"

const refs = {
  gallery: document.querySelector('.js-gallery'),
  galleryLink: document.querySelector('.gallery__link'),
  galleryImg: document.querySelector('.lightbox__image'),
  modal: document.querySelector('.js-lightbox'),
  modalCloseBtn: document.querySelector('.lightbox__button'),
  
}

 
const onGalleryList = function (event) {
   const makeGalleryList = galleryItems.map(({ preview, original, description }) => {
     const createLi = document.createElement('li')
      createLi.classList.add ('gallery__item')
    const createA = document.createElement('a')
      createA.classList.add('gallery__link')
      createA.href = original
    const createImg = document.createElement('img')
      createImg.src = preview
      createImg.alt = description
     
      createA.appendChild(createImg)
     console.log(createA)
     
      createLi.appendChild(createA)
     console.log(createLi)
   
   })
  return makeGalleryList

}
  console.log(onGalleryList())
  
  







// const onNewGalleryList = function({ preview, original, description }) {
//   console.log(original)
// }
//   onNewGalleryList()