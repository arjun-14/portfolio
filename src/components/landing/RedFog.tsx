// Red chapter — atmospheric crimson fog + dark tower silhouette
// Inspired by GRIS Chapter 1: monochromatic red with monument/bell tower

export function RedFog() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Layered red mist blobs */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 1440 900"
        style={{ filter: 'blur(40px)' }}
      >
        <ellipse cx="200" cy="300" rx="400" ry="250" fill="rgba(180,20,20,0.18)" />
        <ellipse cx="1200" cy="200" rx="350" ry="200" fill="rgba(140,10,10,0.14)" />
        <ellipse cx="720" cy="500" rx="500" ry="200" fill="rgba(200,30,30,0.10)" />
        <ellipse cx="100" cy="700" rx="300" ry="150" fill="rgba(160,15,15,0.12)" />
        <ellipse cx="1350" cy="650" rx="280" ry="160" fill="rgba(180,20,20,0.10)" />
      </svg>

      {/* Dark tower/monument silhouette at bottom center */}
      <svg
        className="absolute bottom-0 left-1/2"
        style={{ transform: 'translateX(-50%)', width: 180, height: 320, zIndex: 2 }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 180 320"
      >
        <rect x="60" y="160" width="60" height="160" fill="rgba(8,2,2,0.85)" />
        <rect x="70" y="100" width="40" height="70" fill="rgba(8,2,2,0.85)" />
        <path d="M75 220 Q90 200 105 220 L105 280 L75 280 Z" fill="rgba(60,5,5,0.4)" />
        <rect x="74" y="60" width="32" height="45" fill="rgba(8,2,2,0.85)" />
        <path d="M79 70 Q90 60 101 70 L101 90 L79 90 Z" fill="rgba(80,8,8,0.5)" />
        <polygon points="90,10 80,60 100,60" fill="rgba(8,2,2,0.85)" />
        <rect x="87" y="6" width="6" height="16" fill="rgba(8,2,2,0.9)" />
        <rect x="82" y="10" width="16" height="4" fill="rgba(8,2,2,0.9)" />
      </svg>

      {/* Subtle vignette overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, rgba(5,0,0,0.4) 100%)',
        }}
      />
    </div>
  )
}
