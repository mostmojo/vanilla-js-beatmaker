// Run content upon page load
window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound");
  const pads = document.querySelectorAll(".pads div");

  // Now... the sound! :)
  pads.forEach((pad, index) => {
    pad.addEventListener("click", function() {
      sounds[index].play();
    });
  });
});
