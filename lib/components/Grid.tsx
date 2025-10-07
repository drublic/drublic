import React from "react";

interface GridProps {
  children: React.ReactNode;
  variant?: "auto" | "2" | "4" | "steps" | "metrics" | "plan";
  gap?: string;
  className?: string;
}

const Grid: React.FC<GridProps> = ({
  children,
  variant = "auto",
  gap = "1rem",
  className = "",
}) => {
  const gridClasses = `grid grid--${variant} ${className}`.trim();
  
  const gridStyle: React.CSSProperties = {
    gap,
  };

  return (
    <div className={gridClasses} style={gridStyle}>
      {children}
    </div>
  );
};

export default Grid;
