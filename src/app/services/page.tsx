"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import {
	BarChart3,
	Video,
	Crosshair,
	Footprints,
	Bike,
	Timer,
	Route,
	CircleDot,
	ScanLine,
	Train,
	TrendingUp,
	ParkingCircle,
	Bus,
	Fuel,
	TrainTrack,
	CarTaxiFront,
	CheckCircle2,
} from "lucide-react";

const services = [
	{
		id: "atcc",
		icon: BarChart3,
		title: "ATCC",
		description:
			"Automatic Traffic Counter & Classifier advanced systems for continuous traffic monitoring and vehicle classification across highways and urban roads.",
		gradient: "from-accent to-orange-400",
	},
	{
		id: "tac",
		icon: Crosshair,
		title: "Turning Movement Count",
		description:
			"Precise directional traffic flow analysis at intersections and junctions. We capture all vehicle movements to support traffic signal optimization and intersection design.",
		gradient: "from-cyan-500 to-blue-400",
	},
	{
		id: "link-midblock",
		icon: Route,
		title: "Link and Midblock Counts",
		description:
			"Comprehensive traffic volume data collection on road links and midblock sections. Accurate vehicle classification using video data extraction techniques.",
		gradient: "from-violet-500 to-purple-400",
	},
	{
		id: "roundabout",
		icon: CircleDot,
		title: "Roundabout Counts & Tracking",
		description:
			"Specialized roundabout traffic analysis including entry/exit counts, circulating flow measurement, and vehicle tracking through circular intersections.",
		gradient: "from-emerald-500 to-green-400",
	},
	{
		id: "pedestrian",
		icon: Footprints,
		title: "Pedestrian Counts and THC",
		description:
			"Detailed pedestrian movement counting at crossings, intersections, and public areas. Combined with Turning Movement Counts for complete multimodal traffic analysis.",
		gradient: "from-pink-500 to-rose-400",
	},
	{
		id: "taxi",
		icon: CarTaxiFront,
		title: "Taxi Monitoring",
		description:
			"Comprehensive taxi movement monitoring and analysis including pick-up/drop-off patterns, dwell times, and traffic impact assessment at key locations.",
		gradient: "from-amber-500 to-yellow-400",
	},
	{
		id: "level-cross",
		icon: Train,
		title: "Level Cross Monitoring",
		description:
			"Railway level crossing traffic monitoring including gate closure times, vehicle queue analysis, delay measurement, and safety assessment studies.",
		gradient: "from-indigo-500 to-blue-400",
	},
	{
		id: "anpr",
		icon: ScanLine,
		title: "ANPR Count",
		description:
			"Automatic Number Plate Recognition based vehicle identification and counting. Used for journey time analysis, origin-destination studies, and traffic enforcement support.",
		gradient: "from-teal-500 to-cyan-500",
	},
	{
		id: "signal-timing",
		icon: Timer,
		title: "Signal Timing & Queue Length Analysis",
		description:
			"Traffic signal timing studies and queue length measurement at signalized intersections. Supports signal optimization, capacity analysis, and Level of Service assessment.",
		gradient: "from-orange-500 to-red-400",
	},
	{
		id: "parking",
		icon: ParkingCircle,
		title: "Parking Survey",
		description:
			"Comprehensive parking studies including occupancy surveys, turnover analysis, duration studies, and parking demand assessment for urban planning and management.",
		gradient: "from-sky-500 to-blue-400",
	},
	{
		id: "journey-time",
		icon: TrendingUp,
		title: "Journey Time Analysis",
		description:
			"Travel time measurement and analysis between key points using video-based and ANPR techniques. Supports route performance evaluation and congestion assessment.",
		gradient: "from-fuchsia-500 to-pink-400",
	},
	{
		id: "bus-occupancy",
		icon: Bus,
		title: "Bus Occupancy Services",
		description:
			"Bus passenger occupancy counting and analysis. Provides critical data for public transport planning, service frequency optimization, and ridership studies.",
		gradient: "from-green-500 to-emerald-500",
	},
	{
		id: "petrol-bunk",
		icon: Fuel,
		title: "Petrol Bunk Services",
		description:
			"Specialized vehicle counting at fuel stations including Vehicle Service Station counts, vehicle wash counts, and fuel filling vehicle counts for operational planning.",
		gradient: "from-rose-500 to-red-400",
	},
	{
		id: "bicycle",
		icon: Bike,
		title: "Bicycle Counts",
		description:
			"Dedicated bicycle and non-motorized transport counting services. Supports cycling infrastructure planning, safety analysis, and sustainable transport strategies.",
		gradient: "from-lime-500 to-green-400",
	},
	{
		id: "trams",
		icon: TrainTrack,
		title: "TRAMS Occupancy Services",
		description:
			"Tram passenger occupancy monitoring and analysis. Accurate ridership data to support tram service planning, capacity optimization, and scheduling improvements.",
		gradient: "from-purple-500 to-violet-500",
	},
];

