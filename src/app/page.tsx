'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowRight,
  Play,
  Eye,
  Radar,
  Activity,
  MapPin,
  Shield,
  Zap,
} from 'lucide-react';
import Stats from '@/components/Stats';
import ImageCarousel from "@/components/ImageCarousel";
import ServicesPreview from '@/components/ServicesPreview';
import ProjectsPreview from '@/components/ProjectsPreview';
import NewsPreview from '@/components/NewsPreview';
import CTA from '@/components/CTA';
import AnimatedSection from '@/components/AnimatedSection';
import ContactForm from '@/components/ContactForm';

const heroFeatures = [
  { icon: Radar, text: 'Traffic Video Data Extraction' },
  { icon: Shield, text: '98%+ Accuracy' },
  { icon: Zap, text: 'Quick Turnaround Time' },
];

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-[#0c1425] to-primary" />

        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
              backgroundSize: '80px 30px',
            }}
          />
        </div>

        {/* Animated gradient orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-accent/8 rounded-full blur-[120px]"
          />
          <motion.div
            animate={{
              x: [0, -80, 0],
              y: [0, 60, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-cyan/6 rounded-full blur-[120px]"
          />
          <motion.div
            animate={{
              x: [0, 40, 0],
              y: [0, -40, 0],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-violet/5 rounded-full blur-[100px]"
          />
        </div>

        {/* Floating icons */}
        <div className="absolute inset-0 overflow-hidden hidden lg:block">
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute top-1/4 right-[15%] w-16 h-16 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl flex items-center justify-center"
          >
            <Activity className="w-7 h-7 text-accent/60" />
          </motion.div>
          <motion.div
            animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 7, repeat: Infinity, delay: 1 }}
            className="absolute top-[60%] right-[10%] w-14 h-14 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl flex items-center justify-center"
          >
            <MapPin className="w-6 h-6 text-cyan/60" />
          </motion.div>
          <motion.div
            animate={{ y: [0, -15, 0], rotate: [0, 3, 0] }}
            transition={{ duration: 8, repeat: Infinity, delay: 2 }}
            className="absolute top-[48%] right-[25%] w-12 h-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl flex items-center justify-center"
          >
            <Eye className="w-5 h-5 text-violet/60" />
          </motion.div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-0">
          <div className="max-w-3xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 text-white/80 text-sm rounded-full mb-8">
                <span className="w-2 h-2 bg-emerald rounded-full animate-pulse" />
                Global Coverage with Local Support
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold font-heading text-white leading-[1.1] mb-6"
            >
              See the Road{' '}
              <span className="relative inline-block pb-2 sm:pb-3">
  <span className="gradient-text relative z-10">Clearly</span>
  <motion.div
    initial={{ width: 0 }}
    animate={{ width: '100%' }}
    transition={{ duration: 0.8, delay: 1 }}
    className="absolute bottom-0 left-0 h-[3px] sm:h-[4px] bg-gradient-to-r from-accent to-cyan rounded-full"
  />
</span>
              <br />
              With Data That <span className="text-accent">Drives</span> Decisions
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-lg sm:text-xl text-gray-400 max-w-xl mb-10 leading-relaxed"
            >
              Expert traffic video data extraction with global coverage. Customized solutions for diverse client needs
              across UK, USA, Australia, Dubai, Europe, India & more.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="flex flex-wrap gap-4 mb-14"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent to-accent-dark text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-accent/25 transform hover:-translate-y-0.5 transition-all duration-300"
              >
                Start Your Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/15 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
              >
                <Play className="w-4 h-4" />
                View Our Work
              </Link>
            </motion.div>

            {/* Mini features */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              className="flex flex-wrap gap-6"
            >
              {heroFeatures.map((feature, i) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + i * 0.15 }}
                  className="flex items-center gap-2 text-gray-400 text-sm"
                >
                  <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-4 h-4 text-accent" />
                  </div>
                  {feature.text}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-white/30 text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-1">
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-3 bg-accent rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* STATS */}
      <Stats />

      {/* IMAGE CAROUSEL */}
      <ImageCarousel />

      {/* WHO WE ARE */}
      <section className="py-24 bg-white mesh-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent/10 text-accent text-sm font-semibold rounded-full mb-4">
                Who We Are
              </span>
              <h2 className="text-3xl md:text-5xl font-bold font-heading text-primary mb-6">
                Traffic Video <span className="gradient-text">Data Extraction</span> Experts
              </h2>
              <p className="text-muted leading-relaxed mb-6 text-lg">
                RoadLens specializes in traffic video data extraction with global coverage and local support. We deliver
                customized solutions for diverse client needs across the UK, USA, Australia, Dubai, Europe, India and
                beyond.
              </p>
              <p className="text-muted leading-relaxed mb-8">
                With 98%+ data accuracy, quick turnaround time, and competitive pricing, we are the trusted partner for
                traffic data collection and analysis worldwide.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all group"
              >
                Learn More About Us
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <div className="relative">
                {/* Decorative cards */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    {
                      title: 'High Accuracy',
                      desc: '98%+ data accuracy across all projects',
                      color: 'from-orange-50 to-amber-50 border-orange-100',
                    },
                    {
                      title: 'Global Coverage',
                      desc: 'UK, USA, Australia, Dubai, Europe, India & more',
                      color: 'from-cyan-50 to-blue-50 border-cyan-100',
                    },
                    {
                      title: 'Quick TAT',
                      desc: 'Fast turnaround time with quality assurance',
                      color: 'from-violet-50 to-purple-50 border-violet-100',
                    },
                    {
                      title: 'Competitive Pricing',
                      desc: 'Best value without compromising on quality',
                      color: 'from-emerald-50 to-green-50 border-emerald-100',
                    },
                  ].map((card, i) => (
                    <motion.div
                      key={card.title}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      whileHover={{ y: -5, scale: 1.02 }}
                      className={`p-6 rounded-2xl bg-gradient-to-br ${card.color} border hover:shadow-lg transition-all duration-300`}
                    >
                      <h4 className="font-bold text-primary mb-1">{card.title}</h4>
                      <p className="text-muted text-sm">{card.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <ServicesPreview />

      {/* PROJECTS */}
      <ProjectsPreview />

      {/* NEWS */}
      <NewsPreview />

      {/* CTA */}
      <CTA />

      {/* CONTACT PREVIEW */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <AnimatedSection direction="left">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent/10 text-accent text-sm font-semibold rounded-full mb-4">
                Get In Touch
              </span>
              <h2 className="text-3xl md:text-5xl font-bold font-heading text-primary mb-6">
                Let&apos;s <span className="gradient-text">Talk</span>
              </h2>
              <p className="text-muted leading-relaxed mb-8 text-lg">
                We provide global coverage with local support. If you have business enquiries or need traffic data
                solutions, feel free to reach out. Our team responds within 24 hours.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Headquarters</h4>
                    <p className="text-muted text-sm">
                      RoadLens Analytics HQ, Tech District, Bangalore 560068, Karnataka, India
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cyan/10 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-cyan" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">USA Office</h4>
                    <p className="text-muted text-sm">RoadLens Inc, 235 NE Loop 820, Ste 206, Hurst, Texas 76053</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <div className="bg-surface rounded-3xl p-8 border border-gray-100">
                <ContactForm />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
