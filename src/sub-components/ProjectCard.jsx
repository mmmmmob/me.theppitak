import StacksTag from "./StacksTag";

function ProjectCard({ project }) {
  return (
    <div className="flex flex-col rounded-lg bg-gray-300 p-4 dark:bg-slate-800">
      <div className="flex flex-col">
        <div className="mb-2 flex">
          <img
            src={project.icon}
            alt="icon"
            className="mr-2 size-10 self-center rounded-md"
          />
          <a
            className="self-center text-xl font-semibold after:content-['_↗'] hover:text-slate-500 dark:hover:text-slate-100"
            href={project.url}
            target="_blank"
          >
            {project.title}
          </a>
        </div>
        <div className="flex flex-wrap gap-x-1 gap-y-1">
          {project.stacks.map((stack) => (
            <StacksTag key={stack.id} stack={stack} />
          ))}
        </div>
        <p className="mt-2 text-justify">{project.desc}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
