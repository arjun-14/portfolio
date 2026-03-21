// Blue chapter — deep underwater crystals/icicles + dark silhouettes
// Inspired by GRIS Chapter 3: deep blue, crystalline structures, sea chandelier

export function BlueCrystals() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Deep blue atmospheric glow blobs */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 1440 900"
        style={{ filter: 'blur(60px)', willChange: 'transform', transform: 'translateZ(0)' }}
      >
        <ellipse cx="400" cy="300" rx="500" ry="280" fill="rgba(20,80,160,0.30)" />
        <ellipse cx="1100" cy="500" rx="400" ry="240" fill="rgba(10,50,120,0.25)" />
        <ellipse cx="720" cy="100" rx="450" ry="150" fill="rgba(30,100,180,0.20)" />
      </svg>

      {/* Crystal/icicle shapes hanging from top */}
      <svg
        className="absolute top-0 left-0 w-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 300"
        preserveAspectRatio="none"
      >
        {/* Large left cluster */}
        <polygon points="80,0 60,120 100,120" fill="rgba(80,160,220,0.15)" />
        <polygon points="100,0 85,90 115,90" fill="rgba(100,180,240,0.12)" />
        <polygon points="130,0 115,150 145,150" fill="rgba(60,140,200,0.18)" />
        <polygon points="155,0 140,80 170,80" fill="rgba(80,160,220,0.10)" />

        {/* Center cluster */}
        <polygon points="640,0 620,180 660,180" fill="rgba(80,160,220,0.16)" />
        <polygon points="680,0 665,110 695,110" fill="rgba(100,180,240,0.13)" />
        <polygon points="720,0 700,200 740,200" fill="rgba(60,140,200,0.20)" />
        <polygon points="755,0 740,130 770,130" fill="rgba(80,160,220,0.12)" />

        {/* Right cluster */}
        <polygon points="1300,0 1280,140 1320,140" fill="rgba(80,160,220,0.16)" />
        <polygon points="1340,0 1325,100 1355,100" fill="rgba(100,180,240,0.12)" />
        <polygon points="1370,0 1355,170 1385,170" fill="rgba(60,140,200,0.18)" />

        {/* Scattered small icicles */}
        <polygon points="300,0 292,60 308,60" fill="rgba(120,190,240,0.10)" />
        <polygon points="500,0 492,80 508,80" fill="rgba(100,170,230,0.10)" />
        <polygon points="900,0 892,70 908,70" fill="rgba(120,190,240,0.10)" />
        <polygon points="1100,0 1092,55 1108,55" fill="rgba(100,170,230,0.10)" />
      </svg>

      {/* Dark bottom silhouettes — chandelier / sea creature shapes */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 220"
        preserveAspectRatio="none"
      >
        {/* Left candleholder / chandelier arm silhouette */}
        <g fill="rgba(2,8,20,0.8)">
          {/* Base arm */}
          <rect x="60" y="140" width="200" height="8" rx="4" />
          {/* Vertical drops */}
          <rect x="80" y="148" width="6" height="40" rx="3" />
          <rect x="110" y="148" width="6" height="55" rx="3" />
          <rect x="140" y="148" width="6" height="35" rx="3" />
          <rect x="170" y="148" width="6" height="60" rx="3" />
          <rect x="200" y="148" width="6" height="42" rx="3" />
          <rect x="230" y="148" width="6" height="30" rx="3" />
          {/* Candle flame shapes */}
          <ellipse cx="83" cy="185" rx="5" ry="8" />
          <ellipse cx="113" cy="200" rx="5" ry="8" />
          <ellipse cx="173" cy="205" rx="5" ry="8" />
        </g>

        {/* Right cluster — organic coral/plant shapes */}
        <g fill="rgba(2,8,20,0.75)">
          <path d="M1200 220 C 1210 180, 1220 160, 1230 140 C 1240 120, 1250 115, 1255 130 C 1260 145, 1258 170, 1265 200 C 1270 220, 1280 220 1290 220 Z" />
          <path d="M1260 220 C 1265 185, 1270 165, 1280 150 C 1290 135, 1300 130, 1305 145 C 1310 160, 1305 185, 1315 210 C 1320 220, 1330 220, 1340 220 Z" />
          <path d="M1320 220 C 1325 195, 1330 175, 1340 165 C 1350 155, 1360 158, 1362 172 C 1364 186, 1360 200, 1370 215 L 1380 220 Z" />
        </g>

        {/* Ground fill */}
        <path
          d="M0 200 C 100 185, 250 180, 400 195 C 550 210, 700 190, 900 200 C 1100 210, 1300 195, 1440 200 L1440 220 L0 220 Z"
          fill="rgba(2,8,20,0.6)"
        />
      </svg>

      {/* Subtle bioluminescent particles */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 900"
      >
        {[
          [200, 400, 2.5], [500, 250, 2], [800, 500, 3], [1100, 300, 2],
          [1300, 600, 2.5], [350, 650, 2], [950, 400, 3], [650, 700, 2],
        ].map(([cx, cy, r], i) => (
          <circle key={i} cx={cx} cy={cy} r={r} fill={`rgba(100,200,255,${0.3 + (i % 3) * 0.1})`} />
        ))}
      </svg>
    </div>
  )
}
