"use strict";

const tolyRunning = document.querySelector("#toly-running");
const runFrames = ["assets/toly-base-16bit.svg", "assets/toly-run-frame-2.svg"];
const jumpFrame = "assets/toly-jump.svg";
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (tolyRunning && !reduceMotion) {
  let currentFrame = 0;
  let isJumping = false;

  window.setInterval(() => {
    if (isJumping) return;
    currentFrame = (currentFrame + 1) % runFrames.length;
    tolyRunning.src = runFrames[currentFrame];
  }, 180);

  window.setInterval(() => {
    isJumping = true;
    tolyRunning.src = jumpFrame;
    tolyRunning.classList.add("is-jumping");

    window.setTimeout(() => {
      tolyRunning.classList.remove("is-jumping");
      currentFrame = 0;
      tolyRunning.src = runFrames[currentFrame];
      isJumping = false;
    }, 680);
  }, 3600);
}
