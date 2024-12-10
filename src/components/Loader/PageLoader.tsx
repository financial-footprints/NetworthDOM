import { FC } from "react";

export const PageLoader: FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-r from-gray-100 to-gray-200 z-10">
      <svg className="h-32 w-32" viewBox="0 0 100 100">
        {/* Outer rotating ring */}
        <circle
          className="animate-[spin_3s_linear_infinite]"
          cx="50"
          cy="50"
          r="45"
          stroke="black"
          strokeWidth="2"
          fill="none"
          strokeDasharray="70.5 23.5"
        />

        {/* Inner pulsing circle */}
        <circle
          className="animate-[ping_2s_ease-in-out_infinite]"
          cx="50"
          cy="50"
          r="30"
          fill="none"
          stroke="gray"
          strokeWidth="1"
          opacity="0.5"
        />

        {/* Central static circle */}
        <circle cx="50" cy="50" r="20" fill="black" opacity="0.8" />

        {/* Decorative lines */}
        {[0, 60, 120, 180, 240, 300].map((angle) => (
          <line
            key={angle}
            x1="50"
            y1="50"
            x2={50 + 35 * Math.cos((angle * Math.PI) / 180)}
            y2={50 + 35 * Math.sin((angle * Math.PI) / 180)}
            stroke="gray"
            strokeWidth="1"
            opacity="0.3"
          />
        ))}
      </svg>
    </div>
  );
};
