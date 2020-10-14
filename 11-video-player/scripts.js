// Step 1: Get our elements
const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progressBar = player.querySelector(".progress");
const progressFilled = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");

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

// Skip
function skip() {
  video.currentTime += parseFloat(this.dataset.skip)
};


function handleRangeUpdate() {
  console.log(this.value);
}


// Step 3: Hook up event listeners

// Toggle Play function needs to be hooked up to video and play button
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);

toggle.addEventListener("click", togglePlay);

skipButtons.forEach(button => button.addEventListener("click", skip));

ranges.forEach(slider => slider.addEventListener("change", handleRangeUpdate));