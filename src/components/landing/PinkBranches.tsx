// Pink/Green chapter — flowing watercolor tree branches
// Inspired by GRIS Chapter 2: soft pinks, muted teals, organic vine shapes

export function PinkBranches() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">

      {/* Soft watercolor wash blobs */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 1440 900"
        style={{ filter: 'blur(50px)', willChange: 'transform', transform: 'translateZ(0)' }}
      >
        <ellipse cx="300" cy="200" rx="450" ry="220" fill="rgba(210,160,150,0.25)" />
        <ellipse cx="1100" cy="400" rx="400" ry="250" fill="rgba(140,190,185,0.20)" />
        <ellipse cx="700" cy="700" rx="500" ry="180" fill="rgba(220,180,170,0.15)" />
      </svg>

      {/* Flowing branch paths */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 1440 900"
      >
        {/* Main thick branch — top left sweeping right */}
        <path
          d="M-20 180 C 100 200, 250 240, 400 220 C 550 200, 650 150, 800 170 C 950 190, 1050 240, 1200 210 C 1320 188, 1420 160, 1460 155"
          fill="none" stroke="rgba(120,160,155,0.35)" strokeWidth="18" strokeLinecap="round"
        />
        {/* Branch drooping down */}
        <path
          d="M400 220 C 420 260, 430 310, 410 360 C 390 410, 370 440, 380 490"
          fill="none" stroke="rgba(120,160,155,0.25)" strokeWidth="10" strokeLinecap="round"
        />
        {/* Secondary branch — middle right */}
        <path
          d="M800 170 C 830 210, 850 260, 840 310"
          fill="none" stroke="rgba(180,120,115,0.30)" strokeWidth="8" strokeLinecap="round"
        />
        {/* Thin vine sweeping from right */}
        <path
          d="M1460 350 C 1350 330, 1200 300, 1050 340 C 900 380, 800 420, 650 400 C 500 380, 350 350, 200 390"
          fill="none" stroke="rgba(160,200,190,0.22)" strokeWidth="6" strokeLinecap="round"
        />

        {/* Leaf clusters */}
        {[
          [300, 195], [500, 205], [700, 160], [900, 185], [1100, 200],
          [380, 350], [820, 280], [1000, 330],
        ].map(([cx, cy], i) => (
          <ellipse
            key={i}
            cx={cx} cy={cy}
            rx={12 + (i % 3) * 5}
            ry={6 + (i % 2) * 3}
            fill={i % 2 === 0 ? 'rgba(130,175,165,0.40)' : 'rgba(210,150,140,0.35)'}
            transform={`rotate(${-20 + i * 15} ${cx} ${cy})`}
          />
        ))}

        {/* Dangling berries/buds */}
        {[[430, 490], [810, 320], [1050, 350]].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r={5} fill="rgba(200,80,80,0.55)" />
        ))}
      </svg>

      {/* TOP LEFT: Hanging pink/teal vines */}
      <svg className="absolute top-0 left-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 300" style={{ width: 380, height: 300 }}>
        <path d="M40 0 C 44 38, 36 75, 40 115 C 44 148, 48 172, 44 210" stroke="rgba(140,175,165,0.42)" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
        <path d="M90 0 C 93 45, 86 84, 89 124 C 92 158, 96 180, 92 218" stroke="rgba(130,168,158,0.38)" strokeWidth="3" fill="none" strokeLinecap="round"/>
        <path d="M138 0 C 140 32, 134 62, 137 92" stroke="rgba(148,182,172,0.34)" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        <path d="M18 0 C 16 24, 20 44, 17 68 C 14 90, 10 108, 14 130" stroke="rgba(135,172,162,0.30)" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <ellipse cx="38" cy="72"  rx="15" ry="28" fill="rgba(210,155,148,0.52)" transform="rotate(-12 38 72)"/>
        <ellipse cx="50" cy="118" rx="12" ry="22" fill="rgba(195,142,136,0.46)" transform="rotate(8 50 118)"/>
        <ellipse cx="36" cy="158" rx="14" ry="26" fill="rgba(218,162,154,0.42)" transform="rotate(-16 36 158)"/>
        <ellipse cx="46" cy="200" rx="10" ry="18" fill="rgba(202,148,142,0.36)" transform="rotate(5 46 200)"/>
        <ellipse cx="88" cy="80"  rx="14" ry="24" fill="rgba(205,150,144,0.48)" transform="rotate(14 88 80)"/>
        <ellipse cx="94" cy="130" rx="11" ry="20" fill="rgba(215,158,150,0.42)" transform="rotate(-10 94 130)"/>
        <ellipse cx="86" cy="178" rx="13" ry="23" fill="rgba(198,145,138,0.38)" transform="rotate(18 86 178)"/>
        <ellipse cx="136" cy="58" rx="13" ry="22" fill="rgba(208,152,146,0.44)" transform="rotate(-8 136 58)"/>
        <ellipse cx="142" cy="92" rx="10" ry="17" fill="rgba(196,144,138,0.38)" transform="rotate(11 142 92)"/>
        <circle cx="44"  cy="214" r="4"   fill="rgba(100,165,158,0.62)"/>
        <circle cx="90"  cy="222" r="3.5" fill="rgba(100,165,158,0.55)"/>
        <circle cx="50"  cy="125" r="3"   fill="rgba(200,80,80,0.50)"/>
      </svg>

      {/* TOP RIGHT: Hanging warm-toned foliage */}
      <svg className="absolute top-0 right-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 280" style={{ width: 380, height: 280 }}>
        <path d="M340 0 C 336 36, 344 70, 340 105 C 336 135, 332 158, 336 188" stroke="rgba(180,128,120,0.40)" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
        <path d="M292 0 C 289 40, 296 76, 293 112 C 290 144, 286 166, 289 196" stroke="rgba(170,122,115,0.36)" strokeWidth="3" fill="none" strokeLinecap="round"/>
        <path d="M248 0 C 246 32, 252 60, 250 88" stroke="rgba(185,134,126,0.32)" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        <path d="M362 0 C 364 22, 360 42, 362 65 C 364 86, 367 104, 364 126" stroke="rgba(175,126,118,0.28)" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <ellipse cx="342" cy="68"  rx="16" ry="30" fill="rgba(145,190,182,0.48)" transform="rotate(14 342 68)"/>
        <ellipse cx="330" cy="112" rx="13" ry="24" fill="rgba(135,180,172,0.42)" transform="rotate(-11 330 112)"/>
        <ellipse cx="340" cy="152" rx="15" ry="27" fill="rgba(150,194,185,0.38)" transform="rotate(8 340 152)"/>
        <ellipse cx="332" cy="192" rx="11" ry="20" fill="rgba(138,182,174,0.34)" transform="rotate(-6 332 192)"/>
        <ellipse cx="292" cy="76"  rx="14" ry="26" fill="rgba(208,152,145,0.44)" transform="rotate(-16 292 76)"/>
        <ellipse cx="286" cy="122" rx="12" ry="22" fill="rgba(198,145,138,0.38)" transform="rotate(13 286 122)"/>
        <ellipse cx="291" cy="168" rx="13" ry="24" fill="rgba(205,150,142,0.34)" transform="rotate(-8 291 168)"/>
        <ellipse cx="250" cy="62"  rx="13" ry="23" fill="rgba(140,185,177,0.40)" transform="rotate(9 250 62)"/>
        <ellipse cx="256" cy="92"  rx="11" ry="18" fill="rgba(130,178,170,0.34)" transform="rotate(-14 256 92)"/>
        <circle cx="336" cy="196" r="4"   fill="rgba(200,80,80,0.52)"/>
        <circle cx="289" cy="200" r="3.5" fill="rgba(200,80,80,0.46)"/>
        <circle cx="335" cy="118" r="3"   fill="rgba(100,165,158,0.58)"/>
        <ellipse cx="368" cy="22" rx="26" ry="16" fill="rgba(145,190,182,0.46)" transform="rotate(-10 368 22)"/>
        <ellipse cx="335" cy="14" rx="22" ry="14" fill="rgba(135,180,172,0.40)" transform="rotate(7 335 14)"/>
      </svg>

      {/* Vignette */}
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 90% 90% at 50% 50%, transparent 35%, rgba(18,8,10,0.45) 100%)' }}/>
    </div>
  )
}
