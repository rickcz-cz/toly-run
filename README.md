# TOLY RUN

An English-language endless runner for Solana Seeker.

## Development

Open `index.html` in a browser. The project uses plain HTML, CSS, and JavaScript, so no installation step is required.

## Design baseline

- Start screen orientation: portrait permitted.
- Gameplay orientation: landscape, requested after the player presses PLAY.
- Target device: Solana Seeker.
- Gameplay reference viewport: 844 × 390 CSS pixels.
- The layout must stay usable from 320 px wide and respect phone safe areas.
- All in-game text, controls, and messages are in English.
- The large character on the start screen is not gameplay scale; in a run, TOLY will use roughly 25–32% of the available height and stay near the left side.

## Project structure

- `index.html` — app entry point
- `styles/` — visual styles
- `scripts/` — game code
- `assets/` — images, sounds, and other game assets
