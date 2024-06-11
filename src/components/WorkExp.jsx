import WorkExpCard from "../sub-components/WorkExpCard";

const experiences = [
  {
    id: 1,
    duration: "Mar 2024 - Present",
    workplace: "Self-study",
    url: "https://www.linkedin.com/in/theppitak-m/details/certifications/",
    title: "iOS Mobile Developer",
    desc: "Officia consequat eiusmod in cupidatat duis. Tempor exercitation dolor commodo quis labore id irure et elit. Sunt ipsum minim nulla. Cupidatat.",
  },
  {
    id: 2,
    duration: "Nov 2023 - Feb 2024",
    workplace: "Generation Thailand",
    url: "https://thailand.generation.org",
    title: "Junior Software Developer Bootcamp",
    desc: "Officia consequat eiusmod in cupidatat duis. Tempor exercitation dolor commodo quis labore id irure et elit. Sunt ipsum minim nulla. Cupidatat.",
  },
  {
    id: 3,
    duration: "Nov 2028 - Dec 2022",
    workplace: "Glow Story",
    url: "https://glowyourstory.com",
    title: "Project Manager + Operations Management",
    desc: "Officia consequat eiusmod in cupidatat duis. Tempor exercitation dolor commodo quis labore id irure et elit. Sunt ipsum minim nulla. Cupidatat.",
  },
];

function WorkExp() {
  return (
    <div className="mx-5 mt-5 flex flex-col self-center rounded-lg bg-slate-600/10 p-10 md:w-8/12">
      <p className="font-fkDisplay text-2xl font-bold">Experiences</p>
      <div className="mt-3 flex flex-col space-y-3">
        {experiences.map((experience) => (
          <WorkExpCard key={experience.id} experience={experience} />
        ))}
      </div>
    </div>
  );
}

export default WorkExp;
