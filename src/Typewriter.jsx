import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Typography, Box } from "@mui/material";

export default function Typewriter({ text, speed = 100 }) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1)); // slice up to i+1 ensures all chars show
      i++;
      if (i === text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <Typography variant="h2" gutterBottom>
      {displayed}
      <Box
        component="span"
        sx={{
          borderRight: "2px solid white",
          ml: 0.5,
          animation: "blink 1s step-end infinite",
          "@keyframes blink": {
            "50%": { borderColor: "transparent" },
          },
        }}
      />
    </Typography>
  );
}
