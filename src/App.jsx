import { useMemo } from "react";
import { motion } from "framer-motion";
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

  Button,
  Divider,
  Paper,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import ProjectCard from "./ProjectCard";
import ResumeSection from "./ResumeSection";
import { useMediaQuery } from "@mui/material";
import { useState } from "react";
import Typewriter from "./Typewriter";
import EmailIcon from "@mui/icons-material/Email";
import HeroBackground from "./HeroBackground";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 1,
      delayChildren: 2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 1.2 } },
};

const projects = [
  {
    title: "3D OBJ Generator – Coordinate-to-Mesh Tool",
    description:
      "A Python utility that converts arbitrary coordinate sets into 3D OBJ mesh files optimized for 3D printing. Can also add a path from GPX file. Will also convert satellite colors into 4 discrete colors for 3D printing on an FDM printer.",
    tech: "Python",
    images: ["images/mapcad1.png", "images/mapcad2.png"],
  },
  {
    title: "VECTOR – Tank Combat Game",
    description:
      "Browser-based third-person tank shooter built with Three.js. Battle waves of AI enemies across procedural terrain using a dual weapon system (MG + arcing cannon), roguelike upgrades, and a neural-network tactic selector that adapts enemy behaviour in real time.",
    tech: "Three.js, JavaScript",
    images: ["images/vector1.jpg", "images/vector2.png", "images/vector3.png", "images/vector4.png", "images/vector5.png", "images/vector6.png"],
    link: "https://goldwinxs.github.io/VectorTankGame/",
    github: "https://github.com/GoldwinXS/VectorTankGame",
  },
  {
    title: "BBoxLabel – Bounding Box Annotation Tool",
    description:
      "A lightweight web app for labeling bounding boxes for computer vision datasets. Built to make dataset preparation easy and fast for YOLO and other CV models.",
    tech: "Python",
    img: "images/bboxlabel.png",
    github: "https://github.com/GoldwinXS/bboxlabel",
  },
  {
    title: "EpFindr – Episode Ratings Dashboard",
    description:
      "EpFindr visualizes IMDb ratings for any TV show. Search a show, instantly see the season-by-season episode ratings, and find that one nostalgic episode you vaguely remember.",
    tech: "React, JavaScript, Material UI",
    images: ["images/tvshow1.png", "images/tvshow2.png", "images/tvshow3.png"],
    link: "https://epfindr.web.app/",
  },
  {
    title: "Minecraft in Python (Pycraft)",
    description:
      "A Python recreation of Minecraft mechanics. Build blocks, explore a voxel world, and experiment with procedural generation.",
    tech: "Python, Pygame",
    img: "images/pycraft.png",
    github: "https://github.com/GoldwinXS/pycraft",
  },
  {
    title: "Recipe Planner",
    description:
      "Full-stack web app for managing personal recipes, planning meals, and generating shopping lists — with AI-powered recipe generation, meal planning, and nutritional tracking. Supports Claude, Ollama, OpenAI-compatible APIs, and an in-browser WebLLM mode.",
    tech: "Django, React, PostgreSQL, Docker, Material UI, Python",
    images: ["images/recipe1.png", "images/recipe2.png", "images/recipe3.png", "images/recipe4.png", "images/recipe5.png", "images/recipe6.png", "images/recipe7.png"],
    liveUrl: "https://bitstream.mywire.org/login",
  },
  {
    title: "Recipe Chat – iOS App",
    description:
      "An iOS app that lets users create recipes interactively using ChatGPT. Input ingredients or instructions, and get structured, shareable recipes.",
    tech: "Swift, SwiftUI, iOS",
    img: "images/recipechat.png",
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
    title: "Portfolio Website",
    description:
      "This site. Built with React, Material UI, and Framer Motion. Supports dark/light mode based on system preference, filterable project cards, and an animated hero section.",
    tech: "React, JavaScript, Material UI",
    img: "images/portfolio.png",
    github: "https://github.com/GoldwinXS/portfolio",
  },
  {
    title: "Real-Time Ray Tracing Browser Engine",
    description:
      "A real-time voxel path tracer running in the browser via WebGL2, presented as a three-room interactive art gallery. Unlike rasterisers that fake lighting with tricks, it simulates actual light physics — global illumination, colour bleeding, specular reflections, and refraction. Built with a custom GLSL renderer using DDA ray traversal and 6-bounce radiance sampling.",
    tech: "WebGL, JavaScript, GLSL",
    images: ["images/raytrace1.png", "images/raytrace2.png", "images/raytrace3.png", "images/raytrace4.png", "images/raytrace5.png", "images/raytrace6.png"],
    link: "https://goldwinxs.github.io/RealTimeJSRayTracer/",
    github: "https://github.com/GoldwinXS/RealTimeJSRayTracer",
  },
];

