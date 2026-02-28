"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, ArrowUpRight, Users } from "lucide-react";

const projects = [
	{
		title: "SASEC Program Regional Logistics Traffic Study",
		category: "Traffic & Transportation",
		location: "Multi-state, India",
		year: "2025",
		scope: "130+ locations",
		description:
			"Extensive traffic surveys across 130+ strategic locations supporting the South Asia Subregional Economic Cooperation program. Included mid-block classified traffic volume counts, turning movement counts, and roundabout capacity analysis.",
		gradient: "from-orange-500 to-amber-400",
	},
	{
		title: "Metro Station Commuter Behavior Study & Bengaluru BSRP",
		category: "Origin-Destination Survey",
		location: "Bengaluru, India",
		year: "2024",
		scope: "3,000 commuters",
		description:
			"Comprehensive traffic surveys and commuter travel behavior study at key metro stations. Evaluated commuter travel modes, origin-destination patterns, access modes, travel cost, and trip frequency.",
		gradient: "from-cyan-500 to-blue-500",
	},
	{
		title: "Bus Depot Modernization Feasibility Chennai",
		category: "Traffic Survey",
		location: "Chennai, India",
		year: "2024",
		scope: "11 bus stations",
		description:
			"Comprehensive traffic survey across 11 major bus stations including traffic movement assessment, passenger opinion surveys, IPT surveys, parking analysis, and terminus operations observation.",
		gradient: "from-violet-500 to-purple-500",
	},
	{
		title: "Kempegowda/Mysore Road Station Commuter Study",
		category: "Origin-Destination Survey",
		location: "Bengaluru, India",
		year: "2024",
		scope: "9,000 respondents",
		description:
			"Detailed commuter behavior study covering travel patterns, access modes, and daily trip characteristics. Assessed travel cost, travel time, and frequency of metro users.",
		gradient: "from-emerald-500 to-teal-500",
	},
	{
		title: "NH130 Traffic Volume Study & Forecasting",
		category: "Traffic Volume Study",
		location: "Lucknow–Sitapur, India",
		year: "2024",
		scope: "7-day 24hr survey",
		description:
			"In-depth traffic study on the national highway between Lucknow and Sitapur. Used video-based traffic volume counts over 7 days to capture 24-hour data for traffic pattern analysis and forecasting.",
		gradient: "from-rose-500 to-pink-400",
	},
	{
		title: "Speed Data Collection & Speeding Risk Analysis",
		category: "Spot Speed Survey",
		location: "Mumbai, India",
		year: "2024",
		scope: "15 key locations",
		description:
			"Comprehensive speed data collection study across Mumbai using radar guns and electronic tablets for real-time digital recording. Assessed risks associated with speeding on urban roads.",
		gradient: "from-indigo-500 to-blue-400",
	},
	{
		title: "Electric Three-Wheeler Transition Study",
		category: "Public Opinion Survey",
		location: "Tamil Nadu, India",
		year: "2024",
		scope: "6 cities",
		description:
			"Opinion survey and focus group discussions on transitioning from fuel-based autos to electric three-wheelers across Chennai, Coimbatore, Salem, Tiruchirappalli, Madurai, and Tirunelveli.",
		gradient: "from-amber-500 to-yellow-400",
	},
	{
		title: "Junction Turning Movement Count Study",
		category: "Traffic & Transportation",
		location: "Bengaluru, India",
		year: "2023",
		scope: "10 intersections",
		description:
			"Turning movement count survey using video-graphic method at 10 key intersections for the Rail Land Development Authority's Integrated Conceptual Master Plan.",
		gradient: "from-sky-500 to-cyan-500",
	},
	{
		title: "NH48 Express Highway Traffic Survey",
		category: "Traffic Survey",
		location: "Maharashtra, India",
		year: "2023",
		scope: "Full highway stretch",
		description:
			"Comprehensive traffic survey using combination of Automatic Traffic Counter & Classifier (ATCC) systems and Video Graphic Survey methods on the NH48 Express Highway.",
		gradient: "from-fuchsia-500 to-pink-400",
	},
	{
		title: "Travel Behavior Survey Chennai",
		category: "Household Survey",
		location: "Chennai, India",
		year: "2023",
		scope: "2,600 households",
		description:
			"Survey to understand transit reliability of bus, local train & metro and impact on mode choice. Covered frequency, punctuality, cleanliness, safety, accessibility, and comfort.",
		gradient: "from-green-500 to-emerald-500",
	},
	{
		title: "Metrolite / Metro Neo Traffic Study Gujarat",
		category: "Traffic & Transportation",
		location: "Jamnagar & Rajkot, India",
		year: "2022",
		scope: "41 intersections, 6,888+ surveys",
		description:
			"Complete traffic & transportation study for Gujarat Metro Rail Corporation including video-graphic surveys, occupancy, OD, household, and stated preference surveys across two cities.",
		gradient: "from-orange-500 to-red-400",
	},
	{
		title: "Hyderabad Metro Ridership Study",
		category: "Traffic & Transportation",
		location: "Hyderabad, India",
		year: "2022",
		scope: "32 intersections, 9,000+ OD surveys",
		description:
			"Comprehensive metro ridership study for Hyderabad Metro Rail Corporation covering traffic surveys, occupancy studies, in-bus passenger OD surveys, and stated preference analysis.",
		gradient: "from-blue-500 to-indigo-400",
	},
	{
		title: "Traffic Impact Analysis BBMP Majestic",
		category: "Traffic & Transportation",
		location: "Bengaluru, India",
		year: "2021",
		scope: "50+ junctions",
		description:
			"Traffic analysis survey covering 50 major junctions around Majestic area for BBMP, including traffic impact study, high-density corridor analysis, and pedestrian movement study.",
		gradient: "from-teal-500 to-cyan-500",
	},
	{
		title: "Congestion Pricing Opinion Study Mumbai",
		category: "Public Opinion Survey",
		location: "Mumbai, India",
		year: "2021",
		scope: "Metro-wide survey",
		description:
			"Public opinion survey for MMRDA in association with ITDP to understand traffic behavior, willingness to pay for alternate roads, and congestion pricing acceptance.",
		gradient: "from-purple-500 to-violet-500",
	},
	{
		title: "Shell Technologies Fuel Station Traffic Analysis",
		category: "Traffic Survey",
		location: "Pan-India",
		year: "2020",
		scope: "Multiple locations",
		description:
			"Video-graphic traffic analysis for Shell India to understand vehicle movement at major junctions near fuel pumps and planning for new fuel station placement.",
		gradient: "from-yellow-500 to-amber-400",
	},
];

