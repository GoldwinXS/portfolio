import { useState, useEffect, useRef } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  IconButton,
  Chip,
  CircularProgress,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function ProjectCard({ project }) {
  const [slide, setSlide] = useState(0);

  const isCarousel = project.images && project.images.length > 1;
  const interval = useRef(2500 + Math.random() * 2000);

  const [reachable, setReachable] = useState(null);
  useEffect(() => {
    if (!project.liveUrl) return;
    fetch(project.liveUrl, { mode: "no-cors" })
      .then(() => setReachable(true))
      .catch(() => setReachable(false));
  }, [project.liveUrl]);

  useEffect(() => {
    if (!isCarousel) return;
    const id = setInterval(() => {
      setSlide((prev) => (prev + 1) % project.images.length);
    }, interval.current);
    return () => clearInterval(id);
  }, [isCarousel, project.images?.length]);

  const nextSlide = () =>
    setSlide((prev) => (prev + 1) % project.images.length);
  const prevSlide = () =>
    setSlide(
      (prev) => (prev - 1 + project.images.length) % project.images.length
    );

  return (
    <Card
      elevation={3}
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        borderTop: "3px solid",
        borderTopColor: "secondary.main",
        transition: "box-shadow 0.2s ease",
        "&:hover": { boxShadow: 8 },
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "200px",
          overflow: "hidden",
          position: "relative",
          flexShrink: 0,
        }}
      >
        {/* Video */}
        {project.video && (
          <iframe
            src={project.video}
            title={project.title}
            allow="autoplay; fullscreen"
            allowFullScreen
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              border: "none",
            }}
          />
        )}

        {/* Carousel with fade */}
        {!project.video && isCarousel && (
          <>
            {project.images.map((img, i) => (
              <Box
                key={img}
                sx={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage: `url(${img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  opacity: i === slide ? 1 : 0,
                  transition: "opacity 0.9s ease",
                }}
              />
            ))}
            <IconButton
              onClick={prevSlide}
              sx={{
                position: "absolute",
                top: "50%",
                left: 4,
                transform: "translateY(-50%)",
                bgcolor: "rgba(0,0,0,0.3)",
                color: "white",
                zIndex: 1,
              }}
            >
              <ArrowBackIosIcon fontSize="small" />
            </IconButton>
            <IconButton
              onClick={nextSlide}
              sx={{
                position: "absolute",
                top: "50%",
                right: 4,
                transform: "translateY(-50%)",
                bgcolor: "rgba(0,0,0,0.3)",
                color: "white",
                zIndex: 1,
              }}
            >
              <ArrowForwardIosIcon fontSize="small" />
            </IconButton>
          </>
        )}

        {/* Single image */}
        {!project.video && !isCarousel && project.img && (
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              backgroundImage: `url(${project.img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        )}
      </Box>

      {/* Content */}
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" gutterBottom>
          {project.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {project.description}
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75 }}>
          {project.tech.split(",").map((t) => (
            <Chip
              key={t}
              label={t.trim()}
              size="small"
              color="secondary"
              variant="outlined"
              sx={{ borderRadius: 1, fontSize: "0.7rem", height: 22 }}
            />
          ))}
        </Box>
      </CardContent>

      <Box sx={{ p: 2, pt: 0, display: "flex", gap: 1, flexWrap: "wrap", alignItems: "center" }}>
        {project.link && (
          <Button
            size="small"
            variant="contained"
            color="secondary"
            href={project.link}
            target="_blank"
            endIcon={<OpenInNewIcon fontSize="inherit" />}
            sx={{ borderRadius: 2, textTransform: "none", fontWeight: 600 }}
          >
            Live Demo
          </Button>
        )}
        {project.liveUrl && reachable === null && (
          <CircularProgress size={16} color="secondary" />
        )}
        {project.liveUrl && reachable === true && (
          <Button
            size="small"
            variant="contained"
            color="secondary"
            href={project.liveUrl}
            target="_blank"
            endIcon={<OpenInNewIcon fontSize="inherit" />}
            sx={{ borderRadius: 2, textTransform: "none", fontWeight: 600 }}
          >
            Live Demo
          </Button>
        )}
        {project.github && (
          <Button
            size="small"
            variant="contained"
            href={project.github}
            target="_blank"
            endIcon={<GitHubIcon fontSize="inherit" />}
            sx={{
              borderRadius: 2,
              textTransform: "none",
              fontWeight: 600,
              bgcolor: "#24292f",
              color: "#ffffff",
              boxShadow: "none",
              "&:hover": { bgcolor: "#30363d", boxShadow: "none" },
            }}
          >
            GitHub
          </Button>
        )}
        {project.liveUrl && reachable === false && (
          <Typography
            variant="caption"
            sx={{ color: "text.disabled", fontStyle: "italic" }}
          >
            Not currently hosted — check back soon!
          </Typography>
        )}
        {!project.link && !project.liveUrl && !project.github && (
          <Typography
            variant="caption"
            sx={{ color: "text.disabled", fontStyle: "italic" }}
          >
            {project.note ?? "Ancient project — code not available"}
          </Typography>
        )}
      </Box>
    </Card>
  );
}
