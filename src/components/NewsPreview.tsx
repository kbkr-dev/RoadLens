'use client';

import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { Calendar, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const articles = [
  {
    title: 'AI-Powered Traffic Image Analysis: The Future is Here',
    excerpt: 'Discover how advanced AI and computer vision are revolutionizing traffic data collection and analysis for urban mobility.',
    date: '2025-12-15',
    category: 'Technology',
    color: 'from-accent to-orange-400',
  },
  {
    title: 'Smart Urban Mobility: Multi-Modal Transport Planning',
    excerpt: 'Smart approaches to integrating multi-modal transport systems for efficient and sustainable urban planning.',
    date: '2025-09-28',
    category: 'Urban Planning',
    color: 'from-cyan to-blue-400',
  },
  {
    title: 'Video Analytics Interventions for Better Data Collection',
    excerpt: 'How video analytics-based interventions are improving the accuracy and efficiency of traffic data collection worldwide.',
    date: '2025-06-10',
    category: 'Analytics',
    color: 'from-violet to-purple-400',
  },
];

export default function NewsPreview() {
  return (
    <section className="py-24 bg-surface grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-violet/10 text-violet text-sm font-semibold rounded-full mb-4">
            Latest Updates
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-primary mb-4">
            News & <span className="gradient-text">Insights</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto text-lg">
            Stay informed about the latest developments in traffic technology, urban mobility, and data analytics.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1 transition-all duration-500"
            >
              {/* Gradient image placeholder */}
              <div className={`h-48 bg-gradient-to-br ${article.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10" />
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                    {article.category}
                  </span>
                </div>
                {/* Decorative circles */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full" />
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-white/10 rounded-full" />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 text-muted-light text-xs mb-3">
                  <Calendar className="w-3 h-3" />
                  {new Date(article.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </div>
                <h3 className="text-lg font-bold font-heading text-primary mb-3 group-hover:text-accent transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="flex items-center text-accent font-semibold text-sm group-hover:gap-2 transition-all">
                  Read More
                  <ArrowUpRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <AnimatedSection className="text-center mt-12">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition-all duration-300 group"
          >
            View All News
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
