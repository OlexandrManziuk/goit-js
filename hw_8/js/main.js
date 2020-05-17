"use strict";

import galleryItems from "./gallery-items.js";

const galleryList = document.querySelector(".js-gallery");
const boxContent = document.querySelector(".lightbox__content");
const boxImg = document.querySelector(".lightbox__image");
const boxButton = document.querySelector(".lightbox");
const boxBtnClose = document.querySelector(".lightbox__button");

const addList = ({ preview, original, description }) => {
  return `<li class="gallery__item">
  <a class="gallery__link"
    href="${original}">
    <img class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}">
  </a>
</li>`;
};

const addRenderList = (link) => link.reduce((acc, el) => acc + addList(el), "");

galleryList.insertAdjacentHTML("beforeend", addRenderList(galleryItems));

galleryList.addEventListener("click", modalOpen);

function modalOpen(e) {
  e.preventDefault();
  boxImg.setAttribute("src", e.target.dataset.source);
  boxImg.setAttribute("alt", e.target.alt);
  boxButton.classList.add("is-open");
}

boxBtnClose.addEventListener("click", modalClose);

boxContent.addEventListener("click", (e) => {
  if (e.currentTarget === e.target) {
    modalClose();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.code === "Escape") {
    modalClose();
  }
});

function leftRightSwitcher(e) {
  const arrOriginal = galleryItems.map((galleryItem) => galleryItem.original);

  if (e.code === "ArrowLeft") {
    for (let i = 0; i < arrOriginal.length; i += 1) {
      if (arrOriginal[i] === boxImg.src) {
        i--;
        boxImg.src = arrOriginal[i];
      }
    }
  }

  if (e.code === "ArrowRight") {
    for (let i = 0; i < arrOriginal.length; i += 1) {
      if (arrOriginal[i] === boxImg.src) {
        i++;
        boxImg.src = arrOriginal[i];
      }
    }
  }
}

function modalClose(e) {
  boxImg.setAttribute("src", "");
  boxImg.setAttribute("alt", "");
  boxButton.classList.remove("is-open");
}

window.addEventListener("keydown", leftRightSwitcher);
