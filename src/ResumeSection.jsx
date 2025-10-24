import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  Chip,
  Divider,
  Collapse,
  IconButton,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const experience = [
  {
    company: "Empire Life",
    role: "Full Stack Software Engineer",
    period: "July 2021 – September 2025",
    details: [
      "Delivered production-grade applications within a 100k+ LOC ecosystem using React, Django, and GCP.",
      "Deployed services via Docker, Kubernetes, and CI/CD pipelines while collaborating with infrastructure and security teams.",
      "Optimized internal tools and dashboards to streamline business processes and reduce manual workflows.",
      "Contributed to architecture design and guided technical decisions; conducted code reviews and mentored teammates.",
    ],
    tech: ["React", "Django", "GCP", "Docker", "Kubernetes", "CI/CD"],
  },
  {
    company: "Plotly",
    role: "Solutions Architect",
    period: "January 2021 – July 2021",
    details: [
      "Designed scalable full-stack solutions for high-volume data applications.",
      "Enhanced system reliability and performance for enterprise clients through efficient architecture design.",
    ],
    tech: ["Plotly Dash", "Python", "React", "SQL"],
  },
  {
    company: "Compuexcel",
    role: "Application Developer & Data Engineer",
    period: "2020 – January 2021",
    details: [
      "Developed interactive Plotly Dash applications for complex data visualization.",
      "Enabled client engagement with innovative, easily interpretable visual dashboards.",
    ],
    tech: ["Plotly Dash", "Python", "Data Visualization"],
  },
  {
    company: "NetraMark",
    role: "Full Stack Developer & ML Engineer",
    period: "2020",
    details: [
      "Built Python-based web applications integrating machine learning for data-driven insights.",
      "Delivered AI-enhanced solutions that improved operational efficiency and user experience.",
    ],
    tech: ["Python", "ML", "Web Development"],
  },
];

export default function ResumeSection() {
  const [openIndex, setOpenIndex] = React.useState(null);
  const toggleCollapse = (index) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* Blurb section */}
      <Card
        elevation={3}
        sx={{
          mb: 6,
          p: 3,
          backgroundColor: (theme) =>
            theme.palette.mode === "dark"
              ? theme.palette.background.paper
              : "#f9f9f9",
          borderRadius: 2, // less rounded
          textAlign: "center",
        }}
      >
        <Typography variant="h5" gutterBottom>
          Experience & Expertise
        </Typography>
        <Typography variant="body1" color="text.secondary">
          I am a full-stack software engineer who builds scalable, innovative,
          and data-driven applications. I combine frontend and backend expertise
          with cloud infrastructure and machine learning to deliver high-impact
          solutions that enhance user experience and operational efficiency.
        </Typography>
      </Card>

      {/* Experience Grid */}
      <Grid container spacing={4} justifyContent="center">
        {experience.map((exp, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: "flex" }}>
            <Card
              elevation={3}
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "100rem",
              }}
            >
              <CardContent>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Box>
                    <Typography variant="h6">{exp.role}</Typography>
                    <Typography variant="subtitle2" color="text.secondary">
                      {exp.company} • {exp.period}
                    </Typography>
                  </Box>
                  <IconButton onClick={() => toggleCollapse(index)}>
                    {openIndex === index ? (
                      <ExpandLessIcon />
                    ) : (
                      <ExpandMoreIcon />
                    )}
                  </IconButton>
                </Box>

                <Collapse in={openIndex === index} timeout="auto">
                  <Box mt={2}>
                    {exp.details.map((detail, i) => (
                      <Typography
                        key={i}
                        variant="body2"
                        color="text.secondary"
                        sx={{ mb: 0.5 }}
                      >
                        • {detail}
                      </Typography>
                    ))}
                    <Box mt={1} display="flex" flexWrap="wrap" gap={1}>
                      {exp.tech.map((tech, i) => (
                        <Chip
                          key={i}
                          label={tech}
                          size="small"
                          color="secondary"
                        />
                      ))}
                    </Box>
                  </Box>
                </Collapse>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
