'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, Loader2 } from 'lucide-react';

interface ContactFormProps {
  variant?: 'default' | 'dark';
}

export default function ContactForm({ variant = 'default' }: ContactFormProps) {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'sent'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('sending');

    setTimeout(() => {
      setFormState('sent');
      setTimeout(() => {
        setFormState('idle');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          subject: '',
          message: '',
        });
      }, 3000);
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isDark = variant === 'dark';
  const inputStyles = isDark
    ? 'bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-accent focus:ring-accent/20'
    : 'bg-white border-gray-200 text-primary placeholder:text-gray-400 focus:border-accent focus:ring-accent/20';
  
  const labelStyles = isDark ? 'text-gray-300' : 'text-gray-700';

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className={`block text-sm font-medium mb-2 ${labelStyles}`}>
            Full Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="John Doe"
            className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 transition-all ${inputStyles}`}
          />
        </div>
        <div>
          <label htmlFor="email" className={`block text-sm font-medium mb-2 ${labelStyles}`}>
            Email Address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="john@example.com"
            className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 transition-all ${inputStyles}`}
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className={`block text-sm font-medium mb-2 ${labelStyles}`}>
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 98765 43210"
            className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 transition-all ${inputStyles}`}
          />
        </div>
        <div>
          <label htmlFor="company" className={`block text-sm font-medium mb-2 ${labelStyles}`}>
            Company
          </label>
          <input
            id="company"
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Your Company"
            className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 transition-all ${inputStyles}`}
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className={`block text-sm font-medium mb-2 ${labelStyles}`}>
          Subject
        </label>
        <select
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 transition-all ${inputStyles}`}
        >
          <option value="">Select a subject</option>
          <option value="quote">Request a Quote</option>
          <option value="general">General Enquiry</option>
          <option value="partnership">Partnership Opportunity</option>
          <option value="careers">Careers</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className={`block text-sm font-medium mb-2 ${labelStyles}`}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          placeholder="Tell us about your project requirements..."
          className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 transition-all resize-none ${inputStyles}`}
        />
      </div>

      <motion.button
        type="submit"
        disabled={formState !== 'idle'}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`w-full flex items-center justify-center gap-2 px-8 py-4 font-semibold rounded-xl transition-all duration-300 ${
          formState === 'sent'
            ? 'bg-emerald-500 text-white'
            : 'bg-gradient-to-r from-accent to-accent-dark text-white hover:shadow-lg hover:shadow-accent/25'
        } disabled:opacity-70`}
      >
        {formState === 'idle' && (
          <>
            <Send className="w-4 h-4" />
            Send Message
          </>
        )}
        {formState === 'sending' && (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Sending...
          </>
        )}
        {formState === 'sent' && (
          <>
            <CheckCircle className="w-4 h-4" />
            Message Sent!
          </>
        )}
      </motion.button>
    </form>
  );
}
