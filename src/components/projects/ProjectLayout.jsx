import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const item = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};

const ProjectLink = motion(Link);
const ProjectLayout = ({ name, description, demoLink, thumbnail, tools }) => {
  return (
    <ProjectLink
      variants={item}
      href={demoLink}
      target={"_blank"}
      className="text-sm md:text-base flex flex-col md:flex-row items-start md:items-center w-full relative rounded-lg overflow-hidden p-4 md:p-6 custom-bg hover:border-accent/50 transition-colors border border-transparent"
    >
      {/* Project Image */}
      {thumbnail && (
        <div className="w-full md:w-32 h-32 md:h-20 relative rounded-lg overflow-hidden mb-4 md:mb-0 md:mr-4 flex-shrink-0">
          <Image
            src={thumbnail}
            alt={name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 128px"
          />
        </div>
      )}
      
      {/* Project Content */}
      <div className="flex-1 min-w-0">
        <div className="flex flex-col space-y-2">
          <h2 className="text-foreground font-semibold text-lg">{name}</h2>
          <p className="text-muted text-sm leading-relaxed">{description}</p>
          
          {/* Technology Icons */}
          {tools && tools.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
              {tools.map((tool, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-accent/20 text-accent text-xs rounded-md font-medium"
                >
                  {tool}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </ProjectLink>
  );
};

export default ProjectLayout;
