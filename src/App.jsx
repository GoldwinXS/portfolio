import React, { useMemo } from "react";
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
import ProjectCard from "./ProjectCard";
import ResumeSection from "./ResumeSection";
import { useMediaQuery } from "@mui/material";
import { useState, useEffect } from "react";
import Typewriter from "./Typewriter";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      delayChildren: 2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const projects = [
  {
    title: "BBoxLabel – Bounding Box Annotation Tool",
    description:
      "A lightweight web app for labeling bounding boxes for computer vision datasets. Built to make dataset preparation easy and fast for YOLO and other CV models.",
    tech: "Python",
    img: "images/bboxlabel.png",
    link: "https://github.com/GoldwinXS/bboxlabel",
  },
  {
    title: "EpFindr – Episode Ratings Dashboard",
    description:
      "EpFindr visualizes IMDb ratings for any TV show. Search a show, instantly see the season-by-season episode ratings, and find that one nostalgic episode you vaguely remember.",
    tech: "React, JavaScript, Material UI",
    img: "images/tvshow.png",
    link: "https://epfindr.web.app/",
  },
  {
    title: "Minecraft in Python (Pycraft)",
    description:
      "A Python recreation of Minecraft mechanics. Build blocks, explore a voxel world, and experiment with procedural generation.",
    tech: "Python, Pygame",
    video:
      "https://www.youtube.com/embed/ow2RdiiKJCg?autoplay=1&mute=1&controls=0&loop=1&playlist=ow2RdiiKJCg&modestbranding=1",
    link: "https://github.com/GoldwinXS/pycraft",
  },
  {
    title: "Recipe Chat – iOS App",
    description:
      "An iOS app that lets users create recipes interactively using ChatGPT. Input ingredients or instructions, and get structured, shareable recipes.",
    tech: "Swift, SwiftUI, iOS",
    img: "images/recipechat.png",
    link: "https://apps.apple.com/app/recipe-chat/id123456789",
  },
  {
    title: "Budget Planner – Dashboard",
    description:
      "A custom financial dashboard to track expenses and visualize budgets. Swipe through different views to analyze spending trends and plan your finances.",
    tech: "Python, Plotly, Dash",
    images: ["images/budget1.jpg", "images/budget2.jpg", "images/budget3.jpg"],
  },
  {
    title: "Custom YOLOv3 Router Error Detection",
    description:
      "A TensorFlow/Keras model trained to detect router errors through computer vision. Built a pipeline for image labeling, training, and real-time inference.",
    tech: "Python, TensorFlow, Keras, OpenCV",
    img: "images/yolo.png",
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
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
          background: {
            default: prefersDarkMode ? "#0d1117" : "#f5f5f7",
          },
          primary: { main: prefersDarkMode ? "#ffffff" : "#000000" },
          secondary: { main: "#0071e3" },
        },
        typography: {
          fontFamily:
            "'SF Pro Display', 'Helvetica Neue', Helvetica, Arial, sans-serif",
          h2: {
            fontWeight: 700,
            letterSpacing: "-0.03em",
            fontSize: "3rem",
            lineHeight: 1.1,
          },
          h5: {
            fontWeight: 400,
            letterSpacing: "-0.01em",
          },
        },
        shape: { borderRadius: 16 },
      }),
    [prefersDarkMode]
  );
  const [filter, setFilter] = useState("All");

  const techCategories = [
    "All",
    "Javascript",
    "Python",
    "React",
    "iOS",
    "WebGL",
  ];

  const filteredProjects = projects.filter((project) =>
    filter === "All"
      ? true
      : project.tech.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          transition: "background-color 0.5s ease, color 0.5s ease",
        }}
      >
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
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            overflow: "hidden",
          }}
        >
          {/* YouTube background */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              overflow: "hidden",
              zIndex: -1,
            }}
          >
            <iframe
              src="https://www.youtube.com/embed/ClJe2RUw26A?autoplay=1&mute=1&controls=0&loop=1&playlist=ClJe2RUw26A&modestbranding=1&showinfo=0"
              title="Hero Background"
              allow="autoplay; fullscreen"
              allowFullScreen
              style={{
                width: "100%",
                height: "100%",
                pointerEvents: "none",
                objectFit: "cover",
              }}
            />
          </Box>

          {/* Overlay for better text readability */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(0, 0, 0, 0.45)",
              zIndex: -1,
            }}
          />

          <Box sx={{ color: "white", px: 2 }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <Typewriter text="Hi, I'm Goldwin." speed={90} />
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              style={{ display: "inline-block" }}
            >
              <motion.div variants={item}>
                <Typography variant="h5" sx={{ mb: 4 }}>
                  Full Stack Engineer • AI & Data • React • MLOps
                </Typography>
              </motion.div>
              <motion.div variants={item}>
                <Button
                  variant="contained"
                  color="secondary"
                  href="#projects"
                  sx={{ borderRadius: 8, px: 3, py: 1.5 }}
                >
                  View My Work
                </Button>
              </motion.div>
            </motion.div>
          </Box>
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* ABOUT */}
        <Container maxWidth="md" sx={{ mb: 8 }}>
          <ResumeSection />
        </Container>

        <Divider sx={{ mb: 4 }} />

        {/* PROJECTS */}

        {/* PROJECTS */}
        <Container id="projects">
          <Typography variant="h4" gutterBottom>
            Projects
          </Typography>

          {/* Filter Buttons */}
          <Box sx={{ mb: 3, textAlign: "center" }}>
            {techCategories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? "contained" : "outlined"}
                color="secondary"
                onClick={() => setFilter(category)}
                sx={{
                  mx: 1,
                  borderRadius: 6,
                  textTransform: "none",
                  fontWeight: 500,
                  px: 2.5,
                  py: 1,
                  transition: "all 0.3s ease",
                }}
              >
                {category}
              </Button>
            ))}
          </Box>

          {/* Projects Grid */}
          <Grid container spacing={4} justifyContent="center">
            {filteredProjects.map((project, index) => (
              <Grid
                item
                key={index}
                xs={12}
                sm={6}
                md={4}
                sx={{ display: "flex" }}
              >
                <motion.div
                  whileHover={
                    window.innerWidth >= 900 // only scale on md+ screens
                      ? { scale: 1.03, y: -4 }
                      : { boxShadow: "0 0 8px rgba(0,0,0,0.2)" }
                  }
                  transition={{ type: "spring", stiffness: 250 }}
                  style={{
                    width: "100%", // ✅ ensures it fills its grid cell
                    height: "100%",
                    display: "flex",
                  }}
                >
                  <ProjectCard project={project} />
                </motion.div>
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
            <Link href="https://github.com/GoldwinXS">
              github.com/GoldwinXS
            </Link>
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
      </Box>
    </ThemeProvider>
  );
}
