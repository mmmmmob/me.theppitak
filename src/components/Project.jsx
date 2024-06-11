import {
  SiAxios,
  SiExpress,
  SiMongodb,
  SiNodedotjs,
  SiReact,
  SiSwift,
} from "react-icons/si";
import { VscJson } from "react-icons/vsc";
import ProjectCard from "../sub-components/ProjectCard";

const projects = [
  {
    id: 1,
    stacks: [
      { id: 1, name: "Swift", color: "bg-orange-600", reactIcon: SiSwift },
      { id: 2, name: "SwiftUI", color: "bg-blue-700", reactIcon: SiSwift },
      { id: 3, name: "SwiftData", color: "bg-slate-700", reactIcon: SiSwift },
      { id: 4, name: "Alamofire", color: "bg-amber-600", reactIcon: SiAxios },
      {
        id: 5,
        name: "SwiftyJSON",
        color: "bg-indigo-600",
        reactIcon: "SiSwift",
        reactIcon: VscJson,
      },
    ],
    icon: "/lottojournal.png",
    url: "https://github.com/mmmmmob/lotto-journal",
    title: "Lotto Journal",
    desc: "Officia consequat eiusmod in cupidatat duis. Tempor exercitation dolor commodo quis labore id irure et elit. Sunt ipsum minim nulla. Cupidatat.",
  },
  {
    id: 2,
    stacks: [
      { id: 1, name: "Swift", color: "bg-orange-600", reactIcon: SiSwift },
      { id: 2, name: "SwiftUI", color: "bg-blue-700", reactIcon: SiSwift },
    ],
    icon: "/resume.png",
    url: "https://github.com/mmmmmob/resume-swiftui",
    title: "Resume",
    desc: "Officia consequat eiusmod in cupidatat duis. Tempor exercitation dolor commodo quis labore id irure et elit. Sunt ipsum minim nulla. Cupidatat.",
  },
  {
    id: 3,
    stacks: [
      { id: 1, name: "MongoDB", color: "bg-teal-800", reactIcon: SiMongodb },
      { id: 2, name: "Express", color: "bg-slate-950", reactIcon: SiExpress },
      { id: 3, name: "React", color: "bg-cyan-600", reactIcon: SiReact },
      {
        id: 4,
        name: "Node.js",
        color: "bg-lime-700",
        reactIcon: SiNodedotjs,
      },
    ],
    icon: "/loglife.png",
    url: "https://loglife.guru",
    title: "LogLife",
    desc: "Officia consequat eiusmod in cupidatat duis. Tempor exercitation dolor commodo quis labore id irure et elit. Sunt ipsum minim nulla. Cupidatat.",
  },
];

function Project() {
  return (
    <div className="mx-5 mt-5 self-center rounded-lg bg-slate-600/10 p-5 md:w-8/12">
      <p className="font-fkDisplay text-2xl font-bold">Projects</p>
      <div className="mt-3 flex flex-col space-y-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Project;
