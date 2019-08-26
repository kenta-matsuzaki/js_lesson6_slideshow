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

  function removeCurrentClass() {
    document.querySelectorAll('.thumbnails li')[currentNum]
      .classList.remove('current');
  }

  function addCurrentClass() {
    document.querySelectorAll('.thumbnails li')[currentNum]
      .classList.add('current');
  }

  const thumbnails = document.querySelector('.thumbnails');
  images.forEach((image, index) => {
    const li = document.createElement('li');
    if (index === currentNum){
      li.classList.add('current');
    }

    li.addEventListener('click', () => {
      setMainImage(image);
      removeCurrentClass();
      currentNum = index;
      addCurrentClass();
    });

    const img = document.createElement('img');
    img.src = image;
    li.appendChild(img);
    thumbnails.appendChild(li);
  });

  const next = document.getElementById('next');
  next.addEventListener('click', () => {
    removeCurrentClass();
    currentNum++;
    if (currentNum === images.length) {
      currentNum = 0;
    }
    addCurrentClass();
    setMainImage(images[currentNum]);
  });

  const prev = document.getElementById('prev');
  prev.addEventListener('click', () => {
    removeCurrentClass();
    currentNum--;
    if (currentNum < 0) {
      currentNum = images.length - 1;
    }
    addCurrentClass();
    setMainImage(images[currentNum]);
  });

  function playSlideshow() {
    setTimeout(() => {
      next.click();
      playSlideshow();
    }, 1000);
  }

  const play = document.getElementById('play');
  play.addEventListener('click', () => {
    playSlideshow();
  });
}