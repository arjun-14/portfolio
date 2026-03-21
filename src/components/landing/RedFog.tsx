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
        style={{ filter: 'blur(40px)', willChange: 'transform', transform: 'translateZ(0)' }}
      >
        <ellipse cx="200" cy="300" rx="400" ry="250" fill="rgba(180,20,20,0.09)" />
        <ellipse cx="1200" cy="200" rx="350" ry="200" fill="rgba(140,10,10,0.07)" />
        <ellipse cx="720" cy="500" rx="500" ry="200" fill="rgba(200,30,30,0.05)" />
        <ellipse cx="100" cy="700" rx="300" ry="150" fill="rgba(160,15,15,0.06)" />
        <ellipse cx="1350" cy="650" rx="280" ry="160" fill="rgba(180,20,20,0.05)" />
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

      {/* Left: crumbling ruined arch + column */}
      <svg
        className="absolute bottom-0 left-0"
        style={{ width: 260, height: 480, zIndex: 2 }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 260 480"
      >
        {/* Main column shaft */}
        <rect x="30" y="180" width="44" height="300" fill="rgba(8,2,2,0.80)" />
        {/* Column capital */}
        <rect x="18" y="164" width="68" height="18" fill="rgba(10,3,3,0.82)" />
        <rect x="24" y="150" width="56" height="16" fill="rgba(10,3,3,0.78)" />
        {/* Crumbling top — missing chunk */}
        <polygon points="52,150 74,120 74,150" fill="rgba(6,1,1,0.90)" />
        {/* Broken arch half — left side only, right broken off */}
        <path d="M74 150 Q160 80 200 150" fill="none" stroke="rgba(8,2,2,0.75)" strokeWidth="14" strokeLinecap="round"/>
        {/* Arch stub cut off, jagged break */}
        <polygon points="186,118 200,150 210,140 196,108" fill="rgba(8,2,2,0.80)" />
        {/* Fallen chunk on ground */}
        <rect x="110" y="455" width="55" height="25" rx="3" fill="rgba(8,2,2,0.65)" transform="rotate(-6 110 455)" />
        <rect x="170" y="462" width="36" height="18" rx="2" fill="rgba(8,2,2,0.55)" transform="rotate(4 170 462)" />
        {/* Second smaller column stump */}
        <rect x="178" y="340" width="28" height="140" fill="rgba(8,2,2,0.60)" />
        <rect x="172" y="332" width="40" height="12" fill="rgba(9,2,2,0.62)" />
        {/* Crack detail on main column */}
        <path d="M52 220 L46 260 L54 300" fill="none" stroke="rgba(40,5,5,0.30)" strokeWidth="1.5"/>
      </svg>

      {/* Right: Gothic window frame ruin */}
      <svg
        className="absolute bottom-0 right-0"
        style={{ width: 240, height: 520, zIndex: 2 }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 240 520"
      >
        {/* Right pillar */}
        <rect x="170" y="160" width="48" height="360" fill="rgba(8,2,2,0.80)" />
        <rect x="162" y="144" width="64" height="18" fill="rgba(10,3,3,0.82)" />
        <rect x="168" y="130" width="52" height="16" fill="rgba(10,3,3,0.78)" />
        {/* Pointed arch from right pillar toward center (left side broken) */}
        <path d="M162 144 Q100 60 50 120" fill="none" stroke="rgba(8,2,2,0.72)" strokeWidth="13" strokeLinecap="round"/>
        {/* Broken arch end — jagged */}
        <polygon points="50,120 38,106 62,100 65,118" fill="rgba(8,2,2,0.78)" />
        {/* Fallen debris */}
        <rect x="20" y="490" width="62" height="30" rx="3" fill="rgba(8,2,2,0.60)" transform="rotate(5 20 490)"/>
        <rect x="88" y="498" width="40" height="22" rx="2" fill="rgba(8,2,2,0.50)" transform="rotate(-3 88 498)"/>
        {/* Crack on right pillar */}
        <path d="M188 280 L194 320 L185 358" fill="none" stroke="rgba(40,5,5,0.28)" strokeWidth="1.5"/>
      </svg>

      {/* Floating broken fragments — GRIS style crumbling world */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 900"
        style={{ zIndex: 1 }}
      >
        {/* Top-left floating shards */}
        <polygon points="180,60 210,40 225,70 195,88" fill="rgba(8,2,2,0.55)" transform="rotate(-12 200 65)"/>
        <polygon points="280,30 305,18 318,45 290,55" fill="rgba(8,2,2,0.42)" transform="rotate(8 295 36)"/>
        <rect x="340" y="50" width="28" height="14" rx="2" fill="rgba(8,2,2,0.38)" transform="rotate(-20 354 57)"/>
        {/* Top-right floating shards */}
        <polygon points="1100,50 1130,30 1148,62 1116,78" fill="rgba(8,2,2,0.52)" transform="rotate(15 1124 54)"/>
        <polygon points="1220,25 1248,14 1260,42 1232,50" fill="rgba(8,2,2,0.40)" transform="rotate(-9 1240 32)"/>
        <rect x="1280" y="70" width="32" height="12" rx="2" fill="rgba(8,2,2,0.36)" transform="rotate(18 1296 76)"/>
        {/* Mid scattered pieces */}
        <polygon points="420,200 448,185 458,215 430,228" fill="rgba(8,2,2,0.32)" transform="rotate(6 439 207)"/>
        <polygon points="980,160 1008,148 1018,175 990,185" fill="rgba(8,2,2,0.30)" transform="rotate(-14 999 167)"/>
        <rect x="640" y="120" width="22" height="10" rx="1" fill="rgba(8,2,2,0.28)" transform="rotate(22 651 125)"/>
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
