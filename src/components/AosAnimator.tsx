"use client";

import React, { ReactNode } from "react";

interface AosAnimatorProps {
  children: ReactNode;
  animation?: string;
  duration?: number;
  delay?: number;
  offset?: number;
  easing?: string;
  once?: boolean;
  mirror?: boolean;
  anchorPlacement?: string;
  className?: string;
}

const AosAnimator: React.FC<AosAnimatorProps> = ({
  children,
  animation = "fade-up",
  duration,
  delay,
  offset,
  easing,
  once,
  mirror,
  anchorPlacement,
  className = "",
}) => {
  return (
    <div
      data-aos={animation}
      data-aos-duration={duration}
      data-aos-delay={delay}
      data-aos-offset={offset}
      data-aos-easing={easing}
      data-aos-once={once}
      data-aos-mirror={mirror}
      data-aos-anchor-placement={anchorPlacement}
      className={className}
    >
      {children}
    </div>
  );
};

export default AosAnimator;
