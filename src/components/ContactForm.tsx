'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, Loader2 } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

interface ContactFormProps {
  variant?: 'default' | 'dark';
}

export default function ContactForm({ variant = 'default' }: ContactFormProps) {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'sent'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    hidden: '', // honeypot
  });

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  // ✅ VALIDATION FUNCTION
  const validateForm = () => {
    if (!formData.name.trim()) return 'Name is required';
    if (!formData.email.trim()) return 'Email is required';

    // Email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) return 'Invalid email format';

    // Phone validation (optional but if filled must be valid)
    if (formData.phone) {
      const phoneRegex = /^[0-9]{10}$/;
      if (!phoneRegex.test(formData.phone))
        return 'Phone must be 10 digits';
    }

    if (!formData.subject) return 'Please select a subject';
    if (!formData.message.trim()) return 'Message is required';

    if (formData.message.length < 10)
      return 'Message should be at least 10 characters';

    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    // 🛑 Honeypot check (spam bots will fill this)
    if (formData.hidden) {
      console.warn('Spam detected');
      return;
    }

    // 🛑 Validation check
    const validationError = validateForm();
    if (validationError) {
      setErrorMsg(validationError);
      return;
    }

    setFormState('sending');

    try {
      const { error } = await supabase.from('contacts').insert([
        {
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          company: formData.company.trim(),
          subject: formData.subject,
          message: formData.message.trim(),
        },
      ]);

      if (error) throw error;

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
          hidden: '',
        });
      }, 2000);

      await fetch('/api/notify', {
  method: 'POST',
  body: JSON.stringify(formData),
});

    } catch (err) {
      console.error(err);
      setFormState('idle');
      setErrorMsg('Something went wrong. Please try again.');
    }
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

      {/* 🛑 Hidden honeypot field */}
      <input
        type="text"
        name="hidden"
        value={formData.hidden}
        onChange={handleChange}
        style={{ display: 'none' }}
        autoComplete="off"
      />

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className={`block text-sm font-medium mb-2 ${labelStyles}`}>
            Full Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 ${inputStyles}`}
          />
        </div>

        <div>
          <label className={`block text-sm font-medium mb-2 ${labelStyles}`}>
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 ${inputStyles}`}
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className={`block text-sm font-medium mb-2 ${labelStyles}`}>
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 ${inputStyles}`}
          />
        </div>

        <div>
          <label className={`block text-sm font-medium mb-2 ${labelStyles}`}>
            Company
          </label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 ${inputStyles}`}
          />
        </div>
      </div>

      <div>
        <label className={`block text-sm font-medium mb-2 ${labelStyles}`}>
          Subject
        </label>
        <select
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 ${inputStyles}`}
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
        <label className={`block text-sm font-medium mb-2 ${labelStyles}`}>
          Message
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          placeholder="Tell us about your project requirements..."
          className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 resize-none ${inputStyles}`}
        />
      </div>

      {/* ❌ Error Message */}
      {errorMsg && (
        <p className="text-red-500 text-sm">{errorMsg}</p>
      )}

      <motion.button
        type="submit"
        disabled={formState !== 'idle'}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`w-full flex items-center justify-center gap-2 px-8 py-4 font-semibold rounded-xl transition-all ${
          formState === 'sent'
            ? 'bg-emerald-500 text-white'
            : 'bg-gradient-to-r from-accent to-accent-dark text-white'
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