interface WaveDividerProps {
  fillColor?: string;
  className?: string;
  flip?: boolean;
}

const WaveDivider = ({ fillColor = "hsl(var(--background))", className = "", flip = false }: WaveDividerProps) => (
  <div className={`w-full overflow-hidden leading-[0] -mb-px ${flip ? "rotate-180" : ""} ${className}`}>
    <svg
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      className="w-full h-[60px] md:h-[80px] block"
    >
      <path
        d="M0,60 C200,120 400,0 600,60 C800,120 1000,0 1200,60 L1200,120 L0,120 Z"
        fill={fillColor}
      />
    </svg>
  </div>
);

export default WaveDivider;
