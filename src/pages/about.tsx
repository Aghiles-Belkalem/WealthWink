import "../components/Css components/about.css";

export default function About() {
	return (
		<article className="about">
			<header>
				<h1>About WealthWink Strategies</h1>
				<p className="tagline">
					Building Your Financial Future with Confidence
				</p>
			</header>

			<section>
				<h2>Our Philosophy</h2>
				<p>
					At <strong>WealthWink Strategies</strong>, we believe that financial
					success is built through personalized guidance, informed decisions,
					and a deep understanding of each client’s unique goals.
				</p>
			</section>

			<section>
				<h2>Our Financial Services</h2>
				<ul>
					<li>
						<strong>Low-Risk Trading:</strong> Secure investments like blue-chip
						stocks and fixed-income securities for stability and preservation.
					</li>
					<li>
						<strong>Mid-Risk Trading:</strong> A balanced strategy for moderate
						growth and diversified exposure.
					</li>
					<li>
						<strong>High-Risk Trading:</strong> Aggressive investment options
						for clients with higher risk tolerance.
					</li>
					<li>
						<strong>Portfolio Management:</strong> Long-term strategies for
						retirement, life milestones, and wealth building, with ongoing
						monitoring and rebalancing.
					</li>
				</ul>
			</section>

			<section>
				<h2>Our Process</h2>
				<ol>
					<li>
						<strong>Personalized Consultations:</strong> Understanding your
						vision, risk, and timeline.
					</li>
					<li>
						<strong>Tailored Strategies:</strong> We craft investment plans that
						fit your financial journey.
					</li>
					<li>
						<strong>Ongoing Support:</strong> Regular updates and adjustments as
						your needs evolve.
					</li>
					<li>
						<strong>Education & Empowerment:</strong> We simplify complex
						markets so you feel confident.
					</li>
				</ol>
			</section>

			<section className="warning">
				<h2>Investment Caution</h2>
				<p>
					Markets are volatile. At WealthWink, we emphasize transparency: never
					invest money you can’t afford to lose. We’re here to guide you with
					strategies that balance ambition with awareness.
				</p>
			</section>
		</article>
	);
}
