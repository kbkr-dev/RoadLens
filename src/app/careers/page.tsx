'use client';

import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';
import {
  MapPin,
  Clock,
  Briefcase,
  ArrowRight,
  Users,
  Globe,
  Zap,
  Heart,
} from 'lucide-react';
import Link from 'next/link';

const openings = [
  {
    title: 'Senior Traffic Data Analyst',
    department: 'Analytics',
    location: 'Bangalore, India',
    type: 'Full-time',
    experience: '3-5 years',
    description:
      'Analyze and interpret traffic data from video-graphic surveys, ATCC systems, and manual counts. Generate detailed reports using classification schemes like FMA, AUSTROADS, and custom formats.',
    gradient: 'from-accent to-orange-400',
  },
  {
    title: 'Field Survey Coordinator',
    department: 'Operations',
    location: 'Chennai / Hyderabad, India',
    type: 'Full-time',
    experience: '2-4 years',
    description:
      'Coordinate on-ground traffic survey operations including team deployment, equipment setup, and data quality assurance for multi-location projects.',
    gradient: 'from-cyan to-blue-400',
  },
  {
    title: 'GIS & Transportation Planner',
    department: 'Planning',
    location: 'Bangalore, India',
    type: 'Full-time',
    experience: '2-5 years',
    description:
      'Create geospatial visualizations and transportation models using GIS software. Support feasibility studies, traffic impact assessments, and urban mobility planning.',
    gradient: 'from-violet to-purple-400',
  },
  {
    title: 'Business Development Manager USA',
    department: 'Sales',
    location: 'Hurst, Texas, USA',
    type: 'Full-time',
    experience: '5+ years',
    description:
      'Drive business growth in the North American market. Build relationships with transport authorities, consultants, and DOTs to expand our offshore analysis services.',
    gradient: 'from-emerald to-green-400',
  },
  {
    title: 'Video Analytics Engineer',
    department: 'Technology',
    location: 'Bangalore, India (Hybrid)',
    type: 'Full-time',
    experience: '2-4 years',
    description:
      'Develop and optimize computer vision models for automated traffic counting, vehicle classification, and movement detection from video feeds.',
    gradient: 'from-rose-500 to-pink-400',
  },
  {
    title: 'Junior Traffic Survey Associate',
    department: 'Operations',
    location: 'Multiple Locations, India',
    type: 'Full-time',
    experience: '0-2 years',
    description:
      'Participate in on-ground traffic data collection surveys, assist with video-graphic recording, and support data entry and preliminary analysis tasks.',
    gradient: 'from-indigo-500 to-blue-400',
  },
];

const benefits = [
  {
    icon: Globe,
    text: 'Work with international clients across UK, USA, Australia, Dubai, Europe & India',
  },
  { icon: Zap, text: 'Cutting-edge video data extraction technology' },
  { icon: Users, text: 'Collaborative and growing team' },
  { icon: Heart, text: 'Health insurance and wellness programs' },
  { icon: Briefcase, text: 'Career growth and learning opportunities' },
  { icon: MapPin, text: 'Flexible work locations' },
];

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-primary">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-[#0c1425] to-primary" />

        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
              backgroundSize: '80px 80px',
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 text-white/80 text-sm rounded-full mb-6"
          >
            Join Our Team
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold font-heading text-white mb-6"
          >
            Build the Future of <span className="gradient-text">Mobility</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Join a dynamic team where you analyze and interpret critical transportation data, work with international
            clients, and deliver innovative solutions.
          </motion.p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-24 bg-white mesh-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent/10 text-accent text-sm font-semibold rounded-full mb-4">
              Why RoadLens
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-4">
              Why You&apos;ll <span className="gradient-text">Love</span> Working Here
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => (
              <motion.div
                key={benefit.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-gray-100 hover:shadow-md hover:border-accent/20 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                  <benefit.icon className="w-5 h-5 text-accent" />
                </div>
                <span className="text-sm font-medium text-gray-700">{benefit.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-cyan/10 text-cyan-dark text-sm font-semibold rounded-full mb-4">
              Open Positions
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-4">
              Current <span className="gradient-text">Openings</span>
            </h2>
            <p className="text-muted max-w-xl mx-auto">
              Explore our open positions and find where you can make an impact.
            </p>
          </AnimatedSection>

          <div className="space-y-4">
            {openings.map((job, i) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg hover:border-accent/20 transition-all duration-300 group"
              >
                <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${job.gradient} rounded-xl flex items-center justify-center shrink-0`}
                  >
                    <Briefcase className="w-5 h-5 text-white" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg font-bold font-heading text-primary group-hover:text-accent transition-colors">
                      {job.title}
                    </h3>
                    <p className="text-muted text-sm mt-1 mb-2 line-clamp-2">{job.description}</p>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-muted-light">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {job.type}
                      </span>
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-3 h-3" />
                        {job.experience}
                      </span>
                      <span className="px-2 py-0.5 bg-gray-100 rounded-full">{job.department}</span>
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-accent to-accent-dark text-white text-sm font-semibold rounded-full hover:shadow-lg hover:shadow-accent/25 transition-all group/btn shrink-0"
                  >
                    Apply
                    <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* General CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-4">
              Don&apos;t see your role?
            </h2>
            <p className="text-muted text-lg mb-8">
              We&apos;re always looking for talented individuals. Send us your resume and we&apos;ll reach out when a
              suitable opportunity arises.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r from-accent to-accent-dark text-white font-semibold rounded-full hover:shadow-lg hover:shadow-accent/25 transition-all group"
              >
                Send Your Resume
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="mailto:careers@roadlens.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition-all"
              >
                careers@roadlens.com
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
