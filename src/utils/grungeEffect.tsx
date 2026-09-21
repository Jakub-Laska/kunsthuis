export function GrungeEffect() {
  return (
    <>
      <svg width="0" height="0" aria-hidden="true">
        <defs>
          <filter
            id="grunge-effect"
            x="-5%"
            y="-5%"
            width="110%"
            height="110%"
            colorInterpolationFilters="sRGB"
          >
            {/* 1. ORIGINAL - GRAYSCALE */}
            <feColorMatrix
              in="SourceGraphic"
              type="saturate"
              values="0"
              result="gray"
            />

            {/* 2. VERY LIGHT CONTRAST */}
            <feComponentTransfer in="gray" result="contrast">
              <feFuncR type="linear" slope="1.15" intercept="-0.075" />
              <feFuncG type="linear" slope="1.15" intercept="-0.075" />
              <feFuncB type="linear" slope="1.15" intercept="-0.075" />
            </feComponentTransfer>

            {/* 3. GRAIN */}
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.65"
              numOctaves="6"
              seed="8"
              result="noise"
            />

            {/* 4. VERY LIGHT DISTORTION */}
            <feDisplacementMap
              in="contrast"
              in2="noise"
              scale="1.5"
              xChannelSelector="R"
              yChannelSelector="G"
              result="distorted"
            />

            {/* 5. BLACK - CORNFLOWER BLUE */}
            <feComponentTransfer in="distorted" result="duotone">
              <feFuncR type="table" tableValues="0 0.392 0.392" />
              <feFuncG type="table" tableValues="0 0.584 0.584" />
              <feFuncB type="table" tableValues="0 0.929 0.929" />
            </feComponentTransfer>

            {/* 6. MIX DUOTONE WITH ORIGINAL */}
          </filter>
        </defs>
      </svg>

      <style>{`
        .grunge-effect {
          filter: url("#grunge-effect");
        }
      `}</style>
    </>
  );
}
