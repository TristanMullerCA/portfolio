'use client'

import Image from "next/image";
import "./page.css"
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.addEventListener('scroll', function () {
      const scrollValue = window.scrollY;
      const bgImage = document.querySelector<HTMLImageElement>('.background-image');

      if (bgImage) {
        // On déplace l'image plus lentement que le reste (ratio 0.5)
        // Cela crée l'effet de profondeur
        bgImage.style.transform = `translateY(${scrollValue * 0.5}px)`;
      }
    });
  })

  return (
    <div>
      <header className="hero-section">
        <div className="overlay"></div>
        <div className="snow"></div>
        <div className="background-image"></div>

        <div className="hero-content">
          <div className="logo-area">
            <h1 className="hero-name">TRISTAN MULLER</h1>
          </div>

          <hr />

          <h2 className="main-title">FULLSTACK DEVELOPER</h2>

          <hr />
          <br />

          <p className="description">
            Bilingual Full-Stack Developer | M.Sc. in Computer Science<br />
            Specializing in <strong>React, Node.js & 3D Visualization</strong>.<br />
            <span className="location-tag">Relocating to Vancouver (Spring 2026) – Valid Work Permit (PVT) 🇨🇦</span>
          </p>

          <div className="scroll-indicator">
            <div className="arrow">↓</div>
          </div>
        </div>
      </header>

      <main>
      </main>
    </div>
  );
}
