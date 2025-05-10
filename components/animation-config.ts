// Animation configuration constants
export const ANIMATION_CONFIG = {
  // Default animation durations
  durations: {
    fast: 0.3,
    medium: 0.5,
    slow: 0.8,
  },

  // Default animation delays
  delays: {
    none: 0,
    short: 0.1,
    medium: 0.3,
    long: 0.5,
  },

  // Animation distances (in pixels)
  distances: {
    small: 20,
    medium: 50,
    large: 100,
  },

  // Easing functions
  easing: {
    // Smooth easing for most animations
    smooth: [0.25, 0.1, 0.25, 1.0],
    // Bouncy easing for playful animations
    bouncy: [0.34, 1.56, 0.64, 1],
    // Sharp easing for quick animations
    sharp: [0.4, 0, 0.2, 1],
  },

  // Stagger timing for child elements
  stagger: {
    fast: 0.05,
    medium: 0.1,
    slow: 0.2,
  },

  // Viewport thresholds for triggering animations
  viewport: {
    margin: "-100px",
    amount: 0.1, // 10% of the element needs to be visible
    once: true, // Only animate once
  },
}
