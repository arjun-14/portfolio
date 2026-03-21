// Shared Web Audio API context + sound effect utilities
// Singleton pattern — one AudioContext for the entire app

let _ctx: AudioContext | null = null

export function getAudioContext(): AudioContext {
  if (!_ctx) {
    _ctx = new AudioContext()
  }
  if (_ctx.state === 'suspended') {
    _ctx.resume()
  }
  return _ctx
}

/** Gentle breath — barely-there hover feedback */
export function playHover() {
  try {
    const ctx = getAudioContext()
    const now = ctx.currentTime

    // Soft sine at A5 — no pitch sweep, just a pure tone that fades
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()

    osc.type = 'sine'
    osc.frequency.value = 440 // A4 — warm, not sharp

    gain.gain.setValueAtTime(0, now)
    gain.gain.linearRampToValueAtTime(0.022, now + 0.06)  // slow soft attack
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.7) // long gentle decay

    osc.connect(gain)
    gain.connect(ctx.destination)

    osc.start(now)
    osc.stop(now + 0.75)
  } catch {
    // Silently ignore
  }
}

/** Soft crystal bowl — gentle two-note chime on click */
export function playClick() {
  try {
    const ctx = getAudioContext()
    const now = ctx.currentTime

    // Two pure tones a perfect fifth apart (A4 + E5) — maximally consonant
    const pairs = [
      { freq: 440.0, delay: 0,    peak: 0.032, decay: 1.0 }, // A4
      { freq: 659.3, delay: 0.06, peak: 0.022, decay: 1.4 }, // E5
    ]

    pairs.forEach(({ freq, delay, peak, decay }) => {
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()

      osc.type = 'sine'
      osc.frequency.value = freq

      gain.gain.setValueAtTime(0, now + delay)
      gain.gain.linearRampToValueAtTime(peak, now + delay + 0.04)
      gain.gain.exponentialRampToValueAtTime(0.001, now + delay + decay)

      osc.connect(gain)
      gain.connect(ctx.destination)

      osc.start(now + delay)
      osc.stop(now + delay + decay + 0.05)
    })
  } catch {
    // Silently ignore
  }
}
