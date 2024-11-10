import React from "react";
import { Container } from "./styles";
import { experiences } from "./exp";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Avatar, Typography } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";

export default function Experience() {
  return (
    <Container id="experience">
      <h2>Experience</h2>
      <VerticalTimeline>
        {experiences.map((exp, index) => (
          <VerticalTimelineElement
            key={exp.id}
            date={exp.date}
            icon={<WorkIcon />}
            iconStyle={{ background: '#2196f3', color: '#fff' }}
            className={index % 2 === 0 ? "slide-in-left" : "slide-in-right"}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <Avatar src={exp.img} alt={exp.role} style={{ width: 50, height: 50 }} />
              <div>
                <Typography variant="h6" component="h3">{exp.role}</Typography>
                <Typography variant="subtitle2" color="textSecondary" className="hehe">{exp.company}</Typography>
              </div>
            </div>
            <Typography variant="body2" style={{ marginTop: '0.5rem' }} className="haha">{exp.desc}</Typography>
            <Typography variant="body2" color="textSecondary" style={{ marginTop: '0.5rem' }}>
              {exp.skills.map((skill, index) => (
                <span key={index}>
                  <b>{skill}</b>
                  {index === exp.skills.length - 1 ? '.' : ', '}
                </span>
              ))}
            </Typography>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </Container>
  );
}
