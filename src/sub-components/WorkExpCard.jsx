function WorkExpCard({ experience }) {
  return (
    <div className="flex flex-col rounded-lg bg-gray-300 p-5 dark:bg-slate-800">
      <div className="mb-2 justify-start">
        <p className="text-xs font-light text-zinc-500 underline decoration-dashed underline-offset-4">
          {experience.duration}
        </p>
      </div>
      <div className="flex flex-grow flex-col">
        <a
          className="text-xl font-semibold after:content-['_↗'] hover:text-slate-500 dark:hover:text-slate-100"
          href={experience.url}
          target="_blank"
        >
          {experience.title}
        </a>
        <p className="mt-1 w-fit rounded-xl bg-neutral-400/50 px-2 text-sm font-light">
          {experience.workplace}
        </p>
        <p className="mt-2 text-justify">{experience.desc}</p>
      </div>
    </div>
  );
}

export default WorkExpCard;
