"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Instagram, Mail, Heart } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { navItems, socialLinks } from "@/data";
import { useScrollToSection } from "@/hooks";

const socialIconMap = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Twitter: Twitter,
  Instagram: Instagram,
  Email: Mail,
};

export function Footer() {
  const currentYear = new Date().getFullYear();
  const scrollToSection = useScrollToSection();

  return (
    <footer className="relative bg-muted/30 border-t border-border">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <Link
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("#home");
                }}
                className="text-2xl font-bold bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent"
              >
                Hauzan Rafi Attallah
              </Link>
              <p className="text-muted-foreground text-sm max-w-xs">
                Crafting digital experiences with passion and precision. Let&apos;s build something amazing together.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <nav className="flex flex-col gap-2">
                {navItems.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm text-left w-fit"
                  >
                    {link.name}
                  </button>
                ))}
              </nav>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold">Connect</h3>
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = socialIconMap[social.name as keyof typeof socialIconMap];
                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                    >
                      {Icon && <Icon className="h-5 w-5" />}
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>

        <Separator />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground"
        >
          <p>© {currentYear} Hauzan Rafi Attallah. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart className="h-4 w-4 text-red-500 fill-current" /> using Next.js
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
