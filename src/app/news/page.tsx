// app/news/page.tsx or pages/news.tsx
"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { Calendar, ArrowUpRight, Clock, Tag } from "lucide-react";

const articles = [
	{
		title: "AI‑Powered Traffic Image Analysis: Reshaping Urban Mobility",
		excerpt:
			"Discover how advanced AI and computer vision are revolutionizing traffic data collection and analysis. From automated vehicle counting to real‑time anomaly detection.",
		date: "2025-12-15",
		category: "Technology",
		readTime: "8 min read",
		gradient: "from-accent to-orange-400",
	},
	{
		title: "Smart Urban Mobility: Multi‑Modal Transport Integration",
		excerpt:
			"Smart approaches to integrating multi‑modal transport systems for efficient and sustainable urban planning. Learn how cities worldwide are breaking down transportation silos.",
		date: "2025-09-20",
		category: "Urban Planning",
		readTime: "6 min read",
		gradient: "from-cyan-500 to-blue-400",
	},
	{
		title: "Video Analytics Interventions for Better Data Collection",
		excerpt:
			"How video analytics‑based interventions are improving the accuracy and efficiency of traffic data collection worldwide. We examine case studies where AI‑powered video delivers actionable insights.",
		date: "2025-06-10",
		category: "Analytics",
		readTime: "7 min read",
		gradient: "from-violet-500 to-purple-400",
	},
	{
		title: "The Rise of Electric Mobility: Data‑Driven Transition Strategies",
		excerpt:
			"As cities worldwide push for electric vehicle adoption, data plays a crucial role in planning infrastructure. We analyze how traffic data can inform EV charging station placement and usage patterns.",
		date: "2025-03-05",
		category: "Electric Mobility",
		readTime: "10 min read",
		gradient: "from-emerald-500 to-green-400",
	},
	{
		title: "Congestion Pricing: Global Lessons for Indian Cities",
		excerpt:
			"An in‑depth look at congestion pricing models from London, Stockholm, and Singapore, and what Indian cities can learn from these implementations. We present our own recommendations.",
		date: "2024-11-18",
		category: "Policy",
		readTime: "9 min read",
		gradient: "from-rose-500 to-pink-400",
	},
	{
		title: "Traffic Safety in Indian Cities: A Data Perspective",
		excerpt:
			"Analyzing speed data and traffic violation patterns across Indian cities to build a comprehensive picture of road safety challenges. Our studies reveal critical intervention points.",
		date: "2024-08-22",
		category: "Road Safety",
		readTime: "5 min read",
		gradient: "from-indigo-500 to-blue-400",
	},
	{
		title: "The Future of Public Transport: Insights from Metro Studies",
		excerpt:
			"Drawing from our extensive metro ridership studies across Bengaluru, Hyderabad, and Chennai, we present key findings about commuter behavior and the factors that drive ridership.",
		date: "2024-05-14",
		category: "Public Transport",
		readTime: "7 min read",
		gradient: "from-amber-500 to-yellow-400",
	},
	{
		title: "Origin‑Destination Surveys: Methodology & Best Practices",
		excerpt:
			"A comprehensive guide to conducting OD surveys in the modern era. We cover traditional roadside interviews, videographic methods, and emerging techniques like NGS‑based tracking.",
		date: "2024-02-28",
		category: "Methodology",
		readTime: "12 min read",
		gradient: "from-teal-500 to-cyan-500",
	},
];

export default function NewsPage() {
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
						News & Insights
					</motion.span>

					<motion.h1
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.1 }}
						className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-heading)] text-white mb-6"
					>
						Stay <span className="gradient-text">Informed</span>
					</motion.h1>

					<motion.p
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2 }}
						className="text-gray-400 text-lg max-w-2xl mx-auto"
					>
						The latest developments in traffic technology, urban mobility, transportation policy, and data analytics.
					</motion.p>
				</div>
			</section>

			{/* Featured Article */}
			<section className="py-16 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<AnimatedSection>
						<div className="grid lg:grid-cols-2 gap-8 items-center bg-surface rounded-3xl overflow-hidden border border-gray-100">
							<div
								className={`h-64 lg:h-full bg-gradient-to-br ${articles[0].gradient} relative`}
							>
								<div className="absolute inset-0 bg-black/10" />
								<div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full" />
								<div className="absolute -bottom-10 -left-10 w-60 h-60 bg-white/5 rounded-full" />
								<div className="absolute top-6 left-6">
									<span className="px-3 py-1.5 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold rounded-full">
										Featured
									</span>
								</div>
							</div>

							<div className="p-8 lg:p-12">
								<div className="flex items-center gap-3 text-sm text-muted mb-4">
									<span className="flex items-center gap-1">
										<Tag className="w-3 h-3" />
										{articles[0].category}
									</span>
									<span className="flex items-center gap-1">
										<Calendar className="w-3 h-3" />
										{new Date(articles[0].date).toLocaleDateString("en-US", {
											year: "numeric",
											month: "long",
											day: "numeric",
										})}
									</span>
									<span className="flex items-center gap-1">
										<Clock className="w-3 h-3" />
										{articles[0].readTime}
									</span>
								</div>

								<h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-heading)] text-primary mb-4">
									{articles[0].title}
								</h2>

								<p className="text-muted leading-relaxed mb-6">
									{articles[0].excerpt}
								</p>

								<button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent to-accent-dark text-white font-semibold rounded-full hover:shadow transition-all duration-300 group">
									Read Full Article
									<ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
								</button>
							</div>
						</div>
					</AnimatedSection>
				</div>
			</section>

			{/* All Articles */}
			<section className="py-16 bg-surface">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<AnimatedSection className="mb-12">
						<h2 className="text-2xl font-bold font-[family-name:var(--font-heading)] text-primary">
							All Articles
						</h2>
					</AnimatedSection>

					<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
						{articles.slice(1).map((article, index) => (
							<motion.article
								key={article.title}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: index * 0.06 }}
							>
								<div
									className={`h-48 bg-gradient-to-br ${article.gradient} relative overflow-hidden`}
								>
									<div className="absolute inset-0 bg-black/10" />
									<div className="absolute -top-8 -right-8 w-32 h-32 bg-white/10 rounded-full" />
									<div className="absolute -bottom-4 -left-4 w-20 h-20 bg-white/10 rounded-full" />
									<div className="absolute bottom-4 left-4">
										<span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
											{article.category}
										</span>
									</div>
								</div>

								<div className="p-6 bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1 transition-all duration-300">
									<div className="flex items-center gap-3 text-xs text-muted-light mb-3">
										<span className="flex items-center gap-1">
											<Calendar className="w-3 h-3" />
											{new Date(article.date).toLocaleDateString("en-US", {
												year: "numeric",
												month: "short",
												day: "numeric",
											})}
										</span>
										<span className="flex items-center gap-1">
											<Clock className="w-3 h-3" />
											{article.readTime}
										</span>
									</div>

									<h3 className="text-lg font-bold font-[family-name:var(--font-heading)] text-primary mb-3 group-hover:text-accent transition-colors line-clamp-2">
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
				</div>
			</section>
		</>
	);
}
