import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Comforty E-Commerce",
    description: "A beautiful E-commerce app using Next JS and Tailwind.",
    image: "/projects/project4.png",
    tags: ["Next JS", "TailwindCSS", "Sanity"],
    demoUrl: "https://hackathon-e-commerce-4eep.vercel.app/",
    githubUrl: "https://github.com/UsamaOffical/Hackathon-E-commerce",
  },
  {
    id: 2,
    title: "Cara E-commerce",
    description:
      "Interactive E-commerce website using HTML CSS Javascript.",
    image: "/projects/project5.png",
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://cara-by-usama.vercel.app/",
    githubUrl: "https://github.com/UsamaOffical/HTML-CSS-projects/tree/main/cara",
  },
  {
    id: 3,
    title: "Travel Agency",
    description:
      "Interactive Travel Agency website using HTML CSS Javascript.",
    image: "/projects/project6.png",
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://travel-agency-usama.vercel.app/",
    githubUrl: "https://github.com/UsamaOffical/HTML-CSS-projects/tree/main/travel",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          As I'm learning and growing as a developer, these are some of the projects I've built along the way. I focused on writing clean code, good performance, and creating a smooth experience for users.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/UsamaOffical"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
