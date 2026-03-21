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
        style={{ filter: 'blur(50px)' }}
      >
        <ellipse cx="300" cy="200" rx="450" ry="220" fill="rgba(210,160,150,0.25)" />
        <ellipse cx="1100" cy="400" rx="400" ry="250" fill="rgba(140,190,185,0.20)" />
        <ellipse cx="700" cy="700" rx="500" ry="180" fill="rgba(220,180,170,0.15)" />
      </svg>

      {/* Flowing branch paths across the scene */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 1440 900"
      >
        {/* Main thick branch — top left sweeping right */}
        <path
          d="M-20 180 C 100 200, 250 240, 400 220 C 550 200, 650 150, 800 170 C 950 190, 1050 240, 1200 210 C 1320 188, 1420 160, 1460 155"
          fill="none"
          stroke="rgba(120,160,155,0.35)"
          strokeWidth="18"
          strokeLinecap="round"
        />
        {/* Branch drooping down */}
        <path
          d="M400 220 C 420 260, 430 310, 410 360 C 390 410, 370 440, 380 490"
          fill="none"
          stroke="rgba(120,160,155,0.25)"
          strokeWidth="10"
          strokeLinecap="round"
        />
        {/* Secondary branch — middle right */}
        <path
          d="M800 170 C 830 210, 850 260, 840 310"
          fill="none"
          stroke="rgba(180,120,115,0.30)"
          strokeWidth="8"
          strokeLinecap="round"
        />
        {/* Thin vine sweeping from right */}
        <path
          d="M1460 350 C 1350 330, 1200 300, 1050 340 C 900 380, 800 420, 650 400 C 500 380, 350 350, 200 390"
          fill="none"
          stroke="rgba(160,200,190,0.22)"
          strokeWidth="6"
          strokeLinecap="round"
        />

        {/* Leaf clusters — small ellipses scattered near branches */}
        {[
          [300, 195], [500, 205], [700, 160], [900, 185], [1100, 200],
          [380, 350], [820, 280], [1000, 330],
        ].map(([cx, cy], i) => (
          <ellipse
            key={i}
            cx={cx}
            cy={cy}
            rx={12 + (i % 3) * 5}
            ry={6 + (i % 2) * 3}
            fill={i % 2 === 0 ? 'rgba(130,175,165,0.4)' : 'rgba(210,150,140,0.35)'}
            transform={`rotate(${-20 + i * 15} ${cx} ${cy})`}
          />
        ))}

        {/* Dangling small berries/buds */}
        {[[430, 490], [810, 320], [1050, 350]].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r={5} fill="rgba(200,80,80,0.55)" />
        ))}
      </svg>
    </div>
  )
}
