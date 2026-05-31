import React from "react";
import "./FootprintsBackground.css";

function FootprintsBackground() {
  return (
    <div className="footprints-background">
      {Array.from({ length: 30 }).map((_, i) => (
        <div key={i} className="footprint">🐾</div>
      ))}
    </div>
  );
}

export default FootprintsBackground;
