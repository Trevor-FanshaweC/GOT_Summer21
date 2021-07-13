(() => {
  const sigils = document.querySelectorAll(".sigilContainer"),
        lBox = document.querySelector(".lightbox"),
        lbClose = lBox.querySelector(".close-button");

  function popLightBox() {
    // add the show-lightbox class to the lBox element
    // debugger;
    lBox.classList.add('show-lightbox');
  }

  function closeLightBox() {
    // remove the show-lightbox class from the lBox element
    lBox.classList.remove('show-lightbox');
    // debugger;
  }

  sigils.forEach(sigil => sigil.addEventListener("click", popLightBox));
  lbClose.addEventListener("click", closeLightBox);
})();
