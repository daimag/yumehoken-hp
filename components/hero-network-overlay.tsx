/**
 * ヒーロー画像の上に重ねる、白線ネットワーク装飾SVG。
 *
 * - ノード（ドット）と接続線で「つながり」を表現
 * - 控えめなパルス／フロート アニメーションあり
 * - aria-hidden（純粋装飾）
 */
export default function HeroNetworkOverlay() {
  // ノード（ドット）の座標とサイズ
  const nodes = [
    { x: 8, y: 18, r: 3, delay: 0 },
    { x: 22, y: 32, r: 4, delay: 1.2 },
    { x: 16, y: 58, r: 2.5, delay: 2.4 },
    { x: 35, y: 12, r: 2, delay: 0.8 },
    { x: 48, y: 28, r: 3.5, delay: 1.8 },
    { x: 62, y: 18, r: 2.5, delay: 3.0 },
    { x: 78, y: 38, r: 4, delay: 0.4 },
    { x: 88, y: 22, r: 2, delay: 2.0 },
    { x: 92, y: 62, r: 3, delay: 1.5 },
    { x: 70, y: 70, r: 2.5, delay: 0.6 },
    { x: 42, y: 75, r: 3.5, delay: 2.8 },
    { x: 28, y: 85, r: 2, delay: 1.0 },
    { x: 58, y: 88, r: 3, delay: 2.2 },
    { x: 82, y: 82, r: 2.5, delay: 0.2 },
  ]

  // 接続線（ノードのインデックスのペア）
  const connections: [number, number][] = [
    [0, 1],
    [1, 2],
    [1, 3],
    [3, 4],
    [4, 5],
    [4, 6],
    [5, 7],
    [6, 7],
    [6, 8],
    [6, 9],
    [9, 10],
    [10, 11],
    [10, 12],
    [12, 13],
    [8, 13],
    [2, 11],
  ]

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none hero-network-overlay"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        {/* ドットの放射状グラデーション */}
        <radialGradient id="dot-gradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.95)" />
          <stop offset="60%" stopColor="rgba(255,255,255,0.5)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </radialGradient>
      </defs>

      {/* 接続線 */}
      <g className="hero-network-lines">
        {connections.map(([a, b], i) => {
          const n1 = nodes[a]
          const n2 = nodes[b]
          return (
            <line
              key={i}
              x1={n1.x}
              y1={n1.y}
              x2={n2.x}
              y2={n2.y}
              stroke="rgba(255,255,255,0.35)"
              strokeWidth="0.15"
              vectorEffect="non-scaling-stroke"
            />
          )
        })}
      </g>

      {/* ドット（パルスアニメ付き） */}
      <g className="hero-network-dots">
        {nodes.map((n, i) => (
          <g key={i} style={{ animationDelay: `${n.delay}s` }} className="hero-dot">
            {/* グロー */}
            <circle
              cx={n.x}
              cy={n.y}
              r={n.r * 2.4}
              fill="url(#dot-gradient)"
              opacity="0.4"
            />
            {/* 中心のドット */}
            <circle
              cx={n.x}
              cy={n.y}
              r={n.r * 0.4}
              fill="rgba(255,255,255,0.95)"
            />
          </g>
        ))}
      </g>
    </svg>
  )
}
