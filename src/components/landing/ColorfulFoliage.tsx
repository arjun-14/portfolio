// Colorful chapter — vibrant foliage, purple architecture, golden orbs
// Inspired by GRIS Chapter 4: deep purple bg, red+green coral/plant life, gold accents

export function ColorfulFoliage() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Background glow blobs */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 1440 900"
        style={{ filter: 'blur(55px)' }}
      >
        <ellipse cx="200" cy="200" rx="350" ry="200" fill="rgba(180,40,40,0.18)" />
        <ellipse cx="1200" cy="150" rx="300" ry="180" fill="rgba(40,160,80,0.16)" />
        <ellipse cx="720" cy="800" rx="500" ry="200" fill="rgba(160,30,160,0.15)" />
        <ellipse cx="100" cy="700" rx="250" ry="180" fill="rgba(200,60,20,0.14)" />
        <ellipse cx="1350" cy="700" rx="280" ry="180" fill="rgba(40,140,70,0.14)" />
      </svg>

      {/* Top foliage — left red cluster */}
      <svg
        className="absolute top-0 left-0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 300"
        style={{ width: 420, height: 260 }}
      >
        {/* Red/coral organic blobs */}
        <ellipse cx="80" cy="60" rx="70" ry="40" fill="rgba(200,50,40,0.55)" transform="rotate(-15 80 60)" />
        <ellipse cx="150" cy="40" rx="55" ry="35" fill="rgba(220,70,50,0.45)" transform="rotate(10 150 40)" />
        <ellipse cx="60" cy="110" rx="50" ry="30" fill="rgba(180,40,30,0.50)" transform="rotate(-5 60 110)" />
        <ellipse cx="200" cy="80" rx="65" ry="35" fill="rgba(200,50,40,0.40)" transform="rotate(20 200 80)" />
        {/* Stems */}
        <path d="M100 140 C 110 100, 120 70, 130 50" fill="none" stroke="rgba(80,30,20,0.5)" strokeWidth="4" strokeLinecap="round" />
        <path d="M80 160 C 90 120, 95 90, 80 60" fill="none" stroke="rgba(80,30,20,0.4)" strokeWidth="3" strokeLinecap="round" />
      </svg>

      {/* Top foliage — right green cluster */}
      <svg
        className="absolute top-0 right-0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 300"
        style={{ width: 420, height: 260 }}
      >
        <ellipse cx="420" cy="50" rx="65" ry="38" fill="rgba(50,180,80,0.50)" transform="rotate(15 420 50)" />
        <ellipse cx="350" cy="40" rx="55" ry="32" fill="rgba(70,200,100,0.42)" transform="rotate(-10 350 40)" />
        <ellipse cx="440" cy="100" rx="50" ry="30" fill="rgba(40,160,70,0.48)" transform="rotate(5 440 100)" />
        <ellipse cx="300" cy="70" rx="60" ry="33" fill="rgba(60,190,90,0.38)" transform="rotate(-20 300 70)" />
        <path d="M390 140 C 400 105, 410 75, 420 50" fill="none" stroke="rgba(20,60,30,0.5)" strokeWidth="4" strokeLinecap="round" />
        <path d="M350 160 C 360 120, 355 85, 360 60" fill="none" stroke="rgba(20,60,30,0.4)" strokeWidth="3" strokeLinecap="round" />
      </svg>

      {/* Bottom foliage clusters */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 280"
        preserveAspectRatio="none"
      >
        {/* Left bottom red */}
        <ellipse cx="100" cy="250" rx="90" ry="50" fill="rgba(200,50,40,0.50)" />
        <ellipse cx="180" cy="230" rx="70" ry="42" fill="rgba(220,70,50,0.42)" transform="rotate(-10 180 230)" />
        {/* Mid bottom mix */}
        <ellipse cx="600" cy="260" rx="80" ry="45" fill="rgba(50,170,80,0.45)" />
        <ellipse cx="680" cy="245" rx="65" ry="40" fill="rgba(200,50,40,0.40)" transform="rotate(8 680 245)" />
        {/* Right bottom green */}
        <ellipse cx="1280" cy="250" rx="85" ry="48" fill="rgba(50,180,80,0.48)" />
        <ellipse cx="1360" cy="235" rx="70" ry="40" fill="rgba(70,200,100,0.38)" transform="rotate(-12 1360 235)" />

        {/* Ground silhouette */}
        <path
          d="M0 270 C 150 255, 350 248, 550 265 C 750 282, 950 258, 1150 268 C 1300 275, 1400 268, 1440 265 L1440 280 L0 280 Z"
          fill="rgba(15,5,25,0.5)"
        />
      </svg>

      {/* Golden orb accents */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 900"
      >
        {/* Large orbs */}
        <circle cx="320" cy="420" r="12" fill="rgba(200,160,40,0.70)" />
        <circle cx="320" cy="420" r="20" fill="rgba(200,160,40,0.15)" />
        <circle cx="1100" cy="380" r="10" fill="rgba(200,160,40,0.65)" />
        <circle cx="1100" cy="380" r="18" fill="rgba(200,160,40,0.12)" />
        <circle cx="720" cy="300" r="8" fill="rgba(220,180,60,0.60)" />
        <circle cx="720" cy="300" r="15" fill="rgba(220,180,60,0.12)" />
        {/* Small scattered orbs */}
        <circle cx="500" cy="500" r="5" fill="rgba(200,160,40,0.50)" />
        <circle cx="900" cy="450" r="6" fill="rgba(200,160,40,0.45)" />
        <circle cx="200" cy="350" r="4" fill="rgba(220,180,60,0.40)" />
        <circle cx="1250" cy="500" r="5" fill="rgba(200,160,40,0.45)" />
      </svg>
    </div>
  )
}
