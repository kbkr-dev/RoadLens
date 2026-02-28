'use client';

import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import {
  BarChart3,
  Crosshair,
  Route,
  CircleDot,
  Footprints,
  ScanLine,
  Timer,
  TrendingUp,
  ArrowRight,
} from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    id: 'atcc',
    icon: BarChart3,
    title: 'ATCC',
    description: 'Automatic Traffic Counter & Classifier for continuous traffic monitoring and vehicle classification.',
    color: 'from-accent to-orange-400',
    bgColor: 'bg-orange-50',
  },
  {
    id: 'tmc',
    icon: Crosshair,
    title: 'Turning Movement Count',
    description: 'Precise directional traffic flow analysis at intersections and junctions for signal optimization.',
    color: 'from-cyan to-blue-400',
    bgColor: 'bg-cyan-50',
  },
  {
    id: 'link-midblock',
    icon: Route,
    title: 'Link & Midblock Counts',
    description: 'Comprehensive traffic volume data collection on road links and midblock sections.',
    color: 'from-violet to-purple-400',
    bgColor: 'bg-violet-50',
  },
  {
    id: 'roundabout',
    icon: CircleDot,
    title: 'Roundabout Counts & Tracking',
    description: 'Specialized roundabout traffic analysis including entry/exit counts and vehicle tracking.',
    color: 'from-emerald to-green-400',
    bgColor: 'bg-emerald-50',
  },
  {
    id: 'pedestrian',
    icon: Footprints,
    title: 'Pedestrian Counts & TMC',
    description: 'Detailed pedestrian movement counting combined with Turning Movement Counts for multimodal analysis.',
    color: 'from-pink-500 to-rose-400',
    bgColor: 'bg-pink-50',
  },
  {
    id: 'anpr',
    icon: ScanLine,
    title: 'ANPR Count',
    description: 'Automatic Number Plate Recognition for vehicle identification, journey time and OD studies.',
    color: 'from-teal-500 to-cyan',
    bgColor: 'bg-teal-50',
  },
  {
    id: 'signal-timing',
    icon: Timer,
    title: 'Signal Timing & Queue Length',
    description: 'Traffic signal timing studies and queue length measurement at signalized intersections.',
    color: 'from-orange-500 to-red-400',
    bgColor: 'bg-orange-50',
  },
  {
    id: 'journey-time',
    icon: TrendingUp,
    title: 'Journey Time Analysis',
    description: 'Travel time measurement and analysis for route performance evaluation and congestion assessment.',
    color: 'from-fuchsia-500 to-pink-400',
    bgColor: 'bg-fuchsia-50',
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-24 bg-white grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent/10 text-accent text-sm font-semibold rounded-full mb-4">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-primary mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto text-lg">
            Comprehensive traffic video data extraction services with 98%+ accuracy, quick turnaround time, and competitive pricing.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:shadow-black/5 hover:border-accent/20 transition-all duration-300 group"
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <service.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <AnimatedSection className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-accent to-accent-dark text-white font-semibold rounded-full hover:shadow-lg hover:shadow-accent/25 transform hover:-translate-y-0.5 transition-all duration-300 group"
          >
            View All 15 Services
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
