# 🪶 Floppy Flight VR

A 3D first-person Virtual Reality game for the **Meta Quest 3**, inspired by classic Flappy Bird.

Fly from the first-person perspective of a bird through retro 3D pipe obstacles! Gain altitude by physically flapping your Quest Touch Plus controllers downward, or pull the controller triggers.

---

## 🌟 Features

- **True 6DoF Controller Flapping:** Swing your controllers downward to generate aerodynamic lift. Flapping both hands gives a powerful boost, while single-hand flaps provide subtle banking.
- **First-Person Avian View:** A stylized 3D bird beak bobbing in your lower peripheral field of view, and feathered cartoon wings attached directly to your VR controllers that flutter as you flap!
- **Haptic Feedback:** Tactile impulses triggered on your Meta Touch Plus controllers on every flap, score chime, and collision.
- **Iconic 3D Obstacles:** Classic green pipes with collars, spinning golden rings, and progressive speed scaling as your score climbs.
- **Procedural Sound FX:** 100% synthesized real-time audio via Web Audio API (wing whooshes, chimes, and bonks) with zero external asset dependencies.
- **Zero Install Friction:** Powered by Three.js and WebXR. Runs directly inside the **Meta Quest Browser** at 90Hz/120Hz.

---

## 🎮 Controls

| Action | Meta Quest 3 | Desktop (Preview) |
| :--- | :--- | :--- |
| **Flap Wings / Lift** | Flap controllers downward | `Space`, `W`, or Mouse Click |
| **Accessibility Flap** | Pull Trigger or Grip button | Mouse Click |
| **Look Around** | Full 6DoF Headset Tracking | Mouse Look |
| **Start / Retry** | Flap controllers down | `Space` or Click |

---

## 🚀 How to Run Locally for Meta Quest 3

Because WebXR requires HTTPS, this project includes a self-signed SSL dev server.

1. **Start the local HTTPS server:**
   ```bash
   npm run dev
   ```
2. Note your local network IP (e.g., `https://192.168.1.X:5173`).
3. Put on your **Meta Quest 3**, open the **Meta Quest Browser**, and navigate to that URL.
4. Click **ENTER VR** and start flapping!

---

## 🌐 Deploying to GitHub Pages

To make it accessible worldwide without local Wi-Fi:
1. Push this repository to GitHub.
2. Enable GitHub Pages in the repository settings (or use GitHub Actions).
3. Open `https://<your-username>.github.io/floppy-flight/` in the Quest Browser!
