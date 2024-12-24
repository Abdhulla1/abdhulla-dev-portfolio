/**
 * @copyright 2024 Abdhulla
 * @license Apache-2.0
 */

import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    imgSrc: "./images/project-1.png",
    title: "Employee Management System",
    tags: ["Java", "Springboot", "React","MySQL","front-end integration"],
    projectLink: "https://github.com/Abdhulla1/Employee-Management-System",
  },
  {
    imgSrc: "./images/project-2.png",
    title: "Online Hotel Booking Management System",
    tags: ["Java", "Springboot", "React","MySQL","Bootstrap "],
    projectLink: "https://github.com/Abdhulla1/Online-Hotel-Booking-Management-System",
  },
  {
    imgSrc: "./images/project-2.png",
    title: "Online Hotel Booking Management System",
    tags: ["Java", "Springboot", "React","MySQL","Bootstrap "],
    projectLink: "https://github.com/Abdhulla1/Online-Hotel-Booking-Management-System",
  }
];

export const Projects = () => {
  return <section id="projects" className="section">
    <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">What I&apos;ve Built</h2>
    </div>

    <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))] justify-center mx-auto max-w-screen-lg py-8">
  {projects.map(({ imgSrc, title, tags, projectLink }, key) => (
    <ProjectCard
      key={key}
      imgSrc={imgSrc}
      title={title}
      tags={tags}
      projectLink={projectLink}
      classes="reveal-up"
    />
  ))}
</div>

  </section>;
};


