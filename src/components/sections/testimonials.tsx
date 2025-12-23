"use client";

import { Button } from "@/components/ui/button";
import { testimonials } from "@/data";
import { useCarousel } from "@/hooks";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import * as React from "react";

export function Testimonials() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { currentIndex, next, prev, goTo, pauseAutoPlay, resumeAutoPlay } = useCarousel(testimonials.length);

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-0 w-[30rem] h-[30rem] bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-0 w-[30rem] h-[30rem] bg-pink-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="text-primary font-medium">Testimonials</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4">
              What Clients{" "}
              <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Say About Me
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-pink-500 mx-auto rounded-full" />
          </motion.div>

          {/* Testimonial Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
            onMouseEnter={pauseAutoPlay}
            onMouseLeave={resumeAutoPlay}
          >
            <div className="overflow-hidden">
              <motion.div
                className="flex"
                initial={false}
                animate={{ x: `-${currentIndex * 100}%` }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="w-full flex-shrink-0 px-4"
                  >
                    <div className="relative p-8 md:p-12 rounded-3xl bg-background border border-border">
                      {/* Quote Icon */}
                      <div className="absolute top-6 right-6 md:top-8 md:right-8">
                        <Quote className="w-12 h-12 text-primary/10" />
                      </div>

                      {/* Stars */}
                      <div className="flex gap-1 mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 text-yellow-500 fill-current"
                          />
                        ))}
                      </div>

                      {/* Content */}
                      <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                        &ldquo;{testimonial.content}&rdquo;
                      </p>

                      {/* Author */}
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-r from-primary via-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg">
                          {testimonial.avatar}
                        </div>
                        <div>
                          <div className="font-semibold text-lg">{testimonial.name}</div>
                          <div className="text-muted-foreground">{testimonial.role}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prev}
                className="rounded-full border-primary/50 hover:bg-primary/10"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goTo(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "bg-primary w-8"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={next}
                className="rounded-full border-primary/50 hover:bg-primary/10"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
