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

/** Soft tap — brief warm tone on click */
export function playClick() {
  try {
    const ctx = getAudioContext()
    const now = ctx.currentTime

    const osc = ctx.createOscillator()
    const gain = ctx.createGain()

    osc.type = 'sine'
    osc.frequency.value = 220 // A3 — warm, well below piercing range

    gain.gain.setValueAtTime(0, now)
    gain.gain.linearRampToValueAtTime(0.03, now + 0.02)  // quick soft attack
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3) // short decay

    osc.connect(gain)
    gain.connect(ctx.destination)

    osc.start(now)
    osc.stop(now + 0.32)
  } catch {
    // Silently ignore
  }
}
