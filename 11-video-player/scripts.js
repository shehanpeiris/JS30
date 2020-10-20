// Step 1: Get our elements
const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progressBar = player.querySelector(".progress");
const progressFilled = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");
const expandVideo = player.querySelector(".fullscreen");

// Step 2: Build our functions
// Start/stop the video
function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause()
  }
};

// Update the icon for the play button
function updateButton() {
  const icon = this.paused ? "►" : "❚ ❚";
  toggle.textContent = icon;
};

// Skip to specified time
function skip() {
  video.currentTime += parseFloat(this.dataset.skip)
};

// Set range for volume or playback speed
function handleRangeUpdate() {
  video[this.name] = this.value;
}

// Progress bar filling up
function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressFilled.style.flexBasis = `${percent}%`;
};

// Manually choose video time using slider
function scrubVideo(event) {
  video.currentTime = (event.offsetX/progressBar.offsetWidth)*video.duration;
};

// Trigger full screen view
function fullScreen() {
  video.requestFullscreen();
};

// Step 3: Hook up event listeners

// Toggle Play function needs to be hooked up to video and play button
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
video.addEventListener("timeupdate", handleProgress);

toggle.addEventListener("click", togglePlay);

skipButtons.forEach(button => button.addEventListener("click", skip));

ranges.forEach(slider => slider.addEventListener("change", handleRangeUpdate));
ranges.forEach(slider => slider.addEventListener("mousemove", handleRangeUpdate));

progressBar.addEventListener("click", scrubVideo);
let mouseDown = false;
progressBar.addEventListener("mousemove", (event) => mousedown && scrubVideo(event));
progressBar.addEventListener("mousedown", () => mousedown = true);
progressBar.addEventListener("mouseup", () => mousedown = false);

expandVideo.addEventListener("click", fullScreen);