export default function NordixLogo({ className = "", size = "large" }: { className?: string; size?: "small" | "large" }) {
  const isSmall = size === "small";

  return (
    <div className={`flex flex-col items-center ${className}`}>
      {/* House Icon */}
      <svg
        width={isSmall ? "80" : "240"}
        height={isSmall ? "50" : "140"}
        viewBox="0 0 240 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Main roof structure */}
        <path d="M120 20L30 75L30 140L140 140L140 75L120 20Z" fill="#2B2D2E"/>

        {/* Right side bronze panel */}
        <path d="M140 75L140 140L210 140L210 75L140 75Z" fill="#C49A6C"/>

        {/* Roof top */}
        <path d="M120 20L210 75L230 65L120 5L10 65L30 75L120 20Z" fill="#2B2D2E"/>

        {/* Windows - top row */}
        <rect x="75" y="85" width="20" height="20" fill="white" rx="1"/>
        <rect x="105" y="85" width="20" height="20" fill="white" rx="1"/>

        {/* Window dividers */}
        <line x1="85" y1="85" x2="85" y2="105" stroke="#2B2D2E" strokeWidth="2.5"/>
        <line x1="75" y1="95" x2="95" y2="95" stroke="#2B2D2E" strokeWidth="2.5"/>
        <line x1="115" y1="85" x2="115" y2="105" stroke="#2B2D2E" strokeWidth="2.5"/>
        <line x1="105" y1="95" x2="125" y2="95" stroke="#2B2D2E" strokeWidth="2.5"/>

        {/* Chimney */}
        <rect x="180" y="45" width="18" height="30" fill="#2B2D2E"/>
      </svg>

      {/* NORDIX Text */}
      <div className={`flex items-baseline gap-0 ${isSmall ? 'mt-1' : 'mt-6'}`}>
        <span
          className={isSmall ? "text-xl" : "text-6xl md:text-7xl lg:text-8xl"}
          style={{
            fontFamily: 'system-ui, -apple-system, sans-serif',
            fontWeight: 900,
            color: '#2B2D2E',
            letterSpacing: '0.08em'
          }}>
          NORDI
        </span>
        <span
          className={isSmall ? "text-xl" : "text-6xl md:text-7xl lg:text-8xl"}
          style={{
            fontFamily: 'system-ui, -apple-system, sans-serif',
            fontWeight: 900,
            color: '#C49A6C',
            letterSpacing: '0.08em'
          }}>
          X
        </span>
      </div>

      {/* BYG Text */}
      <div className={isSmall ? "mt-0" : "mt-2"}>
        <span
          className={isSmall ? "text-sm" : "text-3xl md:text-4xl lg:text-5xl"}
          style={{
            fontFamily: 'system-ui, -apple-system, sans-serif',
            fontWeight: 700,
            color: '#C49A6C',
            letterSpacing: '0.35em'
          }}>
          BYG
        </span>
      </div>

      {/* Tagline */}
      {!isSmall && (
        <div className="mt-4">
          <span
            className="text-xs md:text-sm lg:text-base"
            style={{
              fontFamily: 'system-ui, -apple-system, sans-serif',
              fontWeight: 500,
              color: '#2B2D2E',
              letterSpacing: '0.25em'
            }}>
            KVALITET I HVER DETALJE
          </span>
        </div>
      )}
    </div>
  );
}
