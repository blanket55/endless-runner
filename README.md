# Endless Runner 3D - Neon Void

A high-performance, infinite 3D runner game built with **Three.js** and **Cannon-es physics**.

## 🎮 Features

### Gameplay
- **Procedural Level Generation**: 5 unique segment types (Straight, Narrow, Slant, Tunnel, Leap)
- **Dynamic Difficulty**: Platform width decreases, hard segments increase with score
- **Physics-Based Movement**: Torque sphere with steering inertia and sticky gravity
- **60 FPS Performance**: Optimized with BufferGeometry and object pooling

### Visual Identity
- **Neon Cyber-Grid Aesthetic**: Black platforms with glowing green borders
- **Procedural Grid Shader**: Animated scrolling effect for speed perception
- **Minimalist HUD**: Score display with local best tracking

### Mechanics
- **Velocity Scaling**: +0.5% speed every 2 seconds of gameplay
- **Platform Degradation**: Width reduces from 3.0 → 1.2 units as difficulty scales
- **Segment Types Scale**: Easy segments (50% → 20%) as difficulty increases
- **Mobile Support**: Full touch controls and responsive canvas

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Open **http://localhost:8080** in your browser.

## 🎮 Controls

| Action | Key |
|--------|-----|
| Move Left | `←` |
| Move Right | `→` |
| Start Game | `SPACE` |
| Restart | `SPACE` (after game over) |
| Mobile | On-screen buttons |

## 📊 Game Systems

### Physics
- **Player**: 1.0 kg sphere with responsive steering
- **Gravity**: -30 m/s² downward
- **Friction**: 0.3 default per surface
- **Sticky Gravity**: Raycast-based ground adhesion (0.2 unit range)

### Difficulty Scaling
- **Distance Tracking**: Score = Distance × 10
- **Velocity Increase**: 0.5% every 2 seconds (additive)
- **Platform Width**: Decreases with difficulty curve
- **Segment Probabilities**: Hard segments spawn 6x more at max difficulty

### Procedural Generation
- **Seamless Stitching**: ConnectPoint system prevents jitter
- **5 Segment Types**:
  - Straight: Safe baseline
  - Narrow: Precision required
  - Slant: Momentum management
  - Tunnel: Wall navigation
  - Leap: Gap jumping

## 💾 Data Persistence

- **Best Score**: Saved to localStorage as `bestScore`
- **Automatic Save**: On game over if score exceeds previous best

## 📦 Project Structure

```
src/
├── main.ts               # Game loop, state management, input
├── Player.ts             # Physics character controller
├── Segment.ts            # Platform generation (5 types)
├── LevelGenerator.ts     # Procedural level management
├── NeonMaterialFactory.ts # Shader and material generation
├── types.ts              # TypeScript interfaces and enums
└── index.html            # UI template with HUD
```

## 🛠️ Architecture

### State Machine
```
MENU → PLAYING → GAME_OVER
```

### Physics Loop
```
Input → Player Update → Physics Step → Collision Check → Render
```

## 🎨 Visual System

### Materials
- **Platform**: Black emissive + procedural grid texture
- **Glow Edges**: Neon green with 2.0x emissive intensity
- **Hazards**: Neon red with collision detection
- **Player**: Cyan emissive sphere

## 📱 Mobile Optimization

- Responsive canvas sizing
- Touch event listeners (tap left/right)
- On-screen control buttons
- Optimized for mobile devices

## 🔧 Technical Details

### Dependencies
- **Three.js** r128: 3D rendering
- **Cannon-es** 0.20: Physics engine
- **TypeScript** 5.2: Type safety
- **Webpack** 5: Build tooling

### Performance
- **Target**: 60 FPS consistent
- **Memory**: Object pooling prevents leaks
- **Culling**: Far segments disposed at 100 units
- **Rendering**: BufferGeometry throughout

### Build
```bash
npm run build    # Production optimized
npm run dev      # Hot reload enabled
```

---

**Made with ❤️ using Three.js & Cannon-es**
