export default function App() {
  const skills = {
    integration: [
      'Oracle Integration Cloud (OIC)',
      'REST APIs',
      'SOAP APIs',
      'XSLT Transformations',
      'Orchestration Flows',
      'Fault Handling',
    ],
    adapters: [
      'ERP Cloud Adapter',
      'HCM Adapter',
      'SCM Adapter',
      'FTP/SFTP Adapter',
    ],
    tools: ['Postman', 'SoapUI', 'Git', 'GitHub', 'PL/SQL'],
  };

  const projects = [
    {
      title: 'Agile to PDH Integration',
      description:
        'Automated .axml product data processing from SFTP to Oracle Fusion ERP using OIC integrations, XSLT transformations, and ESS Jobs.',
      points: [
        'Generated FBDI-compliant CSV files',
        'Triggered Item Import ESS Jobs',
        'Implemented automated error notifications',
        'Configured file archival workflows',
      ],
    },
    {
      title: 'CRM Integration Support',
      description:
        'Provided Level 2 production support for Salesforce to Oracle Fusion integrations using OIC.',
      points: [
        'Resolved REST/SOAP API connectivity issues',
        'Performed RCA for recurring failures',
        'Supported XSLT-based transformations',
        'Validated end-to-end data accuracy',
      ],
    },
    {
      title: 'Oracle Fusion HCM Support',
      description:
        'Delivered production support for Oracle Fusion HCM modules and integration workflows.',
      points: [
        'Bug fixing and defect triage',
        'Performed structured RCA',
        'Validated data corrections',
        'Collaborated with functional consultants',
      ],
    },
  ];

  return (
    <div style={{ background: '#0f172a', color: '#e2e8f0', minHeight: '100vh', fontFamily: 'Inter, system-ui, sans-serif' }}>
      <section style={{ padding: '4rem 1.5rem', maxWidth: '1120px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gap: '2.5rem', gridTemplateColumns: '1fr', alignItems: 'center' }}>
          <div>
            <p style={{ color: '#22d3ee', fontSize: '1.125rem', marginBottom: '0.75rem' }}>Oracle Integration Cloud Developer</p>
            <h1 style={{ fontSize: '3rem', lineHeight: 1.05, fontWeight: 800, marginBottom: '1.5rem' }}>
              Hi, I'm <span style={{ color: '#22d3ee' }}>Hariom Lodhi</span>
            </h1>
            <p style={{ color: '#cbd5e1', fontSize: '1.125rem', lineHeight: 1.75, marginBottom: '2rem', maxWidth: '42rem' }}>
              Results-driven OIC Developer with hands-on experience in Oracle Fusion ERP & HCM integrations, REST/SOAP APIs, XSLT transformations, ESS Jobs, and production support.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <a href="mailto:lodhihariom28@gmail.com" style={{ padding: '0.875rem 1.5rem', borderRadius: '9999px', background: '#06b6d4', color: '#0f172a', fontWeight: 600, textDecoration: 'none' }}>
                Contact Me
              </a>
              <a href="https://www.linkedin.com/in/l-hariom/" target="_blank" rel="noreferrer" style={{ padding: '0.875rem 1.5rem', borderRadius: '9999px', border: '1px solid #334155', color: '#e2e8f0', textDecoration: 'none' }}>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '4rem 1.5rem', maxWidth: '1120px', margin: '0 auto' }}>
        <div style={{ maxWidth: '44rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.5rem' }}>About Me</h2>
          <p style={{ color: '#cbd5e1', fontSize: '1.125rem', lineHeight: 1.75, marginBottom: '1rem' }}>
            I specialize in building and supporting enterprise-grade Oracle Integration Cloud solutions. My experience includes working with Oracle Fusion ERP, HCM, REST/SOAP APIs, FBDI imports, ESS Jobs, and integration monitoring.
          </p>
          <p style={{ color: '#94a3b8', fontSize: '1.125rem', lineHeight: 1.75 }}>
            I enjoy solving production issues, optimizing integration flows, and collaborating with cross-functional teams to deliver scalable and reliable business solutions.
          </p>
        </div>
      </section>

      <section style={{ background: '#0f172a', borderTop: '1px solid #1e293b', borderBottom: '1px solid #1e293b', padding: '4rem 1.5rem' }}>
        <div style={{ maxWidth: '1120px', margin: '0 auto', display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(18rem, 1fr))' }}>
          <div style={{ background: '#111827', borderRadius: '1.5rem', padding: '2rem' }}>
            <h3 style={{ color: '#22d3ee', fontSize: '1.5rem', marginBottom: '1rem' }}>Integration</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              {skills.integration.map((skill) => (
                <span key={skill} style={{ padding: '0.5rem 0.75rem', borderRadius: '9999px', background: '#1e293b', fontSize: '0.9rem' }}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div style={{ background: '#111827', borderRadius: '1.5rem', padding: '2rem' }}>
            <h3 style={{ color: '#22d3ee', fontSize: '1.5rem', marginBottom: '1rem' }}>Oracle Adapters</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              {skills.adapters.map((skill) => (
                <span key={skill} style={{ padding: '0.5rem 0.75rem', borderRadius: '9999px', background: '#1e293b', fontSize: '0.9rem' }}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div style={{ background: '#111827', borderRadius: '1.5rem', padding: '2rem' }}>
            <h3 style={{ color: '#22d3ee', fontSize: '1.5rem', marginBottom: '1rem' }}>Tools & Backend</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              {skills.tools.map((skill) => (
                <span key={skill} style={{ padding: '0.5rem 0.75rem', borderRadius: '9999px', background: '#1e293b', fontSize: '0.9rem' }}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '4rem 1.5rem', maxWidth: '1120px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.5rem' }}>Professional Experience</h2>
        <div style={{ background: '#111827', borderRadius: '1.5rem', padding: '2rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
            <div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Associate Consultant</h3>
              <p style={{ color: '#22d3ee', fontSize: '1rem' }}>Vedantus Technologies Pvt. Ltd.</p>
            </div>
            <div style={{ color: '#94a3b8' }}>June 2025 – May 2026</div>
          </div>
          <div style={{ color: '#cbd5e1', lineHeight: 1.75 }}>
            <p>• Diagnosed and resolved production integration failures by analyzing OIC fault logs and refining data mappings.</p>
            <p>• Monitored integration runtime performance and optimized critical business flows.</p>
            <p>• Collaborated with functional and technical teams for RCA and issue resolution across Oracle Fusion ERP and HCM modules.</p>
          </div>
        </div>
      </section>

      <section style={{ background: '#0f172a', borderTop: '1px solid #1e293b', borderBottom: '1px solid #1e293b', padding: '4rem 1.5rem' }}>
        <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, textAlign: 'center', marginBottom: '2rem' }}>Featured Projects</h2>
          <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(20rem, 1fr))' }}>
            {projects.map((project) => (
              <div key={project.title} style={{ background: '#111827', borderRadius: '1.5rem', padding: '2rem' }}>
                <h3 style={{ color: '#22d3ee', fontSize: '1.5rem', marginBottom: '1rem' }}>{project.title}</h3>
                <p style={{ color: '#cbd5e1', marginBottom: '1rem' }}>{project.description}</p>
                <ul style={{ color: '#94a3b8', lineHeight: 1.75 }}>
                  {project.points.map((point) => (
                    <li key={point}>• {point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '4rem 1.5rem', maxWidth: '1120px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.5rem' }}>Certifications</h2>
        <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(18rem, 1fr))' }}>
          {[
            'OIC Internship Completion Certificate – Vedantus Technologies',
            'Java, DSA Training – Sheryians Pvt. Ltd.',
            'Android App Development Training – Sheryians Pvt. Ltd.',
          ].map((cert) => (
            <div key={cert} style={{ background: '#111827', borderRadius: '1.5rem', padding: '1.5rem' }}>
              <p style={{ color: '#cbd5e1', lineHeight: 1.75 }}>{cert}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: '#0f172a', padding: '4rem 1.5rem' }}>
        <div style={{ maxWidth: '64rem', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem' }}>Let's Connect</h2>
          <p style={{ color: '#94a3b8', fontSize: '1.125rem', lineHeight: 1.75, marginBottom: '2rem' }}>
            Open to Oracle Integration Cloud Developer opportunities, integration support roles, and enterprise integration projects.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
            <a href="mailto:lodhihariom28@gmail.com" style={{ padding: '1rem 1.5rem', borderRadius: '1rem', background: '#06b6d4', color: '#0f172a', textDecoration: 'none', fontWeight: 600 }}>
              lodhihariom28@gmail.com
            </a>
            <a href="tel:+917489575326" style={{ padding: '1rem 1.5rem', borderRadius: '1rem', border: '1px solid #334155', color: '#e2e8f0', textDecoration: 'none', display: 'inline-block' }}>
              +91 7489575326
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
