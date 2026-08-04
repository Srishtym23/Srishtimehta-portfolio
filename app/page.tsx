import { projects } from "./project-data";

const principles = [
  {
    number: "01",
    title: "Find the real problem",
    body: "Start with the user, their context, and the decision they are struggling to make—not the feature request.",
  },
  {
    number: "02",
    title: "Make trade-offs explicit",
    body: "Prioritize with evidence: customer risk, signal quality, business value, and engineering feasibility.",
  },
  {
    number: "03",
    title: "Prototype to learn",
    body: "Use prototypes and AI-native workflows to make ideas tangible and reduce uncertainty before expensive delivery.",
  },
  {
    number: "04",
    title: "Ship for outcomes",
    body: "Connect roadmaps to measurable customer and business impact, then learn from what happens in the real world.",
  },
];

const journey = [
  {
    years: "2017 — 2021",
    company: "G4S",
    role: "Software Developer",
    text: "Built the technical foundation: systems thinking, performance, security, and workflow design at enterprise scale.",
    proof: "77% faster performance · 121K users",
    details: [
      "Improved system performance from 3.7 seconds to 0.75 seconds by removing redundant service calls and tuning scheduling flows.",
      "Designed the Patrol and Response experience from scratch for 121K US employees, reducing scheduling time by 42%.",
      "Reduced service requests by 55% by uncovering unmet needs in break management and standardized workflows across 100+ features.",
      "Built role-based access management and owned the roadmap for the Events implementation.",
    ],
  },
  {
    years: "2021",
    company: "CData",
    role: "Senior Product Consultant",
    text: "Moved closer to customers, translating complex data-connectivity needs into clear solution recommendations.",
    proof: "50+ enterprise data sources",
    details: [
      "Delivered technical demonstrations and pre-sales consultations for enterprise data-connectivity products.",
      "Translated customer requirements spanning more than 50 data sources into practical solution recommendations.",
      "Built stronger customer empathy by working directly at the intersection of product capability and user need.",
    ],
  },
  {
    years: "2022 — 2026",
    company: "Cisco",
    role: "Product Manager → Senior Product Manager",
    text: "Owned platform strategy, discovery, delivery, lifecycle, and go-to-market for a global enterprise portfolio.",
    proof: "$90M portfolio · $60M new-product bookings",
    details: [
      "Managed a $90M annual enterprise portfolio across strategy, roadmap, lifecycle, and go-to-market execution.",
      "Generated $60M in bookings by identifying an underserved segment and leading a new product from concept to launch.",
      "Delivered 10 platform capabilities contributing $30M in incremental revenue and unlocked another $5M by accelerating a customer capability.",
      "Increased average customer lifetime value by $50K through a platform migration strategy and identified a $250M addressable opportunity.",
    ],
  },
  {
    years: "2026",
    company: "Cloudflare",
    role: "Senior Product Manager",
    text: "Defined analytics and investigation experiences for AI usage, agent behaviour, and shared application intelligence.",
    proof: "4 analytics capabilities · 3-product integration",
    details: [
      "Defined product strategy and workflows for agent behaviour analytics across API activity, MCP traffic, token consumption, and application context.",
      "Designed explainable AI-usage monitoring and investigation experiences for enterprise security operations teams.",
      "Owned the roadmap for UEBA and application intelligence, prioritizing more than 10 detection and investigation use cases.",
      "Shipped four analytics capabilities and led shared application intelligence across Gateway, Access, and CASB.",
    ],
  },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="Main navigation">
        <a className="wordmark" href="#top" aria-label="Srishti Mehta, home">
          <img src="/srishti-mark.png" alt="" />
        </a>
        <div className="nav-links">
          <a href="#journey">Journey</a>
          <a href="#approach">Approach</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="nav-cta" href="mailto:mehtasrishti.23@gmail.com">
          Let&apos;s talk <Arrow />
        </a>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Senior Product Manager · AI, Security & Enterprise SaaS</p>
          <h1>
            I turn complex systems into products people can <em>trust.</em>
          </h1>
          <p className="hero-intro">
            I&apos;m Srishti—an engineer, ISB alum, and product leader building enterprise
            platforms, AI-enabled workflows, and analytics experiences from discovery through launch.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#projects">Explore my work <span>↓</span></a>
            <a className="button text-button" href="#approach">How I think <span>↗</span></a>
            <a className="button text-button resume-button" href="/Srishti-Mehta-Resume.pdf" download>Download my résumé <span>↓</span></a>
          </div>
          <dl className="hero-stats" aria-label="Career highlights">
            <div><dt>6+</dt><dd>Years building products</dd></div>
            <div><dt>5</dt><dd>Products managed</dd></div>
            <div><dt>$90M</dt><dd>Portfolio managed</dd></div>
          </dl>
        </div>

        <figure className="portrait-block">
          <div className="portrait-frame">
            <img src="/srishti-mehta.jpg" alt="Srishti Mehta on the Brooklyn Bridge" />
          </div>
          <figcaption>
            <span>01 / PROFILE</span>
            <span>Bangalore, India</span>
          </figcaption>
        </figure>
      </section>

      <section className="section shell" id="journey">
        <header className="section-heading">
          <p className="section-index">01 / JOURNEY</p>
          <div>
            <p className="eyebrow">From code to product strategy</p>
            <h2>A career spent moving closer to the problem.</h2>
          </div>
        </header>
        <div className="timeline">
          {journey.map((item, index) => (
            <details className="experience" key={item.company}>
              <summary className="timeline-row">
                <div className="timeline-year"><span>0{index + 1}</span><p>{item.years}</p></div>
                <div className="timeline-role"><h3>{item.company}</h3><p>{item.role}</p></div>
                <p className="timeline-copy">{item.text}</p>
                <div className="timeline-proof"><p>{item.proof}</p><span className="expand-label">View details <i>+</i></span></div>
              </summary>
              <div className="experience-details">
                <p className="experience-label">Selected impact</p>
                <ul>{item.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
              </div>
            </details>
          ))}
        </div>
      </section>

      <section className="section shell" id="approach">
        <header className="section-heading">
          <p className="section-index">02 / APPROACH</p>
          <div>
            <p className="eyebrow">My product operating system</p>
            <h2>Clarity before velocity.</h2>
            <p className="section-lede">I like ambiguous, systems-heavy problems. My job is to create enough clarity for a team to make strong decisions and move.</p>
          </div>
        </header>
        <div className="principles-grid">
          {principles.map((item) => (
            <article className="principle" key={item.number}>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
        <blockquote>
          “A roadmap is not a list of promises. It is a record of the bets we believe are worth making—and why.”
        </blockquote>
      </section>

      <section className="section shell" id="projects">
        <header className="section-heading">
          <p className="section-index">03 / PROJECTS</p>
          <div>
            <p className="eyebrow">Projects in motion</p>
            <h2>What I&apos;m exploring and building now.</h2>
            <p className="section-lede">A living shelf of experiments, product explorations, and ideas. Each project opens into its own evolving case study.</p>
          </div>
        </header>

        <div className="project-grid">
          {projects.map((project) => {
            const content = (
              <>
                <div className="project-top">
                  <span>{project.number}</span>
                  <span className="status"><i /> {project.status}</span>
                </div>
                <div className="project-body">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
                <div className="project-bottom">
                  <div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  <span className="project-link">Open case study →</span>
                </div>
              </>
            );

            return (
              <a className={`project-card ${project.featured ? "featured" : ""}`} href={`/projects/${project.slug}`} key={project.title}>{content}</a>
            );
          })}
        </div>
        <p className="edit-note">These internal pages are ready to grow into full problem, process, decision, and outcome narratives.</p>
      </section>

      <section className="contact" id="contact">
        <div className="shell contact-inner">
          <p className="section-index light">04 / CONTACT</p>
          <div>
            <p className="eyebrow light">Have an interesting problem?</p>
            <h2>Let&apos;s turn the messy middle into something useful.</h2>
            <div className="availability">
              <p><span className="availability-dot" /> Open to opportunities</p>
              <h3>Open to Senior Product Manager roles in Bangalore, the UAE, and Europe.</h3>
              <p className="availability-copy">Hiring for a complex enterprise or AI product—or looking for a PM who combines technical depth with business judgment? I&apos;m quick to reply.</p>
            </div>
            <div className="contact-links">
              <a href="mailto:mehtasrishti.23@gmail.com">Email me <Arrow /></a>
              <a href="https://www.linkedin.com/in/srishti-mehta23" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="shell footer-inner"><span>© 2026 Srishti Mehta</span><span>Designed with intent. Built with curiosity.</span><a href="#top">Back to top ↑</a></div>
      </footer>
    </main>
  );
}
