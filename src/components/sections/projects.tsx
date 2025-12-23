"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Github, Folder } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects } from "@/data";

export function Projects() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [filter, setFilter] = React.useState<"all" | "featured">("all");

  const filteredProjects = filter === "featured" 
    ? projects.filter(p => p.featured) 
    : projects;

  return (
    <section id="projects" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-[25rem] h-[25rem] bg-pink-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[25rem] h-[25rem] bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="text-primary font-medium">My Work</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4">
              Featured{" "}
              <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-pink-500 mx-auto rounded-full mb-8" />
            
            {/* Filter Buttons */}
            <div className="flex justify-center gap-2">
              <Button
                variant={filter === "all" ? "default" : "outline"}
                onClick={() => setFilter("all")}
                className={filter === "all" ? "bg-gradient-to-r from-primary to-purple-500" : ""}
              >
                All Projects
              </Button>
              <Button
                variant={filter === "featured" ? "default" : "outline"}
                onClick={() => setFilter("featured")}
                className={filter === "featured" ? "bg-gradient-to-r from-primary to-purple-500" : ""}
              >
                Featured
              </Button>
            </div>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative h-full flex flex-col rounded-2xl bg-background border border-border overflow-hidden group-hover:border-primary/50 transition-all duration-300">
                  {/* Project Image */}
                  <div className="relative h-48 bg-gradient-to-br from-primary/20 via-purple-500/20 to-pink-500/20 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Folder className="w-16 h-16 text-primary/50" />
                    </div>
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
                      <div className="flex gap-2">
                        {project.github && (
                          <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center hover:border-primary transition-colors"
                          >
                            <Github className="w-5 h-5" />
                          </motion.a>
                        )}
                        {project.live && (
                          <motion.a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:opacity-90 transition-opacity"
                          >
                            <ExternalLink className="w-5 h-5 text-white" />
                          </motion.a>
                        )}
                      </div>
                    </div>
                    {/* Featured badge */}
                    {project.featured && (
                      <div className="absolute top-3 right-3">
                        <Badge className="bg-gradient-to-r from-primary to-purple-500 text-white border-0">
                          Featured
                        </Badge>
                      </div>
                    )}
                  </div>

                  {/* Project Content */}
                  <div className="flex-1 p-6">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-xs font-normal"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-center mt-12"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="lg"
                className="border-primary/50 hover:bg-primary/10"
              >
                <Github className="w-4 h-4 mr-2" />
                View All on GitHub
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
