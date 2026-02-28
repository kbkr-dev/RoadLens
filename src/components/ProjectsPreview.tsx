'use client';

import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { ArrowUpRight, MapPin, Calendar } from 'lucide-react';
import Link from 'next/link';

const projects = [
  {
    title: 'Regional Logistics Traffic Study SASEC Program',
    category: 'Traffic & Transportation',
    location: 'Multi-state, India',
    year: '2025',
    description: 'Extensive traffic surveys across 130+ strategic locations supporting the South Asia Subregional Economic Cooperation program.',
    gradient: 'from-orange-500 to-amber-400',
  },
  {
    title: 'Metro Station Commuter Behavior Study',
    category: 'Origin-Destination Survey',
    location: 'Bengaluru, India',
    year: '2024',
    description: 'In-depth commuter travel behavior study covering 9,000 respondents across metro stations to evaluate travel patterns and accessibility.',
    gradient: 'from-cyan to-blue-500',
  },
  {
    title: 'Speed Data Collection & Risk Analysis',
    category: 'Spot Speed Survey',
    location: 'Mumbai, India',
    year: '2024',
    description: 'Comprehensive speed data collection across 15 key locations in Mumbai using radar guns and real-time digital recording.',
    gradient: 'from-violet to-purple-500',
  },
  {
    title: 'Electric Three-wheeler Transition Study',
    category: 'Public Opinion Survey',
    location: 'Tamil Nadu, India',
    year: '2024',
    description: 'Opinion survey and focus group discussions on transitioning from traditional fuel-based autos to electric three-wheelers.',
    gradient: 'from-emerald to-teal-500',
  },
  {
    title: 'Metrolite / Metro Neo Traffic Study',
    category: 'Traffic & Transportation',
    location: 'Gujarat, India',
    year: '2023',
    description: 'Complete traffic study for Gujarat Metro Rail Corporation covering video-graphic surveys, OD surveys, and household studies.',
    gradient: 'from-rose-500 to-pink-400',
  },
  {
    title: 'Bus Depot Modernization Feasibility',
    category: 'Traffic Survey',
    location: 'Chennai, India',
    year: '2024',
    description: 'Comprehensive traffic surveys across 11 major bus stations covering passenger flow, IPT surveys, and parking analysis.',
    gradient: 'from-indigo-500 to-blue-400',
  },
];

export default function ProjectsPreview() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-cyan/10 text-cyan-dark text-sm font-semibold rounded-full mb-4">
            Our Portfolio
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-primary mb-4">
            Recent <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto text-lg">
            Delivering data-driven insights that shape the future of transportation infrastructure across the globe.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1 transition-all duration-500"
            >
              {/* Gradient header */}
              <div className={`h-3 bg-gradient-to-r ${project.gradient}`} />

              <div className="p-6">
                {/* Category badge */}
                <span className="inline-block px-3 py-1 bg-gray-100 text-muted text-xs font-medium rounded-full mb-4">
                  {project.category}
                </span>

                <h3 className="text-lg font-bold font-heading text-primary mb-3 group-hover:text-accent transition-colors line-clamp-2">
                  {project.title}
                </h3>

                <p className="text-muted text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex items-center gap-4 text-xs text-muted-light mb-4">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {project.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {project.year}
                  </span>
                </div>

                <div className="flex items-center text-accent font-semibold text-sm group-hover:gap-2 transition-all">
                  View Details
                  <ArrowUpRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatedSection className="text-center mt-12">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition-all duration-300 group"
          >
            View All Projects
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
