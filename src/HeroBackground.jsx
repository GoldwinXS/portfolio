import React, { useEffect, useRef } from "react";

export default function HeroBackground({
  useVideo = true,
  videoUrl,
  animationType = "matrix",
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (useVideo || animationType !== "matrix") return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const columns = Math.floor(width / 20);
    const drops = Array(columns).fill(1);
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    function draw() {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = "#0F0";
      ctx.font = "16px monospace";

      for (let i = 0; i < drops.length; i++) {
        const text = chars.charAt(Math.floor(Math.random() * chars.length));
        ctx.fillText(text, i * 20, drops[i] * 20);
        drops[i]++;
        if (drops[i] * 20 > height && Math.random() > 0.975) drops[i] = 0;
      }
    }

    const interval = setInterval(draw, 50);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, [useVideo, animationType]);

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        overflow: "hidden",
      }}
    >
      {useVideo ? (
        <iframe
          src={videoUrl}
          title="Hero Background"
          allow="autoplay; fullscreen"
          allowFullScreen
          style={{
            width: "100%",
            height: "100%",
            pointerEvents: "none",
            objectFit: "cover",
            border: 0,
          }}
        />
      ) : animationType === "matrix" ? (
        <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />
      ) : (
        <div
          style={{
            width: "100%",
            height: "100%",
            background: "#111827", // fallback solid
          }}
        />
      )}
    </div>
  );
}
