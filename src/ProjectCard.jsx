import { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  IconButton,
  Chip,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function ProjectCard({ project }) {
  const [slide, setSlide] = useState(0);

  const isCarousel = project.images && project.images.length > 0;
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

        {/* Carousel */}
        {!project.video && isCarousel && (
          <>
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                backgroundImage: `url(${project.images[slide]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            {project.images.length > 1 && (
              <>
                <IconButton
                  onClick={prevSlide}
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: 4,
                    transform: "translateY(-50%)",
                    bgcolor: "rgba(0,0,0,0.3)",
                    color: "white",
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
                  }}
                >
                  <ArrowForwardIosIcon fontSize="small" />
                </IconButton>
              </>
            )}
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

      {(project.link || project.github) && (
        <Box sx={{ p: 2, pt: 0, display: "flex", gap: 1, flexWrap: "wrap" }}>
          {project.link && (
            <Button
              size="small"
              variant="outlined"
              color="secondary"
              href={project.link}
              target="_blank"
              endIcon={<OpenInNewIcon fontSize="inherit" />}
              sx={{ borderRadius: 2, textTransform: "none", fontWeight: 500 }}
            >
              Live Demo
            </Button>
          )}
          {project.github && (
            <Button
              size="small"
              variant="outlined"
              href={project.github}
              target="_blank"
              endIcon={<GitHubIcon fontSize="inherit" />}
              sx={{ borderRadius: 2, textTransform: "none", fontWeight: 500 }}
            >
              GitHub
            </Button>
          )}
        </Box>
      )}
    </Card>
  );
}
