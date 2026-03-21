import { useState } from "react";
import {
  Typography,
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
      "Designed and managed cloud infrastructure using Docker, GCP, and GitHub Actions CI/CD pipelines.",
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
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <Box sx={{ py: 6 }}>
      {/* About + Skills card */}
      <Card
        elevation={3}
        sx={{
          mb: 6,
          p: { xs: 3, sm: 4 },
          backgroundColor: (theme) =>
            theme.palette.mode === "dark"
              ? "rgba(255,255,255,0.04)"
              : "rgba(255,255,255,0.72)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          border: "1px solid",
          borderColor: (theme) =>
            theme.palette.mode === "dark"
              ? "rgba(255,255,255,0.08)"
              : "rgba(255,255,255,0.9)",
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

        <Typography variant="overline" color="text.secondary" display="block" sx={{ mb: 0.75 }}>
          Core Stack
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75, mb: 2.5 }}>
          {coreSkills.map((s) => (
            <Chip key={s} label={s} size="small" color="secondary" variant="outlined"
              sx={{ borderRadius: 1, fontSize: "0.72rem" }} />
          ))}
        </Box>

        <Typography variant="overline" color="text.secondary" display="block" sx={{ mb: 0.75 }}>
          Also Familiar With
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75 }}>
          {familiarSkills.map((s) => (
            <Chip key={s} label={s} size="small" variant="outlined"
              sx={{ borderRadius: 1, fontSize: "0.72rem" }} />
          ))}
        </Box>
      </Card>

      {/* Timeline */}
      {experience.map((exp, index) => (
        <Box key={index} sx={{ display: "flex", gap: 2, mb: 1 }}>

          {/* Dot + connecting line */}
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0, width: 20 }}>
            <Box sx={{
              width: 12, height: 12, borderRadius: "50%",
              bgcolor: "secondary.main",
              mt: "10px", flexShrink: 0,
              boxShadow: "0 0 0 3px",
              boxShadowColor: "background.default",
            }} />
            {index < experience.length - 1 && (
              <Box sx={{ width: 2, flexGrow: 1, bgcolor: "divider", mt: 0.5, mb: 0 }} />
            )}
          </Box>

          {/* Card */}
          <Box sx={{ flexGrow: 1, pb: index < experience.length - 1 ? 2 : 0 }}>
            <Card elevation={2} sx={{
              border: "1px solid",
              borderColor: (theme) =>
                theme.palette.mode === "dark"
                  ? "rgba(255,255,255,0.07)"
                  : "rgba(255,255,255,0.85)",
              borderLeftWidth: "3px",
              borderLeftColor: "secondary.main",
              backgroundColor: (theme) =>
                theme.palette.mode === "dark"
                  ? "rgba(255,255,255,0.03)"
                  : "rgba(255,255,255,0.65)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
            }}>
              <CardContent>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 1 }}>
                  <Box>
                    <Typography variant="h6" fontWeight={600}>{exp.role}</Typography>
                    <Typography variant="body2" color="secondary.main" fontWeight={500}>
                      {exp.company}
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                    <Typography variant="caption" color="text.disabled" sx={{ whiteSpace: "nowrap" }}>
                      {exp.period}
                    </Typography>
                    <IconButton size="small" onClick={() => toggle(index)}>
                      {openIndex === index ? <ExpandLessIcon fontSize="small" /> : <ExpandMoreIcon fontSize="small" />}
                    </IconButton>
                  </Box>
                </Box>

                {/* Tech chips always visible */}
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75, mt: 1.5 }}>
                  {exp.tech.map((t, i) => (
                    <Chip key={i} label={t} size="small" color="secondary" variant="outlined"
                      sx={{ borderRadius: 1, fontSize: "0.7rem", height: 22 }} />
                  ))}
                </Box>

                <Collapse in={openIndex === index} timeout="auto">
                  <Box mt={2}>
                    {exp.details.map((d, i) => (
                      <Typography key={i} variant="body2" color="text.secondary"
                        sx={{ mb: 1, pl: 1.5, borderLeft: "2px solid", borderColor: "divider" }}>
                        {d}
                      </Typography>
                    ))}
                  </Box>
                </Collapse>
              </CardContent>
            </Card>
          </Box>
        </Box>
      ))}
    </Box>
  );
}
