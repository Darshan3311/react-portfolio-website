import { useState } from "react";
import { ExternalLink, Github, Maximize, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Landing Page Portfolio",
    description: "A responsive landing page for showcasing my portfolio.",
    image: "/Projects/i1.png",
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://darshanjadhav.netlify.app/",
    githubUrl: "https://github.com/darshanjadhav/landing-page",
  },
  {
    id: 2,
    title: "E-commerce Website",
    description:
      "A full-featured e-commerce website with product listings, shopping cart, and checkout functionality.",
    image: "/Projects/i2.png",
    tags: ["HTML", "CSS", "JavaScript", "React"],
    demoUrl: "https://darshanjadhav.netlify.app/",
    githubUrl: "https://github.com/darshanjadhav/e-commerce-website",
  },
  {
    id: 3,
    title: "Personal Blog",
    description: "A blog website to share my thoughts and experiences.",
    image: "/Projects/image.png",
    tags: ["HTML", "CSS", "JavaScript", "React"],
    demoUrl: "https://darshanjadhav.netlify.app/",
    githubUrl: "https://github.com/darshanjadhav/personal-blog",
  },
];

export const ProjectSection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold md:text-4xl mb-6 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Explore the live demos and check
          out the source code.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              {/* Project Image */}
              <div className="h-48 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Project Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-secondary text-secondary-foreground rounded-full px-3 py-1 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links & View Image */}
                <div className="flex items-center gap-4 mt-auto">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                  >
                    <Github size={16} /> Source Code
                  </a>
                  <button
                    onClick={() => setSelectedImage(project.image)}
                    className="ml-auto flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                  >
                    <Maximize size={16} /> View Image
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="relative max-w-5xl w-full px-4">
              <img
                src={selectedImage}
                alt="Full Project"
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black transition"
              >
                <X size={20} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
