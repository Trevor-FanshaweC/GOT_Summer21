(() => {
  const sigils = document.querySelectorAll(".sigilContainer"),
        lBox = document.querySelector(".lightbox"),
        houseVideo = document.querySelector("video"),
        lbClose = lBox.querySelector(".close-button");

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

  sigils.forEach(sigil => sigil.addEventListener("click", popLightBox));
  lbClose.addEventListener("click", closeLightBox);
  houseVideo.addEventListener("ended", closeLightBox);
})();
