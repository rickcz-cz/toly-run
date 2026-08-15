"use strict";

const tolyRunning = document.querySelector("#toly-running");
const runFrames = ["assets/toly-base-16bit.svg", "assets/toly-run-frame-2.svg"];
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (tolyRunning && !reduceMotion) {
  let currentFrame = 0;
  window.setInterval(() => {
    currentFrame = (currentFrame + 1) % runFrames.length;
    tolyRunning.src = runFrames[currentFrame];
  }, 180);
}