export default function ServicesPage() {
	return (
		<>
			{/* Hero */}
			<section className="relative pt-32 pb-28 overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-br from-primary via-[#0c1425] to-primary" />
				<div
					className="absolute inset-0 opacity-[0.03]"
					style={{
						backgroundImage:
							"linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
						backgroundSize: "80px 80px",
					}}
				/>
				<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<motion.span
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 text-white/80 text-sm rounded-full mb-6"
					>
						Our Services
					</motion.span>

					<motion.h1
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.1 }}
						className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-heading)] text-white mb-6"
					>
						Traffic Video
						<span className="gradient-text">Data Extraction</span>
						<br />
						Services
					</motion.h1>

					<motion.p
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2 }}
						className="text-gray-400 text-lg max-w-2xl mx-auto"
					>
						Comprehensive traffic data extraction services with 98%+ accuracy.
						<br />
						Global coverage across UK, USA, Australia, Dubai, Europe, India & more.
					</motion.p>
				</div>
			</section>

			{/* Services Grid */}
			<section className="py-24 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<AnimatedSection className="text-center mb-16">
						<span className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent/10 text-accent text-sm font-semibold rounded-full mb-4">
							What We Offer
						</span>

						<h2 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-heading)] text-primary mb-4">
							Our <span className="gradient-text">Services</span>
						</h2>

						<p className="text-muted max-w-2xl mx-auto text-lg">
							Customized traffic video data extraction solutions for diverse client needs with quick turnaround time and competitive pricing.
						</p>
					</AnimatedSection>

					<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
						{services.map((service, index) => (
							<motion.div
								key={service.id}
                id={service.id}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: (index % 6) * 0.08 }}
								whileHover={{ y: -5 }}
								className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl hover:shadow-black/5 hover:border-accent/20 transition-all duration-300 group"
							>
								<div
									className={`w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}
								>
									<service.icon className="w-7 h-7 text-white" />
								</div>

								<h3 className="text-lg font-bold font-[family-name:var(--font-heading)] text-primary mb-3 group-hover:text-accent transition-colors">
									{service.title}
								</h3>

								<p className="text-muted text-sm leading-relaxed">
									{service.description}
								</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Why Choose Us */}
			<section className="py-24 bg-surface">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<AnimatedSection className="text-center mb-16">
						<span className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald/10 text-emerald text-sm font-semibold rounded-full mb-4">
							Why Choose Us
						</span>

						<h2 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-heading)] text-primary mb-4">
							Our <span className="gradient-text">Advantage</span>
						</h2>
					</AnimatedSection>

					<div className="grid md:grid-cols-3 gap-8">
						{[
							{
								title: "High-Quality Data",
								description:
									"90%+ accuracy in all our traffic data extraction services. Rigorous quality control processes ensure reliable and actionable data.",
								gradient: "from-accent to-orange-400",
							},
							{
								title: "Quick Turnaround Time",
								description:
									"Fast delivery without compromising on quality. Our streamlined workflows and experienced team ensure your data is ready when you need it.",
								gradient: "from-cyan-500 to-blue-400",
							},
							{
								title: "Competitive Pricing",
								description:
									"Best value in the industry. We offer economical pricing while maintaining the highest standards of data quality and accuracy.",
								gradient: "from-emerald-500 to-green-400",
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
									<CheckCircle2 className="w-7 h-7 text-white" />
								</div>

								<h3 className="text-xl font-bold font-[family-name:var(--font-heading)] text-primary mb-4">
									{item.title}
								</h3>

								<p className="text-muted leading-relaxed">
									{item.description}
								</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Countries Covered */}
			<section className="py-24 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<AnimatedSection className="text-center mb-16">
						<span className="inline-flex items-center gap-2 px-4 py-1.5 bg-cyan/10 text-cyan-dark text-sm font-semibold rounded-full mb-4">
							Global Reach
						</span>

						<h2 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-heading)] text-primary mb-4">
							Countries <span className="gradient-text">Covered</span>
						</h2>

						<p className="text-muted max-w-2xl mx-auto text-lg">
							Global coverage with local support delivering traffic data solutions wherever you need them.
						</p>
					</AnimatedSection>

					<div className="flex flex-wrap justify-center gap-6">
						{[
							{
								name: "UK",
								gradient: "from-accent to-orange-400",
							},
							{
								name: "USA",
								gradient: "from-cyan-500 to-blue-400",
							},
							{
								name: "Australia",
								gradient: "from-emerald-500 to-green-400",
							},
							{
								name: "Dubai",
								gradient: "from-amber-500 to-yellow-400",
							},
							{
								name: "Europe",
								gradient: "from-violet-500 to-purple-400",
							},
							{
								name: "India",
								gradient: "from-rose-500 to-pink-400",
							},
						].map((country, i) => (
							<motion.div
								key={country.name}
								initial={{ opacity: 0, scale: 0.9 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								transition={{ delay: i * 0.1 }}
								whileHover={{ y: -5, scale: 1.05 }}
								className="px-10 py-6 bg-white rounded-2xl border border-gray-100 hover:shadow-xl hover:border-accent/30 transition-all duration-300 group text-center"
							>
								<div
									className={`w-12 h-12 bg-gradient-to-br ${country.gradient} rounded-xl flex items-center justify-center mx-auto mb-3`}
								>
									<Video className="w-5 h-5 text-white" />
								</div>

								<span className="text-primary font-bold text-lg group-hover:text-accent transition-colors">
									{country.name}
								</span>
							</motion.div>
						))}
					</div>

					<motion.p
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						className="text-center text-muted mt-8 text-lg"
					>
						& many more countries worldwide
					</motion.p>
				</div>
			</section>
		</>
	);
}
