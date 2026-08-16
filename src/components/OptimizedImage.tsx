import React, { useState } from "react";

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackText?: string;
  containerClassName?: string;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className,
  fallbackText = "Preview Coming Soon",
  containerClassName = "",
  ...props
}) => {
  const [hasError, setHasError] = useState(!src);
  const [isLoading, setIsLoading] = useState(true);

  const handleError = () => {
    setHasError(true);
    setIsLoading(false);
    if (import.meta.env.DEV) {
      console.error(`[OptimizedImage] Failed to load image asset: ${src}`);
    }
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  if (hasError) {
    return (
      <div
        className={`cert-fallback-box flex flex-col items-center justify-center bg-slate-900/40 backdrop-blur-sm border border-white/5 rounded-lg text-center p-4 min-h-[180px] w-full h-full aspect-4/3 selection:bg-none select-none transition-all duration-300 ${containerClassName}`}
      >
        {/* Subtle Decorative SVG Icon */}
        <svg
          className="w-8 h-8 text-slate-500 mb-2 opacity-70"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        <span className="text-xs font-semibold text-slate-400 tracking-wider uppercase opacity-90 font-mono">
          {alt || "Certificate Preview"}
        </span>
        <span className="text-[10px] text-slate-500 mt-1 font-mono">
          {fallbackText}
        </span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden w-full h-full ${containerClassName}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-slate-800/20 animate-pulse backdrop-blur-sm" />
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} ${isLoading ? "opacity-0" : "opacity-100"} transition-opacity duration-300`}
        onError={handleError}
        onLoad={handleLoad}
        {...props}
      />
    </div>
  );
};
