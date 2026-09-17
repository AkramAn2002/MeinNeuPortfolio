import useEmblaCarousel from "embla-carousel-react";
import ProjectCard from "./ProjectCard";

const ProjectCarousel = ({ projects, onSelect }) => {
  const [emblaRef] = useEmblaCarousel({
    loop: true,
    align: "start",
    containScroll: "trimSnaps",
  });

  return (
    <div className="overflow-hidden -mx-5 px-5 sm:mx-0 sm:px-0" ref={emblaRef}>
      <div className="flex gap-4 sm:gap-6 lg:gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="min-w-[86%] sm:min-w-[60%] lg:min-w-[40%] flex-shrink-0"
          >
            <ProjectCard project={project} onClick={() => onSelect(project)} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCarousel;
