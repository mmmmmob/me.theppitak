import StacksTag from "./StacksTag";

function ProjectCard({ project }) {
  return (
    <div className="flex flex-col rounded-lg bg-gray-300 p-4 dark:bg-slate-800">
      <div className="flex flex-col">
        <div className="flex">
          <img
            src={project.icon}
            alt="icon"
            className="mr-3 size-10 self-center rounded-md"
          />
          <a
            className="self-center font-mono text-xl font-semibold after:content-['_↗'] hover:text-slate-500 dark:hover:text-slate-100"
            href={project.url}
            target="_blank"
          >
            {project.title}
          </a>
        </div>
        <div className="mt-2 flex flex-wrap gap-x-1">
          {project.stacks.map((stack) => (
            <StacksTag key={stack.id} stack={stack} />
          ))}
        </div>
        <p className="mt-2 text-justify text-sm">{project.desc}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
