export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden" style={{ minHeight: "clamp(500px, 48.89vw, 704px)" }}>
      {/* SVG gradient background - exact Figma paths */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1440 704" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1289.54 446.5C1324.03 446.5 1405.79 445.053 1439 446.5V0H0V700.621C42.0688 702.804 85.7979 704 131.121 704C651.054 704 840.511 446.5 1289.54 446.5Z"
          fill="url(#heroGrad0)"
        />
        <path d="M1440 0V652.537C1440 652.537 1262 519.631 1034 519.631C806 519.631 685.5 704 421.5 704C157.5 704 0 546.612 0 546.612V0H1440Z" fill="url(#heroGrad1)" />
        <mask id="heroMask" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="1440" height="704">
          <path d="M1440 0V652.537C1440 652.537 1262 519.631 1034 519.631C806 519.631 685.5 704 421.5 704C157.5 704 0 546.612 0 546.612V0H1440Z" fill="white" />
        </mask>
        <g mask="url(#heroMask)">
          <circle opacity="0.05" cx="894" cy="634" r="262" fill="white" />
          <circle opacity="0.02" cx="256" cy="-105" r="262" fill="white" />
        </g>
        <defs>
          <linearGradient id="heroGrad0" x1="-666.432" y1="437.828" x2="-52.7159" y2="1589.72" gradientUnits="userSpaceOnUse">
            <stop stopColor="#52B4DA" />
            <stop offset="1" stopColor="#1E3E85" />
          </linearGradient>
          <linearGradient id="heroGrad1" x1="-644.712" y1="457.365" x2="-18.1383" y2="1596.48" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1E3E85" />
            <stop offset="1" stopColor="#336DA6" />
          </linearGradient>
        </defs>
      </svg>

      {/* Content overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-6 md:px-12 pt-36 pb-32 md:pt-44 md:pb-40 lg:pt-52 lg:pb-48">
        <h1 className="text-white font-bold leading-tight mb-6 max-w-3xl" style={{ fontSize: "clamp(28px, 3.68vw, 53px)" }}>
          RemoteRecruit&apos;s Difference
        </h1>
        <p className="text-white font-medium leading-[1.6] max-w-3xl" style={{ fontSize: "clamp(15px, 1.39vw, 20px)", opacity: 0.8029 }}>
          RemoteRecruit is connecting the world with an easy-to-use platform that lets full-time, part-time, and freelance workers showcase their talents to businesses that need them. With no
          paywalls, no fees, and no barriers, there&apos;s nothing but you, your talents, and the next step in your career.
        </p>
      </div>
    </section>
  );
}
