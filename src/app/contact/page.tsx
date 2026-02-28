// ContactPage.tsx
"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "@/components/ContactForm";
import {
	MapPin,
	Phone,
	Mail,
	Clock,
	Facebook,
	Instagram,
	Linkedin,
	Twitter,
	Youtube,
} from "lucide-react";

const offices = [
	{
		name: "INDIA HQ",
		address: "RoadLens Analytics HQ, Tech District, Bangalore 560068, Karnataka, India",
		phone: "+91 98765 43210",
		landline: "080 4091 1824",
		email: "hello@roadlens.com",
		hours: "Mon–Sat: 9:00 AM – 7:00 PM IST",
		gradient: "from-accent to-orange-400",
	},
	{
		name: "USA Office",
		address: "RoadLens Inc, 235 NE Loop 820, Ste 206, Hurst, Texas 76053",
		phone: "+1 945 215 0024",
		email: "usa@roadlens.com",
		hours: "Mon–Fri: 9:00 AM – 6:00 PM CST",
		gradient: "from-cyan-500 to-blue-400",
	},
];

const branchoffices = ["Hyderabad", "Mumbai", "Vijayawada", "Chennai"];

const socialLinks = [
	{ icon: Facebook, href: "#", label: "Facebook" },
	{ icon: Instagram, href: "#", label: "Instagram" },
	{ icon: Linkedin, href: "#", label: "LinkedIn" },
	{ icon: Twitter, href: "#", label: "Twitter" },
	{ icon: Youtube, href: "#", label: "YouTube" },
];

