"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import {
  Code2,
  Palette,
  Database,
  Smartphone,
  Globe,
  Zap,
  Server,
  GitBranch,
} from "lucide-react";
import { skills, services } from "@/data";

const categoryIcons = {
  Frontend: Code2,
  Backend: Server,
  Database: Database,
  "Tools & Others": GitBranch,
};

const serviceIcons = {
  "Web Development": Globe,
  "Mobile-First Design": Smartphone,
  "UI/UX Design": Palette,
  "Performance Optimization": Zap,
};

export function Skills() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 md:py-32 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-0 w-[20rem] h-[20rem] bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-[20rem] h-[20rem] bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="text-primary font-medium">Skills & Services</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4">
              What I{" "}
              <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Bring to the Table
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-pink-500 mx-auto rounded-full" />
          </motion.div>

          {/* Services Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {services.map((service, index) => {
              const Icon = serviceIcons[service.title as keyof typeof serviceIcons];
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative p-6 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all h-full">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary to-purple-500 flex items-center justify-center mb-4">
                      {Icon && <Icon className="w-6 h-6 text-white" />}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((category, categoryIndex) => {
              const Icon = categoryIcons[category.category as keyof typeof categoryIcons];
              return (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + categoryIndex * 0.1 }}
                  className="p-6 rounded-2xl bg-background border border-border"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                      {Icon && <Icon className="w-5 h-5 text-white" />}
                    </div>
                    <h3 className="text-xl font-semibold">{category.category}</h3>
                  </div>
                  <div className="space-y-4">
                    {category.items.map((skill, skillIndex) => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="h-2 rounded-full bg-muted overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${skill.level}%` } : {}}
                            transition={{ duration: 1, delay: 0.5 + categoryIndex * 0.1 + skillIndex * 0.1 }}
                            className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