export default function App() {
  const systemDark = useMediaQuery("(prefers-color-scheme: dark)");
  const [darkMode, setDarkMode] = useState(systemDark);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? "dark" : "light",
          background: {
            default: darkMode ? "#0d1117" : "#f5f5f7",
          },
          primary: { main: darkMode ? "#ffffff" : "#000000" },
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
    [darkMode],
  );
  const [filter, setFilter] = useState("All");

  const techCategories = [
    "All",
    "Python",
    "JavaScript",
    "React",
    "iOS",
    "WebGL",
  ];

  const filteredProjects = projects
    .filter((project) =>
      filter === "All"
        ? true
        : project.tech.toLowerCase().includes(filter.toLowerCase()),
    )
    .sort((a, b) => {
      const ancient = (p) => !p.link && !p.github && !p.note;
      return ancient(a) === ancient(b) ? 0 : ancient(a) ? 1 : -1;
    });

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          transition: "background-color 0.5s ease, color 0.5s ease",
        }}
      >
        <CssBaseline />
        {/* NAVBAR */}
        <AppBar
          position="sticky"
          elevation={0}
          color="transparent"
          sx={{
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderBottom: "1px solid",
            borderBottomColor: "divider",
            backgroundColor: (theme) =>
              theme.palette.mode === "dark"
                ? "rgba(13, 17, 23, 0.8)"
                : "rgba(245, 245, 247, 0.8)",
            zIndex: 1100,
          }}
        >
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 600 }}>
              Goldwin Stewart
            </Typography>
            <IconButton color="inherit" onClick={() => setDarkMode((d) => !d)}>
              {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
            <IconButton
              color="inherit"
              component={Link}
              href="https://github.com/GoldwinXS"
              target="_blank"
            >
              <GitHubIcon />
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
            <HeroBackground
              useVideo={false}
              videoUrl="https://www.youtube.com/embed/RR2EI8EEOOw?autoplay=1&mute=1&controls=0&loop=1&playlist=RR2EI8EEOOw"
              animationType="matrix"
              isDarkMode={darkMode}
            />
          </Box>

          {/* Overlay for text readability */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: darkMode
                ? "rgba(0, 0, 0, 0.5)"
                : "rgba(245, 245, 247, 0.15)",
              zIndex: -1,
            }}
          />

          {/* Bottom gradient fade into page background */}
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              height: "140px",
              background: (theme) =>
                `linear-gradient(to bottom, transparent, ${theme.palette.background.default})`,
              zIndex: 1,
            }}
          />

          <Box sx={{ color: darkMode ? "white" : "text.primary", px: 2, position: "relative", zIndex: 2 }}>
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
                  Full-Stack Engineer  •  Django & React  •  Python  •  Bilingual EN/FR
                </Typography>
              </motion.div>
              <motion.div variants={item}>
                <Box sx={{ display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap" }}>
                  {/* Primary CTA — tinted glass */}
                  <Button
                    variant="text"
                    href="#projects"
                    sx={{
                      borderRadius: 8, px: 3, py: 1.5,
                      textTransform: "none", fontWeight: 600, fontSize: "1rem",
                      backdropFilter: "blur(24px) saturate(180%)",
                      WebkitBackdropFilter: "blur(24px) saturate(180%)",
                      backgroundColor: darkMode
                        ? "rgba(0,113,227,0.35)"
                        : "rgba(0,113,227,0.18)",
                      border: "1px solid",
                      borderColor: darkMode
                        ? "rgba(120,180,255,0.4)"
                        : "rgba(0,113,227,0.35)",
                      color: darkMode ? "white" : "#0058b8",
                      boxShadow: "0 2px 16px rgba(0,113,227,0.2)",
                      "&:hover": {
                        backgroundColor: darkMode
                          ? "rgba(0,113,227,0.5)"
                          : "rgba(0,113,227,0.28)",
                      },
                    }}
                  >
                    Personal Projects
                  </Button>
                  {/* Secondary CTA — neutral glass */}
                  <Button
                    variant="text"
                    href="#experience"
                    sx={{
                      borderRadius: 8, px: 3, py: 1.5,
                      textTransform: "none", fontWeight: 600, fontSize: "1rem",
                      backdropFilter: "blur(24px) saturate(180%)",
                      WebkitBackdropFilter: "blur(24px) saturate(180%)",
                      backgroundColor: darkMode
                        ? "rgba(255,255,255,0.1)"
                        : "rgba(255,255,255,0.55)",
                      border: "1px solid",
                      borderColor: darkMode
                        ? "rgba(255,255,255,0.2)"
                        : "rgba(255,255,255,0.85)",
                      color: darkMode ? "rgba(255,255,255,0.9)" : "rgba(0,0,0,0.75)",
                      boxShadow: "0 2px 16px rgba(0,0,0,0.08)",
                      "&:hover": {
                        backgroundColor: darkMode
                          ? "rgba(255,255,255,0.18)"
                          : "rgba(255,255,255,0.78)",
                      },
                    }}
                  >
                    Work Experience
                  </Button>
                </Box>
              </motion.div>
            </motion.div>
          </Box>
        </Box>

        {/* ABOUT */}
        <Container id="experience" maxWidth="md" sx={{ mb: 8 }}>
          <ResumeSection />
        </Container>

        <Divider sx={{ mb: 4 }} />
        {/* PROJECTS */}
        <Container id="projects">
          <Box sx={{ textAlign: "center", mb: 3 }}>
            <Box
              sx={{
                display: "inline-block",
                pb: 1,
                borderBottom: "3px solid",
                borderBottomColor: "secondary.main",
              }}
            >
              <Typography variant="h4" sx={{ fontWeight: 700 }}>
                Projects
              </Typography>
            </Box>
          </Box>

          {/* Info Box / Intro */}
          <Box sx={{ mb: 4, display: "flex", justifyContent: "center", px: 2 }}>
            <Paper
              elevation={3}
              sx={{
                maxWidth: 800,
                p: 3,
                borderRadius: 2,
                backgroundColor: (theme) =>
                  theme.palette.mode === "dark" ? "#1f1f1f" : "#f5f5f5",
              }}
            >
              <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                About These Projects
              </Typography>
              <Typography variant="body1" sx={{ color: "text.secondary" }}>
                I code for fun, and here's a collection of projects I've built
                to learn, experiment, and amuse myself. Some are older, so the
                code might not be perfect or even publicly available. This isn't
                necessarily a showcase of production-ready code — it's a peek
                into my curiosity, creativity, and long-standing love for
                coding.
              </Typography>
            </Paper>
          </Box>

          {/* Filter Buttons */}
          <Box
            sx={{
              mb: 3,
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: 1.5,
            }}
          >
            {techCategories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? "contained" : "outlined"}
                color="secondary"
                onClick={() => setFilter(category)}
                sx={{
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
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 3,
              justifyContent: "center",
            }}
          >
            {filteredProjects.map((project, index) => (
              <Box
                key={index}
                sx={{ width: { xs: "100%", sm: "320px" } }}
              >
                <motion.div
                  whileHover={
                    window.innerWidth >= 900
                      ? { scale: 1.03, y: -4 }
                      : { boxShadow: "0 0 8px rgba(0,0,0,0.2)" }
                  }
                  transition={{ type: "spring", stiffness: 250 }}
                  style={{ width: "100%", height: "100%", display: "flex" }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              </Box>
            ))}
          </Box>
        </Container>

        <Divider sx={{ mb: 4, my: 5 }} />

        {/* CONTACT */}
        <Container maxWidth="sm" sx={{ mb: 6, textAlign: "center" }}>
          <Box sx={{ mb: 3 }}>
            <Box
              sx={{
                display: "inline-block",
                pb: 1,
                borderBottom: "3px solid",
                borderBottomColor: "secondary.main",
              }}
            >
              <Typography variant="h4" sx={{ fontWeight: 700 }}>
                Contact
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{ display: "flex", justifyContent: "center", gap: 4, mt: 2 }}
          >
            <Link
              href="mailto:goldwin.stewart@gmail.com"
              color="inherit"
              underline="none"
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 0.5,
                opacity: 0.8,
                transition: "opacity 0.2s",
                "&:hover": { opacity: 1 },
              }}
            >
              <EmailIcon sx={{ fontSize: 36 }} />
              <Typography variant="caption">Email</Typography>
            </Link>

            <Link
              href="https://github.com/GoldwinXS"
              target="_blank"
              color="inherit"
              underline="none"
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 0.5,
                opacity: 0.8,
                transition: "opacity 0.2s",
                "&:hover": { opacity: 1 },
              }}
            >
              <GitHubIcon sx={{ fontSize: 36 }} />
              <Typography variant="caption">GitHub</Typography>
            </Link>
          </Box>
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
