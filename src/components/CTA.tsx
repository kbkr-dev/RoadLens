'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Briefcase, Sparkles } from 'lucide-react';

export default function CTA() {
  return (
    <section className="relative py-24 overflow-hidden bg-primary">
      {/* Animated orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-[88px]"
        />
        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan/10 rounded-full blur-[80px]"
        />
      </div>

      {/* Content */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Careers CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500"
          >
            <div className="w-14 h-14 bg-gradient-to-br from-accent to-orange-400 rounded-2xl flex items-center justify-center mb-6">
              <Briefcase className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold font-heading text-white mb-4">
              Join Our Team
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Are you looking for a dynamic work environment where you get to analyze important data and deliver excellent work with international clients?
            </p>
            <Link
              href="/careers"
              className="inline-flex items-center gap-2 text-accent font-semibold hover:text-accent-light transition-colors group"
            >
              View Openings
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Get Started CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="bg-gradient-to-br from-accent to-accent-dark rounded-3xl p-8 hover:shadow-2xl hover:shadow-accent/20 transition-all duration-500"
          >
            <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
              <Sparkles className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold font-heading text-white mb-4">
              Start Your Project
            </h3>
            <p className="text-white/80 leading-relaxed mb-6">
              Ready to unlock actionable traffic insights? Let&apos;s discuss your requirements and build a custom data collection strategy.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-accent font-semibold rounded-full hover:shadow-lg transform hover:-translate-y-0.5 transition-all group"
            >
              Get a Free Quote
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
