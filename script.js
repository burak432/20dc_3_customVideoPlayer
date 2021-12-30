let play = document.querySelector("#play");
let stop = document.querySelector("#stop");
let progress = document.querySelector("#progress");
let timer = document.querySelector("#timer");
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

//video oynatılırken progress bar value güncelle
function progresGuncelle() {
  progress.value = (video.currentTime / video.duration) * 100;

  // zaman dakika
  let dak = Math.floor(video.currentTime / 60);
  if (dak < 10) {
    dak = "0" + String(dak);
  }

  // zaman saniye
  let sny = Math.floor(video.currentTime % 60);
  if (sny < 10) {
    sny = "0" + String(sny);
  }

  timer.innerHTML = `${dak}:${sny}`;
}

//mouse ile tıklandığında progress bar güncelle
function progresSet() {
  video.currentTime = (+progress.value * video.duration) / 100;
}

///////////// event listeners /////////////

play.addEventListener("click", videoEvent);
stop.addEventListener("click", stopVideo);
video.addEventListener("click", videoEvent);
video.addEventListener("timeupdate", progresGuncelle);
progress.addEventListener("change", progresSet);
