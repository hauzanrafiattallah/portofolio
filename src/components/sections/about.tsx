"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import { Code2, Coffee, Users, Trophy } from "lucide-react";
import { stats } from "@/data";
import { useAnimatedCounter } from "@/hooks";

const iconMap = {
  "Projects Completed": Code2,
  "Happy Clients": Users,
  "Cups of Coffee": Coffee,
  "Years Experience": Trophy,
};

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const { count, ref } = useAnimatedCounter(value);
  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function About() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-pink-500/5 rounded-full blur-3xl" />
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
            <span className="text-primary font-medium">About Me</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4">
              Turning Ideas Into{" "}
              <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Digital Reality
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-pink-500 mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Image/Visual */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-square max-w-md mx-auto">
                {/* Decorative rings */}
                <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-pulse" />
                <div className="absolute inset-4 rounded-full border-2 border-purple-500/20 animate-pulse delay-300" />
                <div className="absolute inset-8 rounded-full border-2 border-pink-500/20 animate-pulse delay-500" />
                
                {/* Center content */}
                <div className="absolute inset-12 rounded-full bg-gradient-to-br from-primary/20 via-purple-500/20 to-pink-500/20 backdrop-blur-sm flex items-center justify-center">
                  <div className="text-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-r from-primary via-purple-500 to-pink-500 p-[2px]"
                    >
                      <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                        <Code2 className="w-10 h-10 text-primary" />
                      </div>
                    </motion.div>
                    <span className="text-2xl font-bold bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">
                      Developer
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-6"
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                Hello! I&apos;m <span className="text-foreground font-semibold">Hauzan Rafi Attallah</span>, 
                a passionate developer based in Indonesia. I specialize in creating beautiful, 
                functional, and user-centered digital experiences.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With a strong foundation in both front-end and back-end technologies, 
                I bring ideas to life through clean code and thoughtful design. 
                I&apos;m constantly learning and exploring new technologies to stay at 
                the forefront of web development.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I&apos;m not coding, you&apos;ll find me exploring new technologies, 
                contributing to open-source projects, or sharing knowledge with 
                the developer community.
              </p>

              {/* Tech badges */}
              <div className="flex flex-wrap gap-2 pt-4">
                {["React", "Next.js", "TypeScript", "Node.js", "Tailwind"].map((tech, i) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                    className="px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => {
              const Icon = iconMap[stat.label as keyof typeof iconMap];
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative p-6 rounded-2xl bg-muted/50 border border-border hover:border-primary/50 transition-colors text-center">
                    {Icon && <Icon className="w-8 h-8 mx-auto mb-3 text-primary" />}
                    <div className="text-3xl md:text-4xl font-bold mb-1">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
