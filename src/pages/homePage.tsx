import "../App.css";
import NavigationLinks from "../components/navigationButtons/navigationLinks";

export default function Home() {
	return (
		<>
			<main className="appbackground">
				<p className="herotext">
					Welcome to <strong>WealthWink Strategies</strong>
					<br />
					Building Your Financial Future with Confidence
				</p>

				<div className="blocktext">
					<p className="textarea1">
						At WealthWink Strategies, we believe that achieving financial
						success starts with personalized guidance, informed strategies, and
						a deep understanding of your unique goals.
						<br />
						<br />
						As an experienced financial advisor, I am committed to helping you
						navigate the complexities of wealth-building with tailored solutions
						that align with your risk tolerance, financial aspirations, and
						long-term vision.
					</p>

					<p className="textarea2">
						Whether you're a cautious investor seeking stability or an ambitious
						trader aiming for high returns, our services are designed to empower
						you to make confident, informed decisions.
						<br />
						<br />
						<strong>Our Comprehensive Financial Services:</strong> We offer a
						range of investment and portfolio management services to suit
						diverse needs and preferences, ensuring there’s a strategy that fits
						your financial journey.
					</p>
				</div>
			</main>

			<NavigationLinks />
		</>
	);
}