const categories = [
	"All",
	"Traffic & Transportation",
	"Traffic Survey",
	"Origin-Destination Survey",
	"Public Opinion Survey",
	"Spot Speed Survey",
	"Household Survey",
	"Traffic Volume Study",
];

export default function ProjectsPage() {
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
						Our Portfolio
					</motion.span>

					<motion.h1
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.1 }}
						className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-heading)] text-white mb-6"
					>
						Projects That <span className="gradient-text">Transform</span>
						<br />
						Transportation
					</motion.h1>

					<motion.p
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2 }}
						className="text-gray-400 text-lg max-w-2xl mx-auto"
					>
						Highlights from our key projects successfully completed across the country, delivering accurate data and reliable insights.
					</motion.p>
				</div>
			</section>

			{/* Category filter */}
			<section className="py-8 bg-white border-b border-gray-100 sticky top-20 z-30 backdrop-blur-md bg-white/95">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
						{categories.map((cat) => (
							<button
								key={cat}
								className="px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap border border-gray-200 text-muted hover:border-accent hover:text-accent hover:bg-accent/5 transition-all first:bg-accent first:text-white first:border-accent"
							>
								{cat}
							</button>
						))}
					</div>
				</div>
			</section>

			{/* Projects Grid */}
			<section className="py-16 bg-surface">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
						{projects.map((project, index) => (
							<motion.div
								key={project.title}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: index * 0.08 }}
								className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1 transition-all duration-500"
							>
								<div
									className={`h-3 bg-gradient-to-r ${project.gradient}`}
								/>

								<div className="p-6">
									<div className="flex items-center gap-2 mb-3">
										<span className="px-3 py-1 bg-gray-100 text-muted text-xs font-medium rounded-full">
											{project.category}
										</span>
										{project.scope && (
											<span className="flex items-center gap-1 text-xs text-muted-light">
												<Users className="w-3 h-3" />
												{project.scope}
											</span>
										)}
									</div>

									<h3 className="text-lg font-bold font-[family-name:var(--font-heading)] text-primary mb-3 group-hover:text-accent transition-colors line-clamp-2">
										{project.title}
									</h3>

									<p className="text-muted text-sm leading-relaxed mb-4 line-clamp-3">
										{project.description}
									</p>

									<div className="flex items-center justify-between">
										<div className="flex items-center gap-4 text-xs text-muted-light">
											<span className="flex items-center gap-1">
												<MapPin className="w-3 h-3" />
												{project.location}
											</span>
											<span className="flex items-center gap-1">
												<Calendar className="w-3 h-3" />
												{project.year}
											</span>
										</div>
										<ArrowUpRight className="w-4 h-4 text-muted-light group-hover:text-accent transition-colors" />
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>
		</>
	);
}
