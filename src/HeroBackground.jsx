import { useEffect, useRef } from "react";

export default function HeroBackground({
  useVideo = true,
  videoUrl,
  animationType = "matrix",
  isDarkMode = true,
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

    const words = [
      "REACT", "DJANGO", "PYTHON", "DOCKER", "GCP",
      "JAVASCRIPT", "MYSQL", "GITHUB", "SWIFT", "WEBGL",
      "GLSL", "PLOTLY", "CICD", "NLP", "ML",
      "VECTOR", "RAYTRACE", "YOLO", "FULLSTACK",
      "TENSORFLOW", "KERAS", "THREEJS", "AGILE",
    ];

    // Per-column word state
    const colWord = new Array(columns).fill(null);
    const colWordPos = new Array(columns).fill(0);

    // Solid initial fill so there's no flash on first frame
    ctx.fillStyle = isDarkMode ? "#0d1117" : "#f5f5f7";
    ctx.fillRect(0, 0, width, height);

    const bgFill = isDarkMode ? "rgba(13,17,23,0.05)" : "rgba(245,245,247,0.45)";
    const charColor = isDarkMode ? "#67e8f9" : "rgba(100,116,139,0.25)";

    function draw() {
      ctx.fillStyle = bgFill;
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = charColor;
      ctx.font = "16px monospace";

      for (let i = 0; i < drops.length; i++) {
        // Draw next char from active word, or a random char
        let text;
        if (colWord[i] !== null && colWordPos[i] < colWord[i].length) {
          text = colWord[i][colWordPos[i]];
          colWordPos[i]++;
        } else {
          colWord[i] = null;
          text = chars.charAt(Math.floor(Math.random() * chars.length));
        }

        ctx.fillText(text, i * 20, drops[i] * 20);
        drops[i]++;

        if (drops[i] * 20 > height && Math.random() > 0.975) {
          drops[i] = 0;
          // ~35% of resets begin spelling a word
          if (Math.random() > 0.65) {
            colWord[i] = words[Math.floor(Math.random() * words.length)];
            colWordPos[i] = 0;
          }
        }
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
  }, [useVideo, animationType, isDarkMode]);

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
