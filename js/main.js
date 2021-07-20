(() => {
  const sigils = document.querySelectorAll(".sigilContainer"),
        lBox = document.querySelector(".lightbox"),
        houseVideo = document.querySelector("video"),
        lbClose = lBox.querySelector(".close-button"),
        houseImages = document.querySelector("#houseImages");

  function popLightBox() {
    // find the right house video using the CSS class attached to the sigil that was clicked
    let targetVideo = this.className.split(" ")[1];

    // get the house name, capitalize the first character, and then rebuild the whole word with a cap.
    let targetVidCap = targetVideo.charAt(0).toUpperCase() + targetVideo.slice(1);

    // load the correct house video
    houseVideo.src = `video/House-${targetVidCap}.mp4`;
    houseVideo.load();

    // play the house video
    houseVideo.play();
    // add the show-lightbox class to the lBox element
    lBox.classList.add('show-lightbox');
  }

  function closeLightBox() {
    // stop and rewind the video element
    houseVideo.currentTime = 0;
    houseVideo.pause();
    // remove the show-lightbox class from the lBox element
    lBox.classList.remove('show-lightbox');
  }

  function animateBanners() {
    // move the banners across the screen
    const offSet = 600;

    let multiplier = this.dataset.offset,
        finalOffset = offSet * multiplier;
        // this will be a product of the mulitipier * the offset (600 * something)
    houseImages.style.right = finalOffset + "px";
  }

  // sigils.forEach(sigil => sigil.addEventListener("click", popLightBox));
  sigils.forEach(sigil => sigil.addEventListener("click", animateBanners));


  lbClose.addEventListener("click", closeLightBox);
  houseVideo.addEventListener("ended", closeLightBox);
})();
