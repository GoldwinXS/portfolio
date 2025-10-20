import React from "react";
import {
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Grid,
  Box,
  Link,
  AppBar,
  Toolbar,
  CssBaseline,
  ThemeProvider,
  createTheme,
  IconButton,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#1976d2" },
    secondary: { main: "#f50057" },
  },
  typography: {
    h4: { fontWeight: 600, marginBottom: "1rem" },
  },
});

const projects = [
  {
    title: "Custom YOLOv3 Router Error Detection",
    description:
      "TensorFlow/Keras model detecting router errors via computer vision.",
    tech: "Python, TensorFlow, Keras, OpenCV",
    img: "images/yolo.jpg",
  },
  {
    title: "TV Show Ratings Visualizer",
    description: "Plotly Dash app visualizing IMDb ratings per episode.",
    tech: "Python, Dash, Plotly",
    img: "images/tvshow.jpg",
  },
  {
    title: "Real-Time Ray Tracing Browser Engine",
    description: "Browser engine achieving ~120fps for real-time ray tracing.",
    tech: "WebGL, JavaScript, GLSL",
    img: "images/raytrace.png",
  },
];

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Goldwin Stewart
          </Typography>
          <IconButton
            color="inherit"
            component={Link}
            href="https://goldwinxs.github.io/portfolio/"
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

      <Container sx={{ py: 5 }}>
        <Typography variant="h4">About Me</Typography>
        <Typography paragraph>
          Full Stack Software Engineer | Python, React, GCP | Machine Learning &
          Data Engineering. Passionate about building scalable applications and
          exploring AI solutions.
        </Typography>

        <Typography variant="h4" sx={{ mt: 5 }}>
          Projects
        </Typography>
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="img"
                  height="180"
                  image={project.img}
                  alt={project.title}
                />
                <CardContent>
                  <Typography variant="h6">{project.title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.description}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {project.tech}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 5 }}>
          <Typography variant="h4">Contact</Typography>
          <Typography>
            Email:{" "}
            <Link href="mailto:goldwin.stewart@gmail.com">
              goldwin.stewart@gmail.com
            </Link>
          </Typography>
          <Typography>
            LinkedIn:{" "}
            <Link href="https://linkedin.com/in/goldwin-ste">
              linkedin.com/in/goldwin-ste
            </Link>
          </Typography>
          <Typography>
            GitHub:{" "}
            <Link href="https://github.com/GoldwinXS">
              github.com/GoldwinXS
            </Link>
          </Typography>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
