import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="app">
      <Navbar />

      <main>
        {/* =========================
            HERO
        ========================= */}
        <section className="hero">
          <div className="container hero-content">
            <div className="hero-text">
              <div className="hero-badge">
                <span>✦</span>
                AI-powered customer support
              </div>

              <h1>
                Support your customers
                <span> with AI.</span>
              </h1>

              <p>
                Automate customer conversations, streamline your business
                workflows, and deliver exceptional support around the clock.
              </p>

              <div className="hero-buttons">
                <a href="#contact" className="primary-button">
                  Get Started Free
                  <span>→</span>
                </a>

                <a href="#how-it-works" className="secondary-button">
                  See How It Works
                </a>
              </div>

              <div className="hero-note">
                No credit card required · Set up in minutes
              </div>
            </div>

            {/* AI CHAT CARD */}
            <div className="hero-visual">
              <div className="ai-card">
                <div className="ai-card-header">
                  <div className="status-dot"></div>
                  AI Support Assistant
                  <span>•••</span>
                </div>

                <div className="chat-area">
                  <div className="message bot">
                    Hi! 👋 How can I help you today?
                  </div>

                  <div className="message user">
                    I need help with my order.
                  </div>

                  <div className="message bot">
                    Of course! I can help you track your order instantly.
                  </div>
                </div>

                <div className="chat-input">
                  <span>Ask anything...</span>

                  <button type="button" aria-label="Send message">
                    ↑
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================
            FEATURES
        ========================= */}
        <section className="features-section" id="features">
          <div className="container">
            <div className="section-heading">
              <div className="section-badge">
                POWERFUL FEATURES
              </div>

              <h2>
                Everything you need to
                <span> automate support.</span>
              </h2>

              <p>
                Give your customers instant answers while your team focuses
                on what matters most.
              </p>
            </div>

            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">
                  ✦
                </div>

                <h3>
                  AI-Powered Support
                </h3>

                <p>
                  Answer customer questions instantly with an intelligent AI
                  assistant available 24/7.
                </p>

                <a href="#contact">
                  Learn more →
                </a>
              </div>

              <div className="feature-card">
                <div className="feature-icon">
                  ⚡
                </div>

                <h3>
                  Smart Automation
                </h3>

                <p>
                  Automate repetitive tasks and workflows so your team can
                  spend more time growing the business.
                </p>

                <a href="#contact">
                  Learn more →
                </a>
              </div>

              <div className="feature-card">
                <div className="feature-icon">
                  ◈
                </div>

                <h3>
                  Business Insights
                </h3>

                <p>
                  Understand customer conversations and discover useful
                  insights with powerful analytics.
                </p>

                <a href="#contact">
                  Learn more →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* =========================
            HOW IT WORKS
        ========================= */}
        <section className="how-section" id="how-it-works">
          <div className="container">
            <div className="section-heading">
              <div className="section-badge">
                HOW IT WORKS
              </div>

              <h2>
                Get started in
                <span> three simple steps.</span>
              </h2>

              <p>
                Set up your AI support assistant and start helping customers
                in minutes.
              </p>
            </div>

            <div className="steps-grid">
              <div className="step-card">
                <div className="step-number">
                  01
                </div>

                <h3>
                  Connect your business
                </h3>

                <p>
                  Connect your website, knowledge base, and business tools
                  to give your AI assistant the information it needs.
                </p>
              </div>

              <div className="step-card">
                <div className="step-number">
                  02
                </div>

                <h3>
                  Train your AI assistant
                </h3>

                <p>
                  Add your content and customize your assistant so it can
                  understand your customers and answer their questions.
                </p>
              </div>

              <div className="step-card">
                <div className="step-number">
                  03
                </div>

                <h3>
                  Start supporting customers
                </h3>

                <p>
                  Launch your AI assistant and let it handle customer
                  conversations around the clock.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================
            PRICING
        ========================= */}
        <section className="pricing-section" id="pricing">
          <div className="container">
            <div className="section-heading">
              <div className="section-badge">
                SIMPLE PRICING
              </div>

              <h2>
                Plans that grow with
                <span> your business.</span>
              </h2>

              <p>
                Choose the plan that fits your support needs. Upgrade anytime
                as your business grows.
              </p>
            </div>

            <div className="pricing-grid">
              {/* Starter */}
              <div className="pricing-card">
                <h3>Starter</h3>

                <p className="pricing-description">
                  For small teams getting started with AI support.
                </p>

                <div className="price">
                  <span>$</span>19
                  <small>/month</small>
                </div>

                <a href="#contact" className="pricing-button">
                  Get Started
                </a>

                <ul>
                  <li>✓ AI customer support</li>
                  <li>✓ 1,000 conversations</li>
                  <li>✓ Basic automation</li>
                  <li>✓ Email support</li>
                </ul>
              </div>

              {/* Growth */}
              <div className="pricing-card popular">
                <div className="popular-badge">
                  Most Popular
                </div>

                <h3>Growth</h3>

                <p className="pricing-description">
                  For growing businesses that need more automation.
                </p>

                <div className="price">
                  <span>$</span>49
                  <small>/month</small>
                </div>

                <a href="#contact" className="pricing-button primary">
                  Get Started
                </a>

                <ul>
                  <li>✓ Everything in Starter</li>
                  <li>✓ 5,000 conversations</li>
                  <li>✓ Advanced automation</li>
                  <li>✓ Business insights</li>
                </ul>
              </div>

              {/* Business */}
              <div className="pricing-card">
                <h3>Business</h3>

                <p className="pricing-description">
                  For teams with advanced customer support needs.
                </p>

                <div className="price">
                  <span>$</span>99
                  <small>/month</small>
                </div>

                <a href="#contact" className="pricing-button">
                  Get Started
                </a>

                <ul>
                  <li>✓ Everything in Growth</li>
                  <li>✓ Unlimited conversations</li>
                  <li>✓ Custom workflows</li>
                  <li>✓ Priority support</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* =========================
            TESTIMONIALS
        ========================= */}
        <section className="testimonials-section">
          <div className="container">
            <div className="section-heading">
              <div className="section-badge">
                CUSTOMER STORIES
              </div>

              <h2>
                Loved by teams
                <span> everywhere.</span>
              </h2>

              <p>
                See how businesses use Nexora to improve customer support and
                automate everyday work.
              </p>
            </div>

            <div className="testimonials-grid">
              <div className="testimonial-card">
                <div className="stars">
                  ★★★★★
                </div>

                <p className="testimonial-text">
                  “Nexora has completely changed the way we handle customer
                  support. Our team saves hours every week.”
                </p>

                <div className="testimonial-author">
                  <div className="author-avatar">
                    SM
                  </div>

                  <div>
                    <h4>Sarah Mitchell</h4>
                    <span>Head of Support, Flowdesk</span>
                  </div>
                </div>
              </div>

              <div className="testimonial-card">
                <div className="stars">
                  ★★★★★
                </div>

                <p className="testimonial-text">
                  “The AI assistant gives our customers instant answers and
                  allows our team to focus on more important tasks.”
                </p>

                <div className="testimonial-author">
                  <div className="author-avatar">
                    JW
                  </div>

                  <div>
                    <h4>James Wilson</h4>
                    <span>Founder, BrightLabs</span>
                  </div>
                </div>
              </div>

              <div className="testimonial-card">
                <div className="stars">
                  ★★★★★
                </div>

                <p className="testimonial-text">
                  “Easy to set up, simple to use, and incredibly powerful.
                  Nexora has become an essential part of our workflow.”
                </p>

                <div className="testimonial-author">
                  <div className="author-avatar">
                    EM
                  </div>

                  <div>
                    <h4>Emily Morgan</h4>
                    <span>Operations Manager, Orbit</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================
            FAQ
        ========================= */}
        <section className="faq-section" id="faq">
          <div className="container">
            <div className="section-heading">
              <div className="section-badge">
                FAQ
              </div>

              <h2>
                Frequently asked
                <span> questions.</span>
              </h2>

              <p>
                Everything you need to know about getting started with Nexora.
              </p>
            </div>

            <div className="faq-list">
              <div
                className={`faq-item ${openFaq === 0 ? "active" : ""}`}
                onClick={() =>
                  setOpenFaq(openFaq === 0 ? null : 0)
                }
              >
                <div className="faq-question">
                  <h3>
                    What is Nexora?
                  </h3>

                  <span>
                    {openFaq === 0 ? "−" : "+"}
                  </span>
                </div>

                {openFaq === 0 && (
                  <p>
                    Nexora is an AI-powered customer support platform that
                    helps businesses automate conversations and support
                    customers 24/7.
                  </p>
                )}
              </div>

              <div
                className={`faq-item ${openFaq === 1 ? "active" : ""}`}
                onClick={() =>
                  setOpenFaq(openFaq === 1 ? null : 1)
                }
              >
                <div className="faq-question">
                  <h3>
                    How quickly can I get started?
                  </h3>

                  <span>
                    {openFaq === 1 ? "−" : "+"}
                  </span>
                </div>

                {openFaq === 1 && (
                  <p>
                    You can connect your business information and configure
                    your AI assistant in just a few minutes.
                  </p>
                )}
              </div>

              <div
                className={`faq-item ${openFaq === 2 ? "active" : ""}`}
                onClick={() =>
                  setOpenFaq(openFaq === 2 ? null : 2)
                }
              >
                <div className="faq-question">
                  <h3>
                    Do I need technical skills?
                  </h3>

                  <span>
                    {openFaq === 2 ? "−" : "+"}
                  </span>
                </div>

                {openFaq === 2 && (
                  <p>
                    No. Nexora is designed to be simple to set up and easy
                    to use, even if you do not have a technical background.
                  </p>
                )}
              </div>

              <div
                className={`faq-item ${openFaq === 3 ? "active" : ""}`}
                onClick={() =>
                  setOpenFaq(openFaq === 3 ? null : 3)
                }
              >
                <div className="faq-question">
                  <h3>
                    Can I upgrade my plan later?
                  </h3>

                  <span>
                    {openFaq === 3 ? "−" : "+"}
                  </span>
                </div>

                {openFaq === 3 && (
                  <p>
                    Yes. You can upgrade your plan anytime as your business
                    and customer support needs grow.
                  </p>
                )}
              </div>

              <div
                className={`faq-item ${openFaq === 4 ? "active" : ""}`}
                onClick={() =>
                  setOpenFaq(openFaq === 4 ? null : 4)
                }
              >
                <div className="faq-question">
                  <h3>
                    Is there a free trial?
                  </h3>

                  <span>
                    {openFaq === 4 ? "−" : "+"}
                  </span>
                </div>

                {openFaq === 4 && (
                  <p>
                    Yes. You can get started without a credit card and
                    explore the platform before choosing a paid plan.
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* =========================
            CONTACT / CTA
        ========================= */}
        <section className="cta-section" id="contact">
          <div className="container">
            <div className="cta-box">
              <div className="cta-content">
                <div className="section-badge">
                  GET STARTED TODAY
                </div>

                <h2>
                  Ready to transform your
                  <span> customer support?</span>
                </h2>

                <p>
                  Start automating customer conversations and give your team
                  more time to focus on growing your business.
                </p>

                <div className="cta-buttons">
                  <a href="#contact" className="primary-button">
                    Get Started Free
                    <span>→</span>
                  </a>

                  <a href="#pricing" className="secondary-button">
                    View Pricing
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* =========================
          FOOTER
      ========================= */}
      <footer>
        <div className="container">
          <p>
            © 2026 Nexora. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;