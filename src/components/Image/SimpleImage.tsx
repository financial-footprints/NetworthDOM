import React, { useState } from "react";

export const SimpleImage: React.FC<{
  src: string;
  alt: string;
  onError: React.ReactNode;
  isLazy?: boolean;
  width?: number;
  height?: number;
}> = ({ src, alt, onError, isLazy = false, width = 12, height = 12 }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`w-${width} h-${height}`}>
      {isLoading && !hasError && (
        <div className="w-12 h-12 bg-gray-100 rounded-md animate-pulse flex items-center justify-center">
          <div className="w-12 h-12 bg-gray-200 rounded-md animate-pulse" />
        </div>
      )}
      {hasError && (
        <div className="w-12 h-12 flex items-center justify-center">
          {onError}
        </div>
      )}
      <img
        src={src}
        alt={alt}
        loading={isLazy ? "eager" : "lazy"}
        className={`object-contain w-12 h-12 rounded-md ${
          isLoading || hasError ? "hidden" : ""
        }`}
        onLoad={() => setIsLoading(false)}
        onError={(e) => {
          const imgElement = e.target as HTMLImageElement;
          imgElement.style.display = "none";
          setIsLoading(false);
          setHasError(true);
        }}
      />
    </div>
  );
};
