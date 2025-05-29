import { useState } from "react";
import "../components/Css components/Services.css";
import { Link } from "react-router-dom";

interface Service {
  title: string;
  content: string;
}

const servicesData: Service[] = [
  {
    title: "Low-Risk Trading",
    content:
      "For clients prioritizing capital preservation, our low-risk trading strategies focus on stable, secure investments. These include fixed-income securities, blue-chip stocks, and diversified funds designed to deliver consistent, modest returns with minimal exposure to market volatility. Ideal for conservative investors or those nearing retirement, these strategies provide peace of mind while steadily growing your wealth.",
  },
  {
    title: "Mid-Risk Trading",
    content:
      "Our balanced approach combines growth opportunities with prudent risk management. By diversifying across asset classes such as equities, bonds, and alternative investments, we aim to achieve moderate growth while mitigating potential losses. This strategy suits clients who want to grow their wealth steadily while maintaining a comfortable level of risk.",
  },
  {
    title: "High-Risk Trading",
    content:
      "For those seeking the potential for significant returns, our high-risk trading strategies focus on dynamic opportunities in volatile markets. This may include investments in growth stocks, emerging markets, or leveraged instruments. While offering the potential for higher rewards, these strategies require a strong risk tolerance and an understanding of market fluctuations. We work closely with you to ensure alignment with your goals and comfort level.",
  },
  {
    title: "Mid- to Long-Term Portfolio Management",
    content:
      "Beyond trading, we specialize in crafting and managing portfolios designed for sustained growth over time. Whether your goal is retirement planning, funding major life milestones, or building generational wealth, we develop customized strategies that evolve with your needs. Our approach includes regular portfolio rebalancing, performance monitoring, and adjustments to adapt to changing market conditions or personal circumstances.",
  },
  {
    title: "Our Commitment to You",
    content:
      "At WealthWink Strategies, we prioritize transparency, education, and collaboration. We take the time to understand your financial situation, risk appetite, and long-term goals to create a roadmap that works for you. Our advisory process includes:\n\n• Personalized Consultations\n• Customized Strategies\n• Ongoing Support\n• Education and Empowerment",
  },
  {
    title: "A Word of Caution: Understanding Risk",
    content:
      "Investing and trading inherently involve risk, and markets can be unpredictable. At WealthWink Strategies, we emphasize the importance of only investing funds you are prepared to lose. We are here to help you navigate these challenges with confidence and clarity.",
  },
  {
    title: "Why Choose WealthWink Strategies?",
    content:
      "With a commitment to integrity, expertise, and client-centered service, WealthWink Strategies is your partner in building a secure financial future. Whether you're just starting your investment journey or seeking to optimize an existing portfolio, we offer the tools, insights, and strategies to help you succeed.",
  },
  {
    title: "Get Started Today",
    content:
      "Contact us for a complimentary consultation to explore how we can help you achieve your financial goals. Let’s work together to turn your vision into reality with strategies that are as unique as you are.",
  },
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <main className="services">
      <h1 className="services-title">Our Services</h1>
      {servicesData.map((item, index) => (
        <div
          className={`accordion-item ${activeIndex === index ? "active" : ""}`}
          key={index}
        >
          <button
            type="button"
            className="accordion-title"
            onClick={() => toggleAccordion(index)}
          >
            {item.title}
            <span>{activeIndex === index ? "−" : "+"}</span>
          </button>
          {activeIndex === index && (
            <div className="accordion-content">
              <p>{item.content}</p>
            </div>
          )}
        </div>
      ))}
      <Link
        className="button-link back-home-link"
        to="/"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        ← Back to Home
      </Link>
    </main>
  );
}

