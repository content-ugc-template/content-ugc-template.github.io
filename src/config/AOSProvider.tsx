"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function AOSProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 800,
      easing: "ease-out-quad",
      mirror: false,
    });
  }, []);

  return <>{children}</>;
}
