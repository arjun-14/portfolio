// Soft watercolor cloud/mist effect pinned to the bottom of the viewport

export function WatercolorClouds({ opacity = 1 }: { opacity?: number }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute bottom-0 left-0 right-0"
      style={{ zIndex: 5, opacity }}
    >
      <svg
        viewBox="0 0 1440 280"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="w-full"
        style={{ filter: 'blur(18px)' }}
      >
        {/* Back mist layer */}
        <path
          d="M0 200 C 120 160, 280 140, 420 170 C 560 200, 680 150, 820 165 C 960 180, 1100 145, 1260 158 C 1380 168, 1440 175, 1440 175 L1440 280 L0 280 Z"
          fill="rgba(255,255,255,0.04)"
        />
        {/* Mid mist */}
        <path
          d="M0 230 C 80 200, 200 190, 320 210 C 440 230, 560 205, 700 215 C 840 225, 980 200, 1120 210 C 1280 220, 1380 228, 1440 225 L1440 280 L0 280 Z"
          fill="rgba(255,255,255,0.06)"
        />
        {/* Front mist — most opaque */}
        <path
          d="M0 255 C 60 238, 160 232, 260 248 C 360 264, 480 242, 600 250 C 720 258, 860 240, 1000 248 C 1140 256, 1300 260, 1440 255 L1440 280 L0 280 Z"
          fill="rgba(255,255,255,0.09)"
        />
      </svg>
    </div>
  )
}
