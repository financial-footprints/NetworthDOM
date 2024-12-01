import React from "react";

export const SimpleLoader: React.FC = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="animate-spin h-5 w-5 mr-2 border-2 border-white border-t-transparent rounded-full" />
    </div>
  );
};
