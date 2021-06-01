import galleryItems from "./gallery-items.js"

const refs = {
  gallery: document.querySelector('.js-gallery'),
  galleryItems: document.querySelector('.gallery__item'),
  galleryLink: document.querySelector('.gallery__link'),
  galleryImg: document.querySelector('.gallery__image'),
  openModal : document.querySelector ('.js-lightbox'),
   backdrop: document.querySelector('.lightbox__overlay'),
  modalImg : document.querySelector('.lightbox__image'),
  modalCloseBtn : document.querySelector('.lightbox__button'),
}

const galleryList = galleryItems.map(({preview,original,desciption}) => {
  return `<li class="gallery__item">
  <a class= "gallery__link"  href=${original}>
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${desciption}
    />
  </a>
</li>`
}
).join(' ')
  
refs.gallery.insertAdjacentHTML('afterBegin', galleryList)

const onImgClick = e => {
  if (e.target.nodeName !== 'IMG') {
    return
  }
  e.preventDefault()
  refs.openModal.classList.add('is-open')
  refs.modalImg.src = e.target.dataset.source
  refs.modalCloseBtn.addEventListener('click', onCloseModal)
  refs.backdrop.addEventListener('click', onBackDropClose)
  window.addEventListener('keydown', onEscClose)
  window.addEventListener('keydown',onArrowClick)
}

const onCloseModal =  () => {
  refs.openModal.classList.remove('is-open')
  refs.modalImg.src = ""
}

const onEscClose =  e => {
  if (e.code === "Escape") {
  onCloseModal()
}
}

const onBackDropClose =  e => {
  if (e.currentTarget === e.target) {
    onCloseModal()
  }
}

const onArrowClick = e => {
  if (e.code !== 'ArrowLeft' && e.code !== 'ArrowRight') {
    return
  }

  const currentImg = galleryItems.find(img => img.original === refs.modalImg.src)
  
  let currentIndex =
    e.code === 'ArrowLeft'
      ? galleryItems.indexOf(currentImg) - 1
      : galleryItems.indexOf(currentImg) + 1;
  if (currentIndex < 0) {
    currentIndex = galleryItems.length -1
  }
  if (currentIndex === galleryItems.length) {
    currentIndex = 0
  }
  
  refs.modalImg.src = galleryItems[currentIndex].original
  refs.modalImg.alt = galleryItems[currentIndex].description
}




refs.gallery.addEventListener('click', onImgClick)




// const refs = {
//   gallery: document.querySelector('.js-gallery'),
//   galleryLink: document.querySelector('.gallery__link'),
//   galleryImg: document.querySelector('.lightbox__image'),
//   modal: document.querySelector('.js-lightbox'),
//   modalCloseBtn: document.querySelector('.lightbox__button'),
//   backdrop: document.querySelector('.lightbox__overlay')
  
// }

// let defaultIndex;

// const makeGalleryList = galleryItems.map((images, index) => {
//   const { preview, original, description } = images
  
//     const createLi = document.createElement('li')
//   createLi.classList.add('gallery__item')
  
//     const createA = document.createElement('a')
//   createA.classList.add('gallery__link')
//   createA.href = original
  
//     const createImg = document.createElement('img')
//     createImg.classList.add('gallery__image')
//       createImg.src = preview
//       createImg.alt = description
//       createImg.dataset.source = original
//       createImg.dataset.index = index

//       createA.appendChild(createImg)
   
//       createLi.appendChild(createA)
    
//    return createLi
// })

   
// refs.gallery.append(...makeGalleryList)

// function onGalleryClick(event) {
//   event.preventDefault()
//   if (event.target.nodeName !== 'IMG') {
//    return
//   }
//   defaultIndex = Number(event.target.dataset.index)
//   refs.modal.classList.add('is-open')
//   refs.galleryImg.src = event.target.dataset.source
//   refs.modalCloseBtn.addEventListener('click', onCloseModal)
//   refs.backdrop.addEventListener('click', onBackDropClose)
//   window.addEventListener('keydown',controlImageByArrow)

// }
// refs.gallery.addEventListener('click', onGalleryClick)

// function onCloseModal() {
//   refs.modal.classList.remove('is-open')
//   refs.galleryImg.src = ''
// }

// function onBackDropClose(event) {
//   if (event.currentTarget === event.target) {
//     onCloseModal()
//   }
// }

// function onEscapeClick(event) {
//   if (event.code === 'Escape') {
//     onCloseModal()
//   }
// }

// function controlImageByArrow(event) {
//   onEscapeClick(event)
//   nextImg(event)
//   prevImg (event)
// }

// function onNewImg() {
//   const newIndex = galleryItems[defaultIndex].original;
//   refs.galleryImg.src = newIndex;
// }

// function nextImg(event) {
//   if (event.code === 'ArrowRight' && defaultIndex < galleryItems.length - 1) {
//     defaultIndex += 1;
//     onNewImg();
//   }
// }

// function prevImg(event) {
//   if (event.code === 'ArrowLeft' && defaultIndex > 0) {
//     defaultIndex -= 1;
//     onNewImg();
//   }
// }
