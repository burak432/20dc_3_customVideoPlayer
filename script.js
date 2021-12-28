let play = document.querySelector("#play");
let stop = document.querySelector("#stop");
let progress = document.querySelector("#progress");
let timestamp = document.querySelector("#timestamp");
let video = document.querySelector("#video");

////////////////// fonksiyonlar  //////////////////

//play ve pause
function videoEvent() {
  if (video.paused) {
    video.play();
    play.innerHTML = `<i class="fas fa-pause"></i>`;
  } else {
    video.pause();
    play.innerHTML = `<i class="fas fa-play"></i>`;
  }
}

//stop
function stopVideo() {
    video.pause();
    video.currentTime = 0;
    play.innerHTML = `<i class="fas fa-play"></i>`;
  }

//video oynatılırken progress bar value güncelleme
function progresGuncelle() {
  progress.value = (+video.currentTime / video.duration) * 100;
}

//progress bar mouse ile tıklandığında güncelleme
function progresSet() {
  video.currentTime = (+progress.value * video.duration) / 100;
}

///////////// event listeners /////////////

play.addEventListener("click", videoEvent);
stop.addEventListener("click", stopVideo);
video.addEventListener("click", videoEvent);
video.addEventListener("timeupdate", progresGuncelle);
progress.addEventListener("change", progresSet);

