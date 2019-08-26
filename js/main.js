'use strict';

{
  const images = [
    'img/pic00.jpg',
    'img/pic01.jpg',
    'img/pic02.jpg',
    'img/pic03.jpg',
    'img/pic04.jpg',
    'img/pic05.jpg',
    'img/pic06.jpg',
  ];

  let currentNum = 0;

  function setMainImage(image) {
    document.querySelector('main img').src = image;
  }

  setMainImage(images[currentNum]);

  const thumbnails = document.querySelector('.thumbnails');
  images.forEach((image, index) => {
    const li = document.createElement('li');
    if (index === currentNum){
      li.classList.add('current');
    }

    li.addEventListener('click', () => {
      setMainImage(image);
    });

    const img = document.createElement('img');
    img.src = image;
    li.appendChild(img);
    thumbnails.appendChild(li);
  });
}