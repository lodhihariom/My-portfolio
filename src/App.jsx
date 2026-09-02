export default function App() {
  const experienceYears = '1.5 years';

  const skills = {
    integration: [
      'Oracle Integration Cloud (OIC)',
      'REST APIs',
      'SOAP APIs',
      'XSLT Transformations',
      'Orchestration Flows',
      'Fault Handling',
    ],
    adapters: ['ERP Cloud Adapter', 'HCM Adapter', 'SCM Adapter', 'FTP/SFTP Adapter'],
    tools: ['Postman', 'SoapUI', 'Git', 'GitHub', 'PL/SQL'],
  };

  const projects = [
    {
      title: 'Agile to PDH Integration',
      description:
        'Automated product data processing from SFTP to Oracle Fusion ERP using OIC integrations, XSLT transformations, and ESS Jobs.',
      points: [
        'Generated FBDI-compliant CSV files',
        'Triggered Item Import ESS Jobs',
        'Implemented automated error notifications',
        'Configured file archival workflows',
      ],
    },
    {
      title: 'CRM Integration Support',
      description: 'Level 2 production support for Salesforce to Oracle Fusion integrations using OIC.',
      points: [
        'Resolved REST/SOAP API connectivity issues',
        'Performed RCA for recurring failures',
        'Supported XSLT-based transformations',
        'Validated end-to-end data accuracy',
      ],
    },
    {
      title: 'Oracle Fusion HCM Support',
      description: 'Production support for Oracle Fusion HCM modules and integration workflows.',
      points: [
        'Bug fixing and defect triage',
        'Performed structured RCA',
        'Validated data corrections',
        'Collaborated with functional consultants',
      ],
    },
  ];

  return (
    <div style={{ background: '#0f172a', color: '#e6eef6', minHeight: '100vh', fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
      <header style={{ padding: '2rem 1.5rem', borderBottom: '1px solid #1e293b' }}>
        <div style={{ maxWidth: '1120px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <h1 style={{ margin: 0, fontSize: '1.25rem', color: '#e6eef6', fontWeight: 700 }}>
              Hariom Lodhi — Oracle Integration Cloud Developer
            </h1>
            <div style={{ color: '#94a3b8', fontSize: '0.9rem' }}>{experienceYears} experience in Oracle Integration Cloud (OIC)</div>
          </div>
          <nav>
            <a href="#projects" style={{ color: '#cbd5e1', marginRight: '1rem', textDecoration: 'none' }}>Projects</a>
            <a href="#experience" style={{ color: '#cbd5e1', marginRight: '1rem', textDecoration: 'none' }}>Experience</a>
            <a href="#contact" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section style={{ padding: '4rem 1.5rem', maxWidth: '1120px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gap: '2.5rem', gridTemplateColumns: '1fr', alignItems: 'center' }}>
            <div>
              <p style={{ color: '#22d3ee', fontSize: '1.125rem', marginBottom: '0.75rem' }}>Oracle Integration Cloud Developer</p>
              <h2 style={{ fontSize: '2.25rem', lineHeight: 1.05, fontWeight: 800, marginBottom: '1rem' }}>
                Hi — I’m <span style={{ color: '#22d3ee' }}>Hariom Lodhi</span>
              </h2>
              <p style={{ color: '#cbd5e1', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '1.5rem', maxWidth: '48rem' }}>
                I build and support enterprise integration solutions using Oracle Integration Cloud. I focus on reliable data exchange between systems, fault-tolerant orchestration flows, and measurable operational improvements.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                <a href="mailto:lodhihariom28@gmail.com" style={{ padding: '0.75rem 1.25rem', borderRadius: '9999px', background: '#06b6d4', color: '#0f172a', fontWeight: 600, textDecoration: 'none' }}>
                  Email
                </a>
                <a href="https://www.linkedin.com/in/l-hariom/" target="_blank" rel="noreferrer" style={{ padding: '0.75rem 1.25rem', borderRadius: '9999px', border: '1px solid #334155', color: '#cbd5e1', textDecoration: 'none' }}>
                  LinkedIn
                </a>
                <a href="/resume.pdf" target="_blank" rel="noreferrer" style={{ padding: '0.75rem 1.25rem', borderRadius: '9999px', border: '1px solid #334155', color: '#cbd5e1', textDecoration: 'none' }}>
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </section>

        <section style={{ padding: '2.5rem 1.5rem', maxWidth: '1120px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(18rem, 1fr))' }}>
            <div style={{ background: '#0b1220', borderRadius: '0.75rem', padding: '1.5rem' }}>
              <h3 style={{ color: '#22d3ee', fontSize: '1.25rem', marginBottom: '0.75rem' }}>Core Skills</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {skills.integration.map((skill) => (
                  <span key={skill} style={{ padding: '0.35rem 0.6rem', borderRadius: '9999px', background: '#111827', fontSize: '0.85rem' }}>{skill}</span>
                ))}
              </div>
            </div>

            <div style={{ background: '#0b1220', borderRadius: '0.75rem', padding: '1.5rem' }}>
              <h3 style={{ color: '#22d3ee', fontSize: '1.25rem', marginBottom: '0.75rem' }}>Tools & Platform</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {skills.tools.map((skill) => (
                  <span key={skill} style={{ padding: '0.35rem 0.6rem', borderRadius: '9999px', background: '#111827', fontSize: '0.85rem' }}>{skill}</span>
                ))}
              </div>
            </div>

            <div style={{ background: '#0b1220', borderRadius: '0.75rem', padding: '1.5rem' }}>
              <h3 style={{ color: '#22d3ee', fontSize: '1.25rem', marginBottom: '0.75rem' }}>Adapters</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {skills.adapters.map((skill) => (
                  <span key={skill} style={{ padding: '0.35rem 0.6rem', borderRadius: '9999px', background: '#111827', fontSize: '0.85rem' }}>{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="experience" style={{ padding: '3rem 1.5rem', maxWidth: '1120px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1rem' }}>Professional Experience</h2>

          <div style={{ background: '#0b1220', borderRadius: '0.75rem', padding: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', flexWrap: 'wrap' }}>
              <div>
                <h3 style={{ margin: 0, fontSize: '1.125rem', fontWeight: 700 }}>Associate Consultant</h3>
                <div style={{ color: '#22d3ee', fontSize: '0.95rem', marginBottom: '0.5rem' }}>Vedantus Technologies Pvt. Ltd.</div>
                <div style={{ color: '#94a3b8' }}>Mar 2025 – Present · {experienceYears}</div>
              </div>
            </div>

            <div style={{ color: '#cbd5e1', lineHeight: 1.75, marginTop: '1rem' }}>
              <ul>
                <li>Diagnosed and resolved production integration failures by analyzing OIC fault logs and refining data mappings.</li>
                <li>Designed and optimized integration flows to improve runtime stability and throughput.</li>
                <li>Implemented automated FBDI imports and ESS job triggers for Oracle Fusion ERP data loads.</li>
                <li>Collaborated with functional teams to deliver timely root-cause analysis and long-term fixes.</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="projects" style={{ padding: '3rem 1.5rem', background: '#07101a' }}>
          <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#e6eef6', marginBottom: '1rem' }}>Featured Projects</h2>
            <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(20rem, 1fr))' }}>
              {projects.map((project) => (
                <div key={project.title} style={{ background: '#081220', borderRadius: '0.75rem', padding: '1rem' }}>
                  <h3 style={{ color: '#22d3ee', marginBottom: '0.5rem' }}>{project.title}</h3>
                  <p style={{ color: '#cbd5e1', marginBottom: '0.5rem' }}>{project.description}</p>
                  <ul style={{ color: '#94a3b8' }}>
                    {project.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: '3rem 1.5rem' }}>
          <div style={{ maxWidth: '720px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.75rem' }}>Certifications</h2>
            <div style={{ display: 'grid', gap: '0.75rem', gridTemplateColumns: 'repeat(auto-fit, minmax(18rem, 1fr))' }}>
              {[
                'OIC Internship Completion Certificate – Vedantus Technologies',
                'Java, DSA Training – Sheryians Pvt. Ltd.',
                'Android App Development Training – Sheryians Pvt. Ltd.',
              ].map((cert) => (
                <div key={cert} style={{ background: '#081220', borderRadius: '0.5rem', padding: '0.75rem' }}>
                  <p style={{ color: '#cbd5e1', margin: 0 }}>{cert}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" style={{ padding: '3rem 1.5rem', background: '#0f172a' }}>
          <div style={{ maxWidth: '640px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.75rem' }}>Let's Connect</h2>
            <p style={{ color: '#94a3b8', marginBottom: '1rem' }}>Open to Oracle Integration Cloud Developer opportunities, integration support roles, and enterprise integration projects.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', alignItems: 'center' }}>
              <a href="mailto:lodhihariom28@gmail.com" style={{ padding: '0.85rem 1.25rem', borderRadius: '0.5rem', background: '#06b6d4', color: '#0f172a', textDecoration: 'none', fontWeight: 600 }}>
                Email me
              </a>
              <a href="tel:+917489575326" style={{ padding: '0.85rem 1.25rem', borderRadius: '0.5rem', border: '1px solid #334155', color: '#e6eef6', textDecoration: 'none', display: 'inline-block' }}>
                +91 74895 75326
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer style={{ padding: '1.5rem', textAlign: 'center', color: '#64748b' }}>
        <div style={{ maxWidth: '1120px', margin: '0 auto' }}>© {new Date().getFullYear()} Hariom Lodhi — Oracle Integration Cloud Developer</div>
      </footer>
    </div>
  );
}
