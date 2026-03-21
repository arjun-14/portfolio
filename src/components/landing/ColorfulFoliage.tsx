// Tech Stack chapter — GRIS Chapter 4 inspired: ornate arch, hanging plants, golden lanterns
// No SVG filters — all CSS radial gradients + plain SVG shapes

export function ColorfulFoliage() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">

      {/* ── CSS atmosphere glows (GPU-accelerated, no flicker) ── */}
      <div className="absolute" style={{ top: '-10%', left: '-5%', width: '55%', height: '55%', background: 'radial-gradient(ellipse at center, rgba(120,40,180,0.25) 0%, transparent 70%)' }} />
      <div className="absolute" style={{ top: '-5%', right: '-8%', width: '45%', height: '50%', background: 'radial-gradient(ellipse at center, rgba(160,30,140,0.20) 0%, transparent 70%)' }} />
      <div className="absolute" style={{ bottom: '-10%', left: '25%', width: '55%', height: '50%', background: 'radial-gradient(ellipse at center, rgba(100,20,160,0.28) 0%, transparent 70%)' }} />

      {/* ── TOP LEFT: Hanging coral/red vines ── */}
      <svg className="absolute top-0 left-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 340" style={{ width: 420, height: 340 }}>
        {/* Vine stems */}
        <path d="M55 0 C 60 45, 50 90, 55 135 C 60 170, 65 200, 60 240" stroke="rgba(155,42,42,0.50)" strokeWidth="4" fill="none" strokeLinecap="round"/>
        <path d="M105 0 C 108 55, 100 100, 103 148 C 106 183, 110 208, 106 255" stroke="rgba(145,38,38,0.45)" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
        <path d="M152 0 C 155 40, 148 78, 151 115" stroke="rgba(160,46,46,0.40)" strokeWidth="3" fill="none" strokeLinecap="round"/>
        <path d="M28 0 C 25 30, 30 55, 26 85 C 22 110, 18 130, 22 155" stroke="rgba(150,40,40,0.35)" strokeWidth="2.5" fill="none" strokeLinecap="round"/>

        {/* Coral leaf clusters */}
        <ellipse cx="53"  cy="85"  rx="18" ry="36" fill="rgba(210,65,55,0.62)" transform="rotate(-14 53 85)"/>
        <ellipse cx="68"  cy="128" rx="14" ry="28" fill="rgba(195,55,50,0.56)" transform="rotate(9 68 128)"/>
        <ellipse cx="48"  cy="172" rx="16" ry="32" fill="rgba(220,70,60,0.52)" transform="rotate(-20 48 172)"/>
        <ellipse cx="64"  cy="218" rx="12" ry="22" fill="rgba(200,60,55,0.46)" transform="rotate(6 64 218)"/>
        <ellipse cx="55"  cy="255" rx="8"  ry="16" fill="rgba(210,65,55,0.38)" transform="rotate(-8 55 255)"/>

        <ellipse cx="103" cy="92"  rx="16" ry="30" fill="rgba(205,60,52,0.58)" transform="rotate(16 103 92)"/>
        <ellipse cx="110" cy="148" rx="13" ry="25" fill="rgba(215,68,58,0.52)" transform="rotate(-11 110 148)"/>
        <ellipse cx="100" cy="205" rx="15" ry="28" fill="rgba(195,55,48,0.46)" transform="rotate(22 100 205)"/>
        <ellipse cx="108" cy="258" rx="9"  ry="17" fill="rgba(200,60,50,0.38)"/>

        <ellipse cx="150" cy="70"  rx="15" ry="26" fill="rgba(210,62,54,0.52)" transform="rotate(-9 150 70)"/>
        <ellipse cx="158" cy="112" rx="12" ry="20" fill="rgba(200,58,50,0.45)" transform="rotate(13 158 112)"/>

        <ellipse cx="25"  cy="90"  rx="11" ry="20" fill="rgba(205,62,52,0.45)" transform="rotate(5 25 90)"/>
        <ellipse cx="20"  cy="140" rx="9"  ry="16" fill="rgba(195,57,48,0.38)" transform="rotate(-12 20 140)"/>

        {/* Organic leaf pads */}
        <path d="M75 52 C 92 46, 112 54, 98 66 C 84 78, 68 70, 75 52" fill="rgba(180,45,40,0.38)"/>
        <path d="M125 82 C 145 76, 168 86, 153 98 C 138 110, 120 100, 125 82" fill="rgba(190,50,45,0.34)"/>
      </svg>

      {/* ── TOP RIGHT: Hanging green foliage ── */}
      <svg className="absolute top-0 right-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 320" style={{ width: 420, height: 320 }}>
        {/* Stems */}
        <path d="M365 0 C 360 44, 370 86, 365 122 C 360 158, 355 185, 360 218" stroke="rgba(38,118,54,0.48)" strokeWidth="4" fill="none" strokeLinecap="round"/>
        <path d="M318 0 C 315 48, 323 92, 320 132 C 317 168, 313 192, 316 222" stroke="rgba(44,128,60,0.43)" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
        <path d="M272 0 C 270 40, 276 76, 274 110" stroke="rgba(50,138,65,0.38)" strokeWidth="3" fill="none" strokeLinecap="round"/>
        <path d="M395 0 C 398 28, 393 52, 396 78 C 399 102, 402 122, 398 148" stroke="rgba(40,120,56,0.34)" strokeWidth="2.5" fill="none" strokeLinecap="round"/>

        {/* Green leaf clusters */}
        <ellipse cx="367" cy="78"  rx="20" ry="38" fill="rgba(55,175,85,0.56)" transform="rotate(16 367 78)"/>
        <ellipse cx="354" cy="128" rx="16" ry="30" fill="rgba(50,160,78,0.50)" transform="rotate(-13 354 128)"/>
        <ellipse cx="368" cy="175" rx="18" ry="34" fill="rgba(60,180,90,0.47)" transform="rotate(9 368 175)"/>
        <ellipse cx="356" cy="220" rx="13" ry="24" fill="rgba(48,165,80,0.42)" transform="rotate(-6 356 220)"/>

        <ellipse cx="320" cy="88"  rx="18" ry="32" fill="rgba(52,170,82,0.52)" transform="rotate(-19 320 88)"/>
        <ellipse cx="313" cy="140" rx="15" ry="28" fill="rgba(58,175,88,0.46)" transform="rotate(16 313 140)"/>
        <ellipse cx="318" cy="192" rx="16" ry="29" fill="rgba(50,162,80,0.42)" transform="rotate(-9 318 192)"/>

        <ellipse cx="274" cy="70"  rx="16" ry="28" fill="rgba(55,172,84,0.48)" transform="rotate(11 274 70)"/>
        <ellipse cx="280" cy="108" rx="13" ry="22" fill="rgba(52,168,82,0.42)" transform="rotate(-16 280 108)"/>

        <ellipse cx="397" cy="82"  rx="11" ry="20" fill="rgba(58,178,88,0.44)" transform="rotate(6 397 82)"/>
        <ellipse cx="400" cy="135" rx="9"  ry="16" fill="rgba(50,165,80,0.37)" transform="rotate(-10 400 135)"/>

        {/* Bush cluster at top-right corner */}
        <ellipse cx="395" cy="28" rx="30" ry="20" fill="rgba(60,180,88,0.52)" transform="rotate(-12 395 28)"/>
        <ellipse cx="355" cy="18" rx="25" ry="16" fill="rgba(50,165,78,0.46)" transform="rotate(9 355 18)"/>
        <ellipse cx="378" cy="10" rx="20" ry="13" fill="rgba(65,185,92,0.42)"/>
        <ellipse cx="415" cy="14" rx="16" ry="11" fill="rgba(55,175,85,0.38)"/>
      </svg>

      {/* ── CENTER: Ornate pointed arch ── */}
      <svg
        className="absolute"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 540"
        style={{ width: 320, height: 540, right: '4%', bottom: 0 }}
      >
        {/* Dark arch interior */}
        <path d="M58 540 L58 230 Q58 72 160 52 Q262 72 262 230 L262 540 Z" fill="rgba(10,4,22,0.68)"/>
        {/* Outer arch frame */}
        <path d="M46 540 L46 234 Q46 60 160 42 Q274 60 274 234 L274 540" fill="none" stroke="rgba(85,140,140,0.38)" strokeWidth="8" strokeLinecap="round"/>
        {/* Inner arch line */}
        <path d="M72 540 L72 238 Q72 90 160 78 Q248 90 248 238 L248 540" fill="none" stroke="rgba(85,140,140,0.18)" strokeWidth="2.5"/>
        {/* Second inner detail */}
        <path d="M90 540 L90 244 Q90 112 160 102 Q230 112 230 244 L230 540" fill="none" stroke="rgba(85,140,140,0.12)" strokeWidth="1.5"/>

        {/* Finial spire */}
        <line x1="160" y1="42" x2="160" y2="0"  stroke="rgba(85,140,140,0.42)" strokeWidth="5" strokeLinecap="round"/>
        <ellipse cx="160" cy="0"  rx="13" ry="20" fill="rgba(78,132,132,0.52)"/>
        <ellipse cx="160" cy="0"  rx="6"  ry="8"  fill="rgba(105,162,162,0.65)"/>
        {/* Finial side arms */}
        <line x1="147" y1="14" x2="130" y2="6"  stroke="rgba(85,140,140,0.30)" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="173" y1="14" x2="190" y2="6"  stroke="rgba(85,140,140,0.30)" strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx="128" cy="5"  r="4" fill="rgba(80,132,132,0.45)"/>
        <circle cx="192" cy="5"  r="4" fill="rgba(80,132,132,0.45)"/>

        {/* Arch keystone circles */}
        <circle cx="48"  cy="234" r="10" fill="rgba(78,132,132,0.42)"/>
        <circle cx="272" cy="234" r="10" fill="rgba(78,132,132,0.42)"/>

        {/* Hanging chandelier inside arch */}
        <line x1="160" y1="80"  x2="160" y2="168" stroke="rgba(78,128,128,0.28)" strokeWidth="2"/>
        <path d="M144 168 Q160 196 176 168 L172 208 Q160 225 148 208 Z" fill="rgba(68,118,118,0.32)"/>
        <circle cx="160" cy="232" r="7" fill="rgba(85,138,138,0.38)"/>
        <circle cx="160" cy="232" r="3" fill="rgba(105,158,158,0.50)"/>
      </svg>

      {/* ── LEFT PILLAR ── */}
      <svg className="absolute" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70 480" style={{ width: 70, height: 480, right: 'calc(4% + 274px)', bottom: 0 }}>
        <rect x="15" y="55" width="40" height="425" fill="rgba(68,118,118,0.26)" rx="3"/>
        {/* Capital */}
        <ellipse cx="35" cy="55" rx="34" ry="11" fill="rgba(78,132,132,0.38)"/>
        <ellipse cx="35" cy="44" rx="24" ry="9"  fill="rgba(82,136,136,0.35)"/>
        <ellipse cx="35" cy="35" rx="16" ry="7"  fill="rgba(86,140,140,0.33)"/>
        {/* Lantern orb */}
        <circle cx="35" cy="26" r="9"  fill="rgba(200,155,35,0.72)"/>
        <circle cx="35" cy="26" r="16" fill="rgba(200,155,35,0.14)"/>
        <circle cx="35" cy="26" r="24" fill="rgba(200,155,35,0.06)"/>
        {/* Shaft fluting */}
        <line x1="25" y1="65" x2="25" y2="470" stroke="rgba(88,142,142,0.14)" strokeWidth="1"/>
        <line x1="35" y1="65" x2="35" y2="470" stroke="rgba(88,142,142,0.14)" strokeWidth="1"/>
        <line x1="45" y1="65" x2="45" y2="470" stroke="rgba(88,142,142,0.14)" strokeWidth="1"/>
      </svg>

      {/* ── RIGHT PILLAR ── */}
      <svg className="absolute" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70 480" style={{ width: 70, height: 480, right: 'calc(4% - 24px)', bottom: 0 }}>
        <rect x="15" y="55" width="40" height="425" fill="rgba(68,118,118,0.26)" rx="3"/>
        <ellipse cx="35" cy="55" rx="34" ry="11" fill="rgba(78,132,132,0.38)"/>
        <ellipse cx="35" cy="44" rx="24" ry="9"  fill="rgba(82,136,136,0.35)"/>
        <ellipse cx="35" cy="35" rx="16" ry="7"  fill="rgba(86,140,140,0.33)"/>
        <circle cx="35" cy="26" r="9"  fill="rgba(200,155,35,0.72)"/>
        <circle cx="35" cy="26" r="16" fill="rgba(200,155,35,0.14)"/>
        <circle cx="35" cy="26" r="24" fill="rgba(200,155,35,0.06)"/>
        <line x1="25" y1="65" x2="25" y2="470" stroke="rgba(88,142,142,0.14)" strokeWidth="1"/>
        <line x1="35" y1="65" x2="35" y2="470" stroke="rgba(88,142,142,0.14)" strokeWidth="1"/>
        <line x1="45" y1="65" x2="45" y2="470" stroke="rgba(88,142,142,0.14)" strokeWidth="1"/>
      </svg>


      {/* Vignette */}
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 90% 90% at 50% 50%, transparent 32%, rgba(10,3,20,0.55) 100%)' }}/>
    </div>
  )
}