export default function ContactPage() {
	return (
		<>
			{/* Hero */}
			<section className="relative pt-32 pb-20 overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-br from-primary via-[#0c1425] to-primary" />
				<div
					className="absolute inset-0 opacity-[0.03]"
					style={{
						backgroundImage:
							"linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
						backgroundSize: "80px 30px",
					}}
				/>
				<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<motion.span
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0 }}
						className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 text-white/80 text-sm rounded-full mb-6"
					>
						Get In Touch
					</motion.span>

					<motion.h1
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.1 }}
						className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-heading)] text-white mb-6"
					>
						Let&apos;s <span className="gradient-text">Connect</span>
					</motion.h1>

					<motion.p
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2 }}
						className="text-gray-400 text-lg max-w-2xl mx-auto"
					>
						Have a project in mind? Need traffic data expertise? We&apos;re here to help. Our team responds within 24 hours.
					</motion.p>
				</div>
			</section>

			{/* Main Contact Section */}
			<section className="py-24 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid lg:grid-cols-5 gap-12">
						{/* Contact Info */}
						<div className="lg:col-span-2 space-y-8">
							<AnimatedSection direction="left">
								<h2 className="text-2xl font-bold font-[family-name:var(--font-heading)] text-primary mb-6">
									Our Offices
								</h2>

								{offices.map((office, i) => (
									<motion.div
										key={office.name}
										initial={{ opacity: 0, y: 20 }}
										whileInView={{ opacity: 1, y: 0 }}
										viewport={{ once: true }}
										transition={{ delay: i * 0.1 }}
										className="mb-8 p-6 bg-surface rounded-2xl border border-gray-100"
									>
										<div className="flex items-center gap-3 mb-4">
											<div
												className={`w-3 h-3 rounded-full bg-gradient-to-br ${office.gradient}`}
											/>
											<h3 className="font-bold text-primary">{office.name}</h3>
										</div>

										<div className="space-y-3 text-sm">
											<div className="flex items-start gap-3">
												<MapPin className="w-4 h-4 text-accent mt-0.5 shrink-0" />
												<span className="text-muted">{office.address}</span>
											</div>

											<div className="flex items-center gap-3">
												<Phone className="w-4 h-4 text-accent shrink-0" />
												<span className="text-muted">{office.phone}</span>
											</div>

											{office.landline && (
												<div className="flex items-center gap-3">
													<Phone className="w-4 h-4 text-cyan shrink-0" />
													<span className="text-muted">{office.landline}</span>
												</div>
											)}

											<div className="flex items-center gap-3">
												<Mail className="w-4 h-4 text-accent shrink-0" />
												<span className="text-muted">{office.email}</span>
											</div>

											<div className="flex items-center gap-3">
												<Clock className="w-4 h-4 text-accent shrink-0" />
												<span className="text-muted">{office.hours}</span>
											</div>
										</div>
									</motion.div>
								))}

								{/* Branch offices */}
								<div className="p-6 bg-surface rounded-2xl border border-gray-100">
									<h3 className="font-bold text-primary mb-3">Branch Offices</h3>
									<div className="flex flex-wrap gap-2">
										{branchoffices.map((city) => (
											<span
												key={city}
												className="px-3 py-1.5 bg-white rounded-lg text-sm text-muted border border-gray-100"
											>
												{city}
											</span>
										))}
									</div>
								</div>

								{/* Social Links */}
								<div className="pt-6">
									<h3 className="font-bold text-primary mb-4">Follow Us</h3>
									<div className="flex gap-3">
										{socialLinks.map((social) => (
											<a
												key={social.label}
												href={social.href}
												aria-label={social.label}
												className="w-10 h-10 bg-gray-100 hover:bg-accent/10 rounded-xl flex items-center justify-center transition-all group"
											>
												<social.icon
													className="w-4 h-4 text-muted group-hover:text-accent transition-colors"
												/>
											</a>
										))}
									</div>
								</div>
							</AnimatedSection>
						</div>

						{/* Contact Form */}
						<div className="lg:col-span-3">
							<AnimatedSection direction="right" delay={0.2}>
								<div className="bg-surface rounded-3xl p-8 md:p-10 border border-gray-100">
									<h2 className="text-2xl font-bold font-[family-name:var(--font-heading)] text-primary mb-2">
										Write to Us
									</h2>
									<p className="text-muted mb-8">
										Fill out the form below and our team will get back to you within 24 hours.
									</p>
									<ContactForm />
								</div>
							</AnimatedSection>
						</div>
					</div>
				</div>
			</section>

			{/* Map Section */}
			<section className="bg-surface">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
					<AnimatedSection className="text-center mb-8">
						<h2 className="text-2xl font-bold font-[family-name:var(--font-heading)] text-primary">
							Find Us On The Map
						</h2>
					</AnimatedSection>

					<div className="rounded-3xl overflow-hidden border border-gray-200 shadow-lg h-96 bg-gray-100 flex items-center justify-center">
						<div className="text-center">
							<MapPin className="w-12 h-12 text-accent mx-auto mb-4" />
							<p className="text-muted font-medium">Interactive Map</p>
							<p className="text-muted-light text-sm mt-1">
								Bangalore, India | Hurst, Texas, USA
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Quick Contact */}
			<section className="py-16 bg-primary">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid sm:grid-cols-3 gap-8 text-center">
						{[
							{
								icon: Phone,
								label: "Call Us",
								value: "+91 98765 43210",
								subValue: "+1 945 215 0024",
							},
							{
								icon: Mail,
								label: "Email Us",
								value: "hello@roadlens.com",
								subValue: "enquiries@roadlens.com",
							},
							{
								icon: Clock,
								label: "Working Hours",
								value: "Mon–Sat: 9:00 AM – 7:00 PM",
								subValue: "IST / CST",
							},
						].map((item, i) => (
							<motion.div
								key={item.label}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: i * 0.1 }}
								className="flex flex-col items-center"
							>
								<div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
									<item.icon className="w-6 h-6 text-accent" />
								</div>
								<h3 className="text-white font-semibold mb-2">{item.label}</h3>
								<p className="text-gray-400 text-sm">{item.value}</p>
								{item.subValue && (
									<p className="text-gray-500 text-xs mt-1">{item.subValue}</p>
								)}
							</motion.div>
						))}
					</div>
				</div>
			</section>
		</>
	);
}
