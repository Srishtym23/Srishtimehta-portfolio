import { notFound } from "next/navigation";
import { getProject, projects } from "../../project-data";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  return (
    <main className="case-study">
      <nav className="nav case-nav" aria-label="Project navigation">
        <a className="wordmark" href="/#top" aria-label="Srishti Mehta, home"><img src="/srishti-mark.png" alt="" /></a>
        <a className="back-link" href="/#projects">← All projects</a>
      </nav>

      <article className="case-shell">
        <header className="case-hero">
          <div className="case-meta">
            <span>{project.number} / PROJECT</span>
            <span>{project.status}</span>
          </div>
          <p className="eyebrow">{project.tags.join(" · ")}</p>
          <h1>{project.title}</h1>
          <p className="case-intro">{project.description}</p>
        </header>

        <div className="case-grid">
          <p className="section-index">01 / CHALLENGE</p>
          <section>
            <h2>The problem worth understanding.</h2>
            <p>{project.challenge}</p>
          </section>

          <p className="section-index">02 / APPROACH</p>
          <section>
            <h2>How I&apos;m approaching it.</h2>
            <ol className="case-steps">
              {project.approach.map((step, index) => <li key={step}><span>0{index + 1}</span>{step}</li>)}
            </ol>
          </section>

          <p className="section-index">03 / OUTCOME</p>
          <section>
            <h2>What this is teaching me.</h2>
            <p>{project.outcome}</p>
          </section>
        </div>

        <footer className="case-footer">
          <p>This case study is designed to evolve as the project develops.</p>
          <a href="/#projects">Explore another project →</a>
        </footer>
      </article>
    </main>
  );
}
