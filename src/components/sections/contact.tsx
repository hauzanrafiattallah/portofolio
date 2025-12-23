"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Copy,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contactInfo, socialLinks } from "@/data";
import { useCopyToClipboard, useContactForm } from "@/hooks";

const iconMap = {
  Email: Mail,
  Phone: Phone,
  Location: MapPin,
};

const socialIconMap = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Twitter: Twitter,
  Instagram: Instagram,
  Email: Mail,
};

export function Contact() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { copy, isCopied } = useCopyToClipboard();
  const { isSubmitting, isSubmitted, submit } = useContactForm();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    await submit(formData);
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/3 w-[25rem] h-[25rem] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-[25rem] h-[25rem] bg-purple-500/5 rounded-full blur-3xl" />
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
            <span className="text-primary font-medium">Get In Touch</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4">
              Let&apos;s Work{" "}
              <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Together
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-pink-500 mx-auto rounded-full mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind or just want to chat? I&apos;d love to hear from you. 
              Drop me a message and I&apos;ll get back to you as soon as possible.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-2 space-y-8"
            >
              {/* Contact Cards */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = iconMap[info.label as keyof typeof iconMap];
                  return (
                    <motion.div
                      key={info.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                      className="group relative"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="relative flex items-center gap-4 p-4 rounded-xl bg-muted/50 border border-border hover:border-primary/50 transition-colors">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary to-purple-500 flex items-center justify-center flex-shrink-0">
                          {Icon && <Icon className="w-5 h-5 text-white" />}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm text-muted-foreground">{info.label}</div>
                          {info.href ? (
                            <a
                              href={info.href}
                              className="text-foreground font-medium hover:text-primary transition-colors truncate block"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <span className="text-foreground font-medium truncate block">
                              {info.value}
                            </span>
                          )}
                        </div>
                        {info.href && (
                          <button
                            onClick={() => copy(info.value, info.label)}
                            className="p-2 rounded-lg hover:bg-background transition-colors"
                          >
                            {isCopied(info.label) ? (
                              <Check className="w-4 h-4 text-green-500" />
                            ) : (
                              <Copy className="w-4 h-4 text-muted-foreground" />
                            )}
                          </button>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <h3 className="text-lg font-semibold mb-4">Connect with me</h3>
                <div className="flex gap-3">
                  {socialLinks.filter(s => s.name !== "Email").map((social) => {
                    const Icon = socialIconMap[social.name as keyof typeof socialIconMap];
                    return (
                      <motion.a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-12 h-12 rounded-xl bg-muted/50 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                      >
                        {Icon && <Icon className="w-5 h-5" />}
                      </motion.a>
                    );
                  })}
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="lg:col-span-3"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.3, delay: 0.4 }}
                  >
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      required
                      className="bg-muted/50 border-border focus:border-primary"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.3, delay: 0.45 }}
                  >
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      required
                      className="bg-muted/50 border-border focus:border-primary"
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.5 }}
                >
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="How can I help you?"
                    required
                    className="bg-muted/50 border-border focus:border-primary"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.55 }}
                >
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project..."
                    rows={6}
                    required
                    className="bg-muted/50 border-border focus:border-primary resize-none"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.6 }}
                >
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting || isSubmitted}
                      className={`w-full ${
                        isSubmitted
                          ? "bg-green-500 hover:bg-green-500"
                          : "bg-gradient-to-r from-primary via-purple-500 to-pink-500 hover:opacity-90"
                      } text-white transition-all`}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </div>
                      ) : isSubmitted ? (
                        <div className="flex items-center gap-2">
                          <Check className="w-5 h-5" />
                          Message Sent!
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <Send className="w-5 h-5" />
                          Send Message
                        </div>
                      )}
                    </Button>
                  </motion.div>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
