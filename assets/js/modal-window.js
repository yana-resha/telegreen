const callbackBtns =  Array.from(document.querySelectorAll('.callback'));
let modalBackground = document.querySelector('.modal-window');
let modalContent = document.querySelector('.modal-content');
const modalForm = document.querySelector('.important__form')


callbackBtns.forEach(callbackBtn => {
  callbackBtn.addEventListener('click', (e) => {
    e.preventDefault();
    modalBackground.classList.add('modal-window-opacity');
  
    document.addEventListener('click', (e) => {
  
    })
  
    modalBackground.addEventListener('click', (e) => {
      if (e.target === modalBackground) {
        modalBackground.classList.remove('modal-window-opacity');
      }
    })
  
    modalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      modalBackground.classList.remove('modal-window-opacity');
      alert('Отправлено!')
    })
  
  
  })
})



// btn.forEach(el => {
//   el.addEventListener('click', () => {
//     modalBackground.classList.add('modal-window-opacity');
//     const picture = el.querySelector('.gallery__picture');
//     const pictureContainer = document.createElement('div');
//     pictureContainer.appendChild(picture.cloneNode(true));
//     modalContent.append(pictureContainer);
//     const discriptionContainer = document.createElement('div');
//     discriptionContainer.classList.add('modal-description');
//     const descTitle = document.createElement('h1');
//     descTitle.classList.add('modal-title')
//     descTitle.textContent = 'Здесь будет описание';
//     const descAbout = document.createElement('p');
//     descAbout.classList.add('desc-about')
//     descAbout.textContent = 'Когда будут названия картин';
//     discriptionContainer.append(descTitle, descAbout)


//     modalContent.append(discriptionContainer);
//     modalBackground.append(modalContent)

//     modalBackground.addEventListener('click', () => {
//      modalBackground.classList.remove('modal-window-opacity');
//      modalContent.innerHTML = '';
//     })
//   })
// })