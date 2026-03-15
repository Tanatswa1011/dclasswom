import { projects } from '../data/siteContent';

function ProjectsPage() {
  return (
    <>
      <section className="page-hero projects-hero">
        <div className="container">
          <p className="eyebrow">Projects</p>
          <h1>Completed Work and Field Operations</h1>
          <p>
            A visual overview of operations that reflect our practical experience in marine support, waste handling,
            and environmental service execution.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Project Gallery</h2>
            <p>
              Categories and captions are provided to show the type of work we perform and the operational context of
              each activity.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article key={project.title} className="project-card full">
                <img src={project.image} alt={project.title} loading="lazy" />
                <div className="project-info">
                  <p className="tag">{project.category}</p>
                  <h3>{project.title}</h3>
                  <p>{project.caption}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default ProjectsPage;
