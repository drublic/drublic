import React from "react";

interface CardProps {
  number?: string | number;
  title?: string;
  subtitle?: string;
  description?: string;
  items?: string[];
  icon?: string | React.ReactNode;
  variant?: "default" | "step" | "metric" | "plan";
  className?: string;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  number,
  title,
  subtitle,
  description,
  items,
  icon,
  variant = "default",
  className = "",
  children,
}) => {
  const baseClasses = "card";
  const variantClasses = {
    default: "card--default",
    step: "card--step",
    metric: "card--metric",
    plan: "card--plan",
  };

  const cardClasses =
    `${baseClasses} ${variantClasses[variant]} ${className}`.trim();

  return (
    <div className={cardClasses}>
      {/* Header with number and line (for default variant) */}
      {variant === "default" && (number || title) && !icon && (
        <div className="card-header">
          {number && <span className="card-number">{number}</span>}
          <div className="card-line"></div>
        </div>
      )}

      {variant === "default" && subtitle && (
        <>
          {!title && !number && (
            <div className="card-header">
              <div className="card-line"></div>
            </div>
          )}
          <p className="card-subtitle">{subtitle}</p>
        </>
      )}

      {/* Icon and title (for metric variant) */}
      {icon && title && (
        <>
          <div className="card-header">
            {icon && <span className="card-icon">{icon}</span>}
            {title && <h3 className="card-title">{title}</h3>}
            <div className="card-line"></div>
          </div>
        </>
      )}

      {/* Just number (for step variant) */}
      {variant === "step" && number && (
        <div className="card-number">{number}</div>
      )}

      {/* Just title (for plan variant) */}
      {variant === "plan" && title && <h3 className="card-title">{title}</h3>}

      {/* Title for default variant */}
      {variant === "default" && title && !icon && (
        <h3 className="card-title">{title}</h3>
      )}

      {/* Description */}
      {variant === "default" && description && (
        <p className="card-description">{description}</p>
      )}

      {/* Items list */}
      {items && items.length > 0 && (
        <ul className="card-list">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}

      {/* Content for step variant */}
      {variant === "step" && description && (
        <span className="card-text">{description}</span>
      )}

      {/* Content for plan variant */}
      {variant === "plan" && description && (
        <p className="card-description">{description}</p>
      )}

      {children && <div className="card-content">{children}</div>}
    </div>
  );
};

export default Card;
