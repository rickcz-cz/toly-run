"use strict";

const tolyRunning = document.querySelector("#toly-running");
const tolyStage = document.querySelector("#toly-stage");
const droppedPhone = document.querySelector("#dropped-phone");
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

function playTolyHitAnimation() {
  if (!tolyStage || !droppedPhone || reduceMotion) return;

  tolyStage.classList.remove("is-hit");
  droppedPhone.classList.remove("is-dropping");
  void tolyStage.offsetWidth;
  tolyStage.classList.add("is-hit");
  droppedPhone.classList.add("is-dropping");

  window.setTimeout(() => {
    tolyStage.classList.remove("is-hit");
    droppedPhone.classList.remove("is-dropping");
  }, 800);
}

function playTolyDeathAnimation() {
  if (!tolyStage || reduceMotion) return;

  tolyStage.classList.remove("is-dead");
  void tolyStage.offsetWidth;
  tolyStage.classList.add("is-dead");

  for (let phoneNumber = 0; phoneNumber < 10; phoneNumber += 1) {
    const phone = document.createElement("span");
    phone.className = "dropped-phone is-death-phone";
    phone.style.setProperty("--x", `${30 + Math.random() * 42}%`);
    phone.style.setProperty("--drift", `${-90 + Math.random() * 180}px`);
    phone.style.setProperty("--delay", `${phoneNumber * 35}ms`);
    phone.setAttribute("aria-hidden", "true");
    tolyStage.append(phone);
    window.setTimeout(() => phone.remove(), 1500);
  }

  window.setTimeout(() => {
    tolyStage.classList.remove("is-dead");
  }, 800);
}

// Phase 3 collision detection will call this function.
window.playTolyHitAnimation = playTolyHitAnimation;
window.playTolyDeathAnimation = playTolyDeathAnimation;
