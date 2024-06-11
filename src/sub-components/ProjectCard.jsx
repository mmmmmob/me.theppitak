function ProjectCard({ project }) {
  return (
    <div className="flex flex-col rounded-lg bg-gray-300 p-4 dark:bg-slate-800">
      <div className="flex flex-grow flex-col">
        <a
          className="text-xl font-semibold after:content-['_↗'] hover:text-slate-500 dark:hover:text-slate-100"
          href={project.url}
          target="_blank"
        >
          {project.title}
        </a>
        <p className="mt-1 w-fit rounded-xl bg-neutral-400/50 px-2 text-sm font-light">
          {project.workplace}
        </p>
        <p className="mt-2 text-justify">{project.desc}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
