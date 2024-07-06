window.onload = function (){
  document.getElementById("myAudio").play();
}

// document.addEventListener("DOMContentLoaded", function () {
//   const audio = document.getElementById("myAudio");
// });

$(document).ready(function () {
  $(".speaker").click(function (e) {
    e.preventDefault();
    $(this).toggleClass("mute");
  });
});

const audio = document.getElementById("myAudio");
const muteButton = document.getElementById("muteButton");

muteButton.addEventListener("click", () => {
  if (audio.muted) {
    audio.muted = false;
  } else {
    audio.muted = true;
  }
  if (audio.paused) {
    audio.play();
  }
});