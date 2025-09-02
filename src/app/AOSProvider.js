"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSProvider({ children }) {
  useEffect(() => {
    AOS.init({
      duration: 1000, // tiempo de animación
      once: false,     // si quieres que se ejecute solo una vez
    });
  }, []);

  return <>{children}</>;
}
