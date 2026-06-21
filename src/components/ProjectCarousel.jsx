import useEmblaCarousel from "embla-carousel-react";
import ProjectCard from "./ProjectCard";

const ProjectCarousel = ({ projects, onSelect }) => {
  const [emblaRef] = useEmblaCarousel({
    loop: true,
    align: "start",
  });

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex gap-10">
        {projects.map((project, index) => (
          <div key={index} className="min-w-[80%] lg:min-w-[40%]">
            <ProjectCard project={project} onClick={() => onSelect(project)} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCarousel;
