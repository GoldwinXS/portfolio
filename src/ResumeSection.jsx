import { useState } from "react";
import {
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  Chip,
  Collapse,
  IconButton,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const coreSkills = [
  "Python", "Django", "React", "JavaScript", "HTML/CSS",
  "MySQL", "Docker", "GCP", "GitHub Actions", "CI/CD",
];

const familiarSkills = [
  "Kubernetes", "Terraform", "Azure", "MongoDB",
  "Kafka", "FastAPI", "Flask", "Snowflake", "Power BI",
];

const experience = [
  {
    company: "Empire Life Insurance",
    role: "Full-Stack Software Engineer",
    period: "July 2021 – September 2025",
    details: [
      "Resolved hundreds of production bugs across a complex, interconnected 100k+ LOC codebase spanning multiple team domains, building broad cross-system knowledge in the process.",
      "Led front-end and back-end development of a new user portal with a distinct flow integrated into the core application; coordinated design and delivery across team members.",
      "Participated in architecture planning by contributing implementation-level insight on how proposed changes would interface with existing systems.",
      "Mentored new hires and contract developers during onboarding; conducted code reviews as part of a two-review-per-PR process.",
      "Designed and managed cloud infrastructure using Docker, GCP, and GitHub Actions CI/CD pipelines; maintained and adapted YAML configurations for deployment workflows.",
      "Applied LLM-based coding assistants and agentic AI workflows to support development velocity and code quality.",
    ],
    tech: ["React", "Django", "Python", "MySQL", "Docker", "GCP", "GitHub Actions"],
  },
  {
    company: "Plotly",
    role: "Solutions Architect",
    period: "January 2021 – July 2021",
    details: [
      "Built interactive analytics dashboards using Python, React, and Plotly Dash for enterprise clients.",
      "Designed scalable application structures for client data pipelines covering ingestion, transformation, and visualization.",
      "Collaborated directly with client teams to translate business requirements into technical specifications.",
    ],
    tech: ["Python", "React", "Plotly Dash", "SQL"],
  },
  {
    company: "Compuexcel",
    role: "Application Developer & Data Engineer",
    period: "2020 – January 2021",
    details: [
      "Developed business intelligence dashboards and internal reporting tools using Dash and SQL.",
      "Built automated ETL workflows using Python to streamline data ingestion and cleanup processes.",
    ],
    tech: ["Python", "Plotly Dash", "SQL", "ETL"],
  },
  {
    company: "NetraMark",
    role: "Full-Stack Developer & ML Engineer",
    period: "2020",
    details: [
      "Developed web applications integrating machine learning models into interactive analytical interfaces.",
      "Contributed to NLP pipelines, schema design, and front-end data presentation.",
    ],
    tech: ["Python", "Machine Learning", "NLP"],
  },
];

export default function ResumeSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleCollapse = (index) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <Box sx={{ py: 6 }}>
      {/* Profile + Skills */}
      <Card
        elevation={3}
        sx={{
          mb: 6,
          p: { xs: 3, sm: 4 },
          backgroundColor: (theme) =>
            theme.palette.mode === "dark"
              ? theme.palette.background.paper
              : "#f9f9f9",
        }}
      >
        <Typography variant="h5" gutterBottom fontWeight={700}>
          About Me
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          Full-stack software engineer with 4+ years delivering and maintaining
          production software on a large-scale enterprise financial platform.
          Deep cross-system knowledge of complex legacy codebases acquired
          through sustained bug resolution, feature delivery, and iterative
          improvement. Consistent record of clean, QA-ready delivery and strong
          stakeholder communication. Practical experience with LLM-based
          assistants and agentic AI workflows. Bilingual in English and French.
        </Typography>

        <Typography
          variant="overline"
          color="text.secondary"
          display="block"
          sx={{ mb: 0.75 }}
        >
          Core Stack
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75, mb: 2.5 }}>
          {coreSkills.map((s) => (
            <Chip
              key={s}
              label={s}
              size="small"
              color="secondary"
              variant="outlined"
              sx={{ borderRadius: 1, fontSize: "0.72rem" }}
            />
          ))}
        </Box>

        <Typography
          variant="overline"
          color="text.secondary"
          display="block"
          sx={{ mb: 0.75 }}
        >
          Also Familiar With
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75 }}>
          {familiarSkills.map((s) => (
            <Chip
              key={s}
              label={s}
              size="small"
              variant="outlined"
              sx={{ borderRadius: 1, fontSize: "0.72rem" }}
            />
          ))}
        </Box>
      </Card>

      {/* Experience */}
      <Grid container spacing={3} justifyContent="center">
        {experience.map((exp, index) => (
          <Grid item xs={12} sm={6} md={6} key={index} sx={{ display: "flex" }}>
            <Card
              elevation={3}
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                borderTop: "3px solid",
                borderTopColor: "secondary.main",
              }}
            >
              <CardContent>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="flex-start"
                >
                  <Box sx={{ pr: 1 }}>
                    <Typography variant="h6" fontWeight={600}>
                      {exp.role}
                    </Typography>
                    <Typography variant="subtitle2" color="text.secondary">
                      {exp.company} · {exp.period}
                    </Typography>
                  </Box>
                  <IconButton
                    onClick={() => toggleCollapse(index)}
                    size="small"
                    sx={{ flexShrink: 0 }}
                  >
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
                        sx={{ mb: 1, pl: 1, borderLeft: "2px solid", borderColor: "divider" }}
                      >
                        {detail}
                      </Typography>
                    ))}
                    <Box mt={1.5} display="flex" flexWrap="wrap" gap={0.75}>
                      {exp.tech.map((tech, i) => (
                        <Chip
                          key={i}
                          label={tech}
                          size="small"
                          color="secondary"
                          variant="outlined"
                          sx={{ borderRadius: 1, fontSize: "0.7rem" }}
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
    </Box>
  );
}
