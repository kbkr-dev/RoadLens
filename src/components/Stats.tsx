'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Globe, FolderOpen, Trophy } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: 98,
    suffix: '%',
    label: 'Data Accuracy',
    color: 'from-accent to-orange-400',
  },
  {
    icon: Globe,
    value: 6,
    suffix: '+',
    label: 'Countries Covered',
    color: 'from-cyan to-blue-400',
  },
  {
    icon: FolderOpen,
    value: 15,
    suffix: '+',
    label: 'Service Categories',
    color: 'from-emerald to-green-400',
  },
  {
    icon: Trophy,
    value: 100,
    suffix: '%',
    label: 'Client Satisfaction',
    color: 'from-violet to-purple-400',
  },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current > target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, target]);

  const formatNumber = (num: number) => {
    if (num >= 1000) return `${(num / 1000).toFixed(1)}k`;
    return num.toString();
  };

  return (
    <span
      ref={ref}
      className="text-4xl md:text-5xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r from-accent via-cyan to-violet"
    >
      {formatNumber(count)}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="relative py-20 overflow-hidden bg-primary">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-accent rounded-full blur-[100px]" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="text-center group"
            >
              <div className="relative inline-flex mb-4">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                >
                  <stat.icon className="w-7 h-7 text-white" />
                </div>
              </div>
              <div className="text-white">
                <Counter target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-gray-400 mt-2 text-sm font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
