interface GradientDef {
  id: string;
  from: string;
  to: string;
}

interface WaveDividerProps {
  fillColor?: string;
  gradient?: GradientDef;
  className?: string;
  flip?: boolean;
}

const WaveDivider = ({
  fillColor = "hsl(var(--background))",
  gradient,
  className = "",
  flip = false,
}: WaveDividerProps) => (
  <div className={`w-full overflow-hidden leading-[0] -mb-px ${flip ? "rotate-180" : ""} ${className}`}>
    <svg
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      className="w-full h-[60px] md:h-[80px] block"
    >
      {gradient && (
        <defs>
          <linearGradient id={gradient.id} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={gradient.from} />
            <stop offset="100%" stopColor={gradient.to} />
          </linearGradient>
        </defs>
      )}
      <path
        d="M0,60 C200,120 400,0 600,60 C800,120 1000,0 1200,60 L1200,120 L0,120 Z"
        fill={gradient ? `url(#${gradient.id})` : fillColor}
      />
    </svg>
  </div>
);

export default WaveDivider;
