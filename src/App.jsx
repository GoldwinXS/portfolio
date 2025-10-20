import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Link,
  CssBaseline,
  ThemeProvider,
  createTheme,
  Container,
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Divider,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const theme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#f5f5f7", // Apple-like soft grey
    },
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#0071e3", // Apple's blue
    },
  },
  typography: {
    fontFamily:
      "'SF Pro Display', 'Helvetica Neue', Helvetica, Arial, sans-serif",
    h2: { fontWeight: 600, letterSpacing: "-0.02em" },
    h4: { fontWeight: 500 },
    body1: { lineHeight: 1.7 },
  },
  shape: {
    borderRadius: 16,
  },
});

const projects = [
  {
    title: "BBoxLabel – Bounding Box Annotation Tool",
    description:
      "A lightweight web app for labeling bounding boxes for computer vision datasets. Built to make dataset preparation easy and fast for YOLO and other CV models.",
    tech: "React, Canvas API, MUI",
    img: "images/bboxlabel.png",
    link: "https://github.com/GoldwinXS/bboxlabel",
  },
  {
    title: "EpFindr – Episode Ratings Dashboard",
    description:
      "EpFindr visualizes IMDb ratings for any TV show. Search a show, instantly see the season-by-season episode ratings, and find that one nostalgic episode you vaguely remember.",
    tech: "Python, IMDbPY, Plotly Dash",
    img: "images/tvshow.png",
    link: "https://epfindr.web.app/",
  },
  {
    title: "Custom YOLOv3 Router Error Detection",
    description:
      "A TensorFlow/Keras model trained to detect router errors through computer vision. Built a pipeline for image labeling, training, and real-time inference.",
    tech: "Python, TensorFlow, Keras, OpenCV",
    img: "images/yolo.jpg",
  },
  {
    title: "Real-Time Ray Tracing Browser Engine",
    description:
      "Experimental WebGL-based ray tracer running in the browser at 120fps. Explores GPU parallelization in GLSL and optimized BVH structures.",
    tech: "WebGL, JavaScript, GLSL",
    img: "images/raytrace.png",
  },
];

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* NAVBAR */}
      <AppBar position="static" elevation={0} color="transparent">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 600 }}>
            Goldwin Stewart
          </Typography>
          <IconButton
            color="inherit"
            component={Link}
            href="https://github.com/GoldwinXS"
            target="_blank"
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            color="inherit"
            component={Link}
            href="https://linkedin.com/in/goldwin-ste"
            target="_blank"
          >
            <LinkedInIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* HERO SECTION */}
      <Box
        sx={{
          position: "relative",
          minHeight: "80vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: -1,
          }}
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>

        <Typography variant="h2" gutterBottom>
          Hi, I'm Goldwin.
        </Typography>
        <Typography variant="h5" color="text.secondary" sx={{ mb: 4 }}>
          Full Stack Engineer • AI & Data • React • MLOps
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          endIcon={<KeyboardArrowDownIcon />}
          href="#projects"
          sx={{ borderRadius: 8, px: 3, py: 1.5 }}
        >
          View My Work
        </Button>
      </Box>

      <Divider sx={{ my: 4 }} />

      {/* ABOUT */}
      <Container maxWidth="md" sx={{ mb: 8 }}>
        <Typography variant="h4" gutterBottom>
          About Me
        </Typography>
        <Typography variant="body1">
          I’m a full-stack software engineer passionate about building
          intelligent and scalable systems. I love working at the intersection
          of data, AI, and product engineering — from crafting elegant frontend
          interfaces to architecting complex backend systems and ML pipelines.
        </Typography>
      </Container>

      <Divider sx={{ mb: 4 }} />

      {/* PROJECTS */}
      <Container maxWidth="lg" id="projects" sx={{ mb: 8 }}>
        <Typography variant="h4" gutterBottom>
          Projects
        </Typography>
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card
                elevation={3}
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-6px)",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="180"
                  image={project.img}
                  alt={project.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" gutterBottom>
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 1 }}
                  >
                    {project.description}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {project.tech}
                  </Typography>
                </CardContent>
                {project.link && (
                  <Box sx={{ p: 2, pt: 0 }}>
                    <Button
                      size="small"
                      color="secondary"
                      href={project.link}
                      target="_blank"
                    >
                      View Project
                    </Button>
                  </Box>
                )}
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Divider sx={{ mb: 4 }} />

      {/* CONTACT */}
      <Container maxWidth="sm" sx={{ mb: 6, textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          Contact
        </Typography>
        <Typography>
          Email:{" "}
          <Link href="mailto:goldwin.stewart@gmail.com">
            goldwin.stewart@gmail.com
          </Link>
        </Typography>
        <Typography>
          LinkedIn:{" "}
          <Link href="https://www.linkedin.com/in/goldwin-stewart-624765387/">
            linkedin.com/in/goldwin-ste
          </Link>
        </Typography>
        <Typography>
          GitHub:{" "}
          <Link href="https://github.com/GoldwinXS">github.com/GoldwinXS</Link>
        </Typography>
      </Container>

      <Box
        sx={{
          py: 3,
          textAlign: "center",
          fontSize: "0.875rem",
          color: "text.secondary",
        }}
      >
        © {new Date().getFullYear()} Goldwin Stewart
      </Box>
    </ThemeProvider>
  );
}
