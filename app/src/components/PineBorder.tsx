const PineBorder = () => {
  return (
    <div className="w-full overflow-hidden bg-[#f5f5dc]">
      <svg viewBox="0 0 1200 40" preserveAspectRatio="none" className="w-full h-8 md:h-10">
        {Array.from({ length: 40 }).map((_, i) => {
          const x = i * 30;
          return (
            <g key={i} transform={`translate(${x}, 0)`}>
              <rect x="12" y="30" width="6" height="10" fill="#4a7c59" />
              <path d="M15 0 L5 15 L25 15 Z" fill="#4a7c59" />
              <path d="M15 8 L3 22 L27 22 Z" fill="#4a7c59" />
              <path d="M15 16 L1 29 L29 29 Z" fill="#4a7c59" />
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export default PineBorder;
