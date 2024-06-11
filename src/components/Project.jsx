import ProjectCard from "../sub-components/ProjectCard";

const projects = [
  {
    id: 1,
    workplace: "SwiftUI + SwiftData",
    url: "https://github.com/mmmmmob/lotto-journal",
    title: "Lotto Journal",
    desc: "Officia consequat eiusmod in cupidatat duis. Tempor exercitation dolor commodo quis labore id irure et elit. Sunt ipsum minim nulla. Cupidatat.",
  },
  {
    id: 2,
    workplace: "SwiftUI",
    url: "https://github.com/mmmmmob/resume-swiftui",
    title: "Resume",
    desc: "Officia consequat eiusmod in cupidatat duis. Tempor exercitation dolor commodo quis labore id irure et elit. Sunt ipsum minim nulla. Cupidatat.",
  },
  {
    id: 3,
    workplace: "MERN",
    url: "https://loglife.guru",
    title: "LogLife",
    desc: "Officia consequat eiusmod in cupidatat duis. Tempor exercitation dolor commodo quis labore id irure et elit. Sunt ipsum minim nulla. Cupidatat.",
  },
];

function Project() {
  return (
    <div className="mx-5 mt-5 flex flex-col self-center rounded-lg bg-slate-600/10 p-5 md:w-8/12">
      <p className="font-fkDisplay text-2xl font-bold">Side Projects</p>
      <div className="mt-3 flex flex-col space-y-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Project;
