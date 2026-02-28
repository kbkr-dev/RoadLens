'use client';

import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';
import {
  Target,
  Lightbulb,
  Award,
  DollarSign,
  BarChart3,
  Layers,
  Users,
  Clock,
  Globe,
  ArrowRight,
} from 'lucide-react';
import Link from 'next/link';

const takeaways = [
  {
    icon: DollarSign,
    title: 'Competitive Pricing',
    description: 'Best value in the industry without compromising on data quality or accuracy.',
    color: 'from-accent to-orange-400',
  },
  {
    icon: BarChart3,
    title: '98%+ Accuracy',
    description: 'High-quality data backed by rigorous quality control processes across all services.',
    color: 'from-cyan to-blue-400',
  },
  {
    icon: Clock,
    title: 'Quick Turnaround Time',
    description: 'Fast delivery with streamlined workflows and experienced team ensuring on-time results.',
    color: 'from-violet to-purple-400',
  },
  {
    icon: Globe,
    title: 'Global Coverage',
    description: 'Serving clients across UK, USA, Australia, Dubai, Europe, India and more.',
    color: 'from-emerald to-green-400',
  },
  {
    icon: Layers,
    title: 'Customized Solutions',
    description: 'Tailored data extraction services designed to meet your unique project requirements.',
    color: 'from-pink-500 to-rose-400',
  },
  {
    icon: Users,
    title: 'Local Support',
    description: 'Global coverage combined with dedicated local support for every project.',
    color: 'from-indigo-500 to-blue-400',
  },
];

const countriesCovered = ['UK', 'USA', 'Australia', 'Dubai', 'Europe', 'India'];

const timeline = [
  { year: '2014', event: 'Founded in Bangalore with a vision for global traffic data excellence' },
  { year: '2016', event: 'Expanded to serve clients across USA, UK, and Australia' },
  { year: '2018', event: 'Reached 100+ projects milestone with operations in 15+ countries' },
  { year: '2020', event: 'Launched AI-powered video analytics platform for traffic analysis' },
  { year: '2022', event: 'Opened USA office in Texas, 250+ professionals strong' },
  { year: '2024', event: 'Surpassed 50,000 projects completed across 30+ countries' },
  { year: '2026', event: 'Rebranded as RoadLens - Next-gen traffic intelligence platform' },
];

export default function AboutPage() {
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

        <motion.div
          animate={{ x: [0, 80, 0], y: [0, -40, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute -top-20 -right-20 w-96 h-96 bg-accent/8 rounded-full blur-[120px]"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 text-white/80 text-sm rounded-full mb-6"
          >
            About RoadLens
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold font-heading text-white mb-6"
          >
            Driving <span className="gradient-text">Intelligence</span>
            <br />
            Into Every Road
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            From a team of pioneers to a global presence, our journey has been about delivering expert traffic video
            data extraction with global coverage and local support.
          </motion.p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-white mesh-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent/10 text-accent text-sm font-semibold rounded-full mb-4">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-6">
                From Data to <span className="gradient-text">Decisions</span>
              </h2>
              <p className="text-muted leading-relaxed mb-6">
                RoadLens is a global provider of traffic video data extraction services. We specialize in extracting
                accurate traffic data from video footage, serving clients across the UK, USA, Australia, Dubai, Europe,
                India and beyond.
              </p>
              <p className="text-muted leading-relaxed mb-6">
                Our services include ATCC, Turning Movement Counts, Link & Midblock Counts, Roundabout Counts,
                Pedestrian Counts, ANPR, Signal Timing & Queue Length Analysis, Parking Surveys, Journey Time
                Analysis, and many more specialized services.
              </p>
              <p className="text-muted leading-relaxed">
                With 98% data accuracy, quick turnaround time, and competitive pricing, we deliver customized solutions
                for diverse client needs worldwide.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              {/* Timeline */}
              <div className="relative pl-8 border-l-2 border-gray-200 space-y-8">
                {timeline.map((item, i) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="relative"
                  >
                    <div className="absolute -left-[25px] w-4 h-4 bg-gradient-to-br from-accent to-cyan rounded-full border-4 border-white" />
                    <div className="text-accent font-bold text-sm mb-1">{item.year}</div>
                    <p className="text-muted text-sm leading-relaxed">{item.event}</p>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Quality */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-primary mb-4">
              What <span className="gradient-text">Guides</span> Us
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: 'Vision',
                text: 'To be a global leader in traffic and transportation data collection and analysis services. Become the preferred partner for visionaries building efficient transportation infrastructure.',
                gradient: 'from-accent to-orange-400',
              },
              {
                icon: Lightbulb,
                title: 'Mission',
                text: 'To provide world-class services by delivering reliable & accurate data to customers, enabling them to build scalable and efficient traffic solutions that transform urban mobility.',
                gradient: 'from-cyan to-blue-400',
              },
              {
                icon: Award,
                title: 'Quality Policy',
                text: 'We strive to provide high-quality and reliable traffic data with the highest level of accuracy, meeting client requirements based on experience to establish a long-lasting partnership.',
                gradient: 'from-violet to-purple-400',
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-white rounded-3xl p-8 border border-gray-100 hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1 transition-all duration-500 group"
              >
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold font-heading text-primary mb-4">{item.title}</h3>
                <p className="text-muted leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="py-24 bg-white grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald/10 text-emerald text-sm font-semibold rounded-full mb-4">
              Why Partner With Us
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-primary mb-4">
              Key <span className="gradient-text">Takeaways</span>
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {takeaways.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:shadow-black/5 transition-all duration-300 group"
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Countries Covered */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-4">
              Countries <span className="gradient-text">Covered</span>
            </h2>
            <p className="text-muted max-w-xl mx-auto">
              Global coverage with local support - delivering traffic data extraction services wherever you need them.
            </p>
          </AnimatedSection>

          <div className="flex flex-wrap justify-center gap-6">
            {countriesCovered.map((country, i) => (
              <motion.div
                key={country}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="px-10 py-5 bg-white rounded-2xl border border-gray-100 hover:border-accent/30 hover:shadow-md transition-all duration-300 group"
              >
                <span className="text-lg font-bold text-muted group-hover:text-accent transition-colors">{country}</span>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-muted mt-6">& many more countries worldwide</p>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-cyan/10 text-cyan-dark text-sm font-semibold rounded-full mb-4">
              Our People
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-primary mb-4">
              The <span className="gradient-text">Team</span>
            </h2>
            <p className="text-muted max-w-2xl mx-auto text-lg">
              Our team carries a mix of experience and fresh enthusiasm that drives excellence in every traffic data
              extraction project.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Arjun Sharma', role: 'Founder & CEO', gradient: 'from-accent to-orange-300' },
              { name: 'Priya Desai', role: 'Director of Operations', gradient: 'from-cyan to-blue-300' },
              { name: 'Michael Chen', role: 'Head of Analytics', gradient: 'from-violet to-purple-300' },
              { name: 'Sarah Williams', role: 'VP, USA Operations', gradient: 'from-emerald to-green-300' },
            ].map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div
                  className={`h-56 rounded-2xl bg-gradient-to-br ${member.gradient} mb-4 relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors" />
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-white/10 rounded-full" />
                  <div className="absolute -top-4 -left-4 w-20 h-20 bg-white/10 rounded-full" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3">
                      <Globe className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
                <h4 className="font-bold text-primary">{member.name}</h4>
                <p className="text-muted text-sm">{member.role}</p>
              </motion.div>
            ))}
          </div>

          <AnimatedSection className="text-center mt-12">
            <Link
              href="/careers"
              className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all group"
            >
              Join Our Growing Team
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
