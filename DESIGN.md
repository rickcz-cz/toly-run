# TOLY — Character Design

## Identity

TOLY is a stylised, expressive human runner inspired by Solana founder Anatoly Yakovenko. He should be instantly recognisable at phone-screen size, confident, energetic, and playful rather than aggressive.

## Signature look

- **Cap:** a soft five-panel running cap, worn forward, with a Solana-gradient front panel.
- **Glasses:** oversized black wraparound sunglasses with a subtle mint highlight.
- **Hair and face:** short dark hair, natural human skin tone, and friendly recognisable facial features; keep the likeness playful and game-stylised.
- **Outfit:** dark charcoal running jacket, black running trousers, and trainers with a narrow purple-to-mint Solana stripe.
- **Expression:** confident smile while running; wide eyes or tilted glasses for danger and impact reactions.

## Solana colour palette

| Use | Colour |
| --- | --- |
| Solana purple | `#9945FF` |
| Solana mint | `#14F195` |
| Deep background | `#15111F` |
| Jacket charcoal | `#25222B` |
| Accent coral | `#FF7A51` |
| Off-white | `#FFF7EE` |

The cap and jacket stripe should use a left-to-right gradient from Solana purple to Solana mint. Keep the rest of the outfit balanced and avoid placing any Solana wordmark or logo on him.

## Sprite direction

- Style: clear 16-bit pixel art with deliberate square pixels, limited shading, and hard edges.
- Framing: side view facing right, full human body visible.
- Background: transparent.
- Base size: 256 × 256 pixels, designed to remain clear when displayed at 96–144 CSS pixels.
- The final sprite must contain no text, watermark, or background scene.

## Gameplay scale and orientation

TOLY Run is designed for **portrait orientation**. The large TOLY shown on the start screen is promotional only. During a run, TOLY should be anchored near the left side of the game area and displayed at roughly **22–28% of the screen width** (about 90–110 CSS pixels on the 390 px reference viewport). This leaves the right side clear for upcoming obstacles and gives the jump visible height. Landscape orientation is not a gameplay target.

## Animation notes

The cap, glasses, jacket, and running posture must create a clear silhouette. During a run, the jacket hem and cap brim move slightly. Sunglasses stay on in every animation except the impact reaction, where they can tilt briefly.

## Impact reaction

On a collision, TOLY flashes red briefly and shakes sideways. A simple black smartphone falls from him, tumbles once, and disappears below the game area. This is a visual response only; the collision system and life deduction will be added later.

## Death reaction

After the final lost life, TOLY briefly flashes red and bursts into a compact 16-bit pixel effect. Ten simple black smartphones scatter from the burst, tumble, and fall below the screen. They do not remain in the background or bounce; the screen stays visually clean for the Game Over state.
