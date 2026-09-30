export default function App() {
  const currentRole = {
    title: 'OIC Consultant',
    company: 'Shritu Technology Pvt. Ltd.',
    period: 'April 2026 – Present',
    experience: '1.5+ years'
  };

  const coreSkills = {
    integration: [
      'Oracle Integration Cloud (OIC)',
      'Orchestration Flows',
      'REST/SOAP Integrations',
      'Data Mapping',
      'XSLT Transformations',
      'Lookups',
      'Fault Handling',
      'Integration Monitoring'
    ],
    oracle: [
      'Oracle Fusion Cloud ERP',
      'Oracle Fusion HCM',
      'ERP Cloud Adapter',
      'HCM Adapter',
      'SCM Adapter',
      'FTP/SFTP Adapter'
    ],
    functional: [
      'FBDI',
      'Import Management',
      'ESS Jobs',
      'ATP Validation',
      'PL/SQL'
    ],
    tools: [
      'Postman',
      'SoapUI',
      'Git',
      'GitHub',
      'Jira',
      'ServiceNow'
    ]
  };

  const experience = [
    {
      role: 'OIC Consultant',
      company: 'Shritu Technology Pvt. Ltd.',
      period: 'April 2026 – Present',
      highlights: [
        'Develop and maintain Oracle Integration Cloud (OIC) integrations for enterprise systems using orchestration flows, REST/SOAP adapters, and XSLT transformations',
        'Monitor OIC integration runtime performance, identify bottlenecks, and implement optimization approaches to improve throughput and fault tolerance',
        'Developed OIC integration to retrieve and delete lookup codes across Oracle Fusion HCM lookup types through REST APIs',
        'Implemented pagination handling for bulk lookup records and resolved API-level header mismatches'
      ]
    },
    {
      role: 'Associate Consultant',
      company: 'Vedantus Technologies Pvt. Ltd.',
      period: 'June 2025 – April 2026',
      highlights: [
        'Diagnosed and resolved production integration failures by analyzing OIC fault logs, reprocessing failed messages, and refining data mappings',
        'Monitored OIC integration runtime performance, identified bottlenecks, and implemented optimization approaches',
        'Collaborated with functional and technical teams to perform root cause analysis (RCA) and resolve integration issues',
        'Provided production support for Oracle Fusion integrations including incident analysis, defect triage, and data validation'
      ]
    }
  ];

  const projects = [
    {
      title: 'Automated Product Data Processing to Oracle Fusion ERP',
      company: 'Vedantus Technology Pvt Ltd',
      period: 'Jun 2025 – Sep 2025',
      role: 'OIC Developer',
      environment: 'Oracle Integration Cloud',
      description: 'Automated retrieval of AXML product data files from SFTP and applied transformation logic to map and persist product data into the database.',
      highlights: [
        'Automated retrieval of AXML product data files from SFTP and applied transformation logic',
        'Generated FBDI-compliant CSV files and triggered Item Import ESS Jobs through Oracle Import Management',
        'Implemented file archival workflows and automated error notifications for failed OIC integration instances'
      ],
      skills: ['OIC', 'SCM', 'SFTP', 'FBDI', 'ESS Jobs', 'XSLT', 'PL/SQL']
    },
    {
      title: 'Salesforce CRM & Oracle Fusion HCM Integration Support',
      company: 'Vedantus Technology Pvt Ltd',
      period: 'Sep 2025 – April 2026',
      role: 'OIC Developer',
      environment: 'Oracle Integration Cloud',
      description: 'Level 2 production support for Salesforce CRM to Oracle Fusion integrations and Oracle Fusion HCM modules.',
      highlights: [
        'Resolved REST/SOAP connectivity issues and performed RCA to sustain continuous data synchronization',
        'Validated end-to-end data accuracy through XSLT-based transformations and ATP checks',
        'Delivered bug fixes, defect triage, and RCA for Oracle Fusion HCM integrations',
        'Partnered with functional consultants and business users to validate data corrections'
      ],
      skills: ['OIC', 'REST APIs', 'SOAP APIs', 'HCM', 'CRM', 'XSLT', 'RCA', 'PL/SQL']
    }
  ];

  const certifications = [
    'Oracle Fusion Cloud Applications ERP Process Essentials Certified - Rel 1 – Oracle',
    'Oracle Fusion Cloud Applications HCM Process Essentials Certified - Rel 1 – Oracle',
    'OIC Internship Completion Certificate – Vedantus Technologies Pvt. Ltd.',
    'Java, Data Structures & Algorithms Training – Sheryians Pvt. Ltd., Bhopal',
    'Android App Development Training – Sheryians Pvt. Ltd., Bhopal'
  ];

  const education = [
    {
      degree: 'Bachelor of Technology (B.Tech.)',
      field: 'Computer Science Engineering',
      institution: 'Adina Institute of Science and Technology, Sagar, Madhya Pradesh',
      year: 'May 2021 – April 2025'
    },
    {
      degree: 'Class XII',
      field: 'Mathematics (MPBSE)',
      institution: 'Govt. Higher Secondary Boys School, Rahatgarh, Madhya Pradesh',
      year: 'May 2020 – March 2021'
    }
  ];

  return (
    <div style={{ background: '#0f172a', color: '#e6eef6', minHeight: '100vh', fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
      {/* Header */}
      <header className="site-header" style={{ padding: '2rem 1.5rem', borderBottom: '1px solid #1e293b' }}>
        <div className="nav-row" style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <h1 style={{ margin: 0, fontSize: '1.25rem', color: '#e6eef6', fontWeight: 700 }}>
              Hariom Lodhi — OIC Developer
            </h1>
            <div style={{ color: '#94a3b8', fontSize: '0.9rem' }}>{currentRole.experience} in Oracle Integration Cloud (OIC)</div>
          </div>
          <nav style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#experience" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.95rem' }}>Experience</a>
            <a href="#projects" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.95rem' }}>Projects</a>
            <a href="#skills" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.95rem' }}>Skills</a>
            <a href="#contact" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.95rem' }}>Contact</a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section style={{ padding: '4rem 1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gap: '2.5rem', gridTemplateColumns: '1fr' }}>
            <div>
              <p style={{ color: '#22d3ee', fontSize: '1.125rem', marginBottom: '0.75rem', marginTop: 0 }}>Oracle Integration Cloud Specialist</p>
              <h2 style={{ fontSize: '2.5rem', lineHeight: 1.2, fontWeight: 800, marginBottom: '1rem', marginTop: 0 }}>
                Hi, I'm <span style={{ color: '#22d3ee' }}>Hariom Lodhi</span>
              </h2>
              <p style={{ color: '#cbd5e1', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '1.5rem', maxWidth: '56rem', marginTop: 0 }}>
                OIC Developer with <strong>1.5+ years</strong> of professional experience designing and developing <strong>20+ integrations</strong>, and monitoring and supporting <strong>15+ production integrations</strong> between Oracle Fusion Cloud ERP, HCM, and external systems. Specialized in REST/SOAP APIs, Oracle adapters, XSLT transformations, and production incident resolution.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                <a href="mailto:lodhihariom28@gmail.com" style={{ padding: '0.75rem 1.5rem', borderRadius: '0.5rem', background: '#06b6d4', color: '#0f172a', fontWeight: 600, textDecoration: 'none', display: 'inline-block' }}>
                  Email
                </a>
                <a href="https://www.linkedin.com/in/l-hariom/" target="_blank" rel="noreferrer" style={{ padding: '0.75rem 1.5rem', borderRadius: '0.5rem', border: '1px solid #334155', color: '#cbd5e1', textDecoration: 'none', display: 'inline-block' }}>
                  LinkedIn
                </a>
                <a href="https://github.com/lodhihariom" target="_blank" rel="noreferrer" style={{ padding: '0.75rem 1.5rem', borderRadius: '0.5rem', border: '1px solid #334155', color: '#cbd5e1', textDecoration: 'none', display: 'inline-block' }}>
                  GitHub
                </a>
                <a href={`${import.meta.env.BASE_URL}Hariom_Lodhi_Resume.pdf`} target="_blank" rel="noreferrer" style={{ padding: '0.75rem 1.5rem', borderRadius: '0.5rem', border: '1px solid #22d3ee', color: '#22d3ee', textDecoration: 'none', display: 'inline-block', fontWeight: 600 }}>
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Key Metrics */}
        <section style={{ padding: '3rem 1.5rem', background: '#07101a' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
              <div style={{ background: '#0b1220', borderRadius: '0.75rem', padding: '2rem', border: '1px solid #1e293b' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#22d3ee', marginBottom: '0.5rem' }}>20+</div>
                <div style={{ color: '#cbd5e1' }}>Integrations Designed & Developed</div>
              </div>
              <div style={{ background: '#0b1220', borderRadius: '0.75rem', padding: '2rem', border: '1px solid #1e293b' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#22d3ee', marginBottom: '0.5rem' }}>15+</div>
                <div style={{ color: '#cbd5e1' }}>Production Integrations Supported</div>
              </div>
              <div style={{ background: '#0b1220', borderRadius: '0.75rem', padding: '2rem', border: '1px solid #1e293b' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#22d3ee', marginBottom: '0.5rem' }}>1.5+</div>
                <div style={{ color: '#cbd5e1' }}>Years of OIC Experience</div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" style={{ padding: '3rem 1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '2rem', marginTop: 0 }}>Core Technical Skills</h2>

          <div style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            {/* Oracle Integration */}
            <div style={{ background: '#0b1220', borderRadius: '0.75rem', padding: '1.5rem', border: '1px solid #1e293b' }}>
              <h3 style={{ color: '#22d3ee', fontSize: '1.125rem', marginBottom: '1rem', marginTop: 0 }}>Oracle Integration</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                {coreSkills.integration.map((skill) => (
                  <span key={skill} style={{ padding: '0.5rem 0.75rem', borderRadius: '0.375rem', background: '#1e293b', color: '#e6eef6', fontSize: '0.875rem' }}>{skill}</span>
                ))}
              </div>
            </div>

            {/* Oracle Cloud & Adapters */}
            <div style={{ background: '#0b1220', borderRadius: '0.75rem', padding: '1.5rem', border: '1px solid #1e293b' }}>
              <h3 style={{ color: '#22d3ee', fontSize: '1.125rem', marginBottom: '1rem', marginTop: 0 }}>Oracle Cloud & Adapters</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                {coreSkills.oracle.map((skill) => (
                  <span key={skill} style={{ padding: '0.5rem 0.75rem', borderRadius: '0.375rem', background: '#1e293b', color: '#e6eef6', fontSize: '0.875rem' }}>{skill}</span>
                ))}
              </div>
            </div>

            {/* Oracle Functional/Technical */}
            <div style={{ background: '#0b1220', borderRadius: '0.75rem', padding: '1.5rem', border: '1px solid #1e293b' }}>
              <h3 style={{ color: '#22d3ee', fontSize: '1.125rem', marginBottom: '1rem', marginTop: 0 }}>Functional & Development</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                {coreSkills.functional.map((skill) => (
                  <span key={skill} style={{ padding: '0.5rem 0.75rem', borderRadius: '0.375rem', background: '#1e293b', color: '#e6eef6', fontSize: '0.875rem' }}>{skill}</span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div style={{ background: '#0b1220', borderRadius: '0.75rem', padding: '1.5rem', border: '1px solid #1e293b' }}>
              <h3 style={{ color: '#22d3ee', fontSize: '1.125rem', marginBottom: '1rem', marginTop: 0 }}>Tools & Platforms</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                {coreSkills.tools.map((skill) => (
                  <span key={skill} style={{ padding: '0.5rem 0.75rem', borderRadius: '0.375rem', background: '#1e293b', color: '#e6eef6', fontSize: '0.875rem' }}>{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" style={{ padding: '3rem 1.5rem', background: '#07101a' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '2rem', marginTop: 0 }}>Professional Experience</h2>

            {experience.map((exp, idx) => (
              <div key={idx} style={{ background: '#0b1220', borderRadius: '0.75rem', padding: '2rem', marginBottom: '1.5rem', border: '1px solid #1e293b' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
                  <div>
                    <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 700, color: '#e6eef6' }}>{exp.role}</h3>
                    <div style={{ color: '#22d3ee', fontSize: '0.95rem', fontWeight: 600 }}>{exp.company}</div>
                  </div>
                  <div style={{ color: '#94a3b8', fontSize: '0.9rem', textAlign: 'right' }}>{exp.period}</div>
                </div>

                <ul style={{ color: '#cbd5e1', lineHeight: 1.75, marginTop: '1rem', paddingLeft: '1.5rem' }}>
                  {exp.highlights.map((point, i) => (
                    <li key={i} style={{ marginBottom: '0.75rem' }}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" style={{ padding: '3rem 1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '2rem', marginTop: 0 }}>Key Projects</h2>

          {projects.map((project, idx) => (
            <div key={idx} style={{ background: '#0b1220', borderRadius: '0.75rem', padding: '2rem', marginBottom: '1.5rem', border: '1px solid #1e293b' }}>
              <div style={{ marginBottom: '1rem' }}>
                <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.25rem', fontWeight: 700, color: '#22d3ee' }}>{project.title}</h3>
                <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', fontSize: '0.9rem', color: '#94a3b8' }}>
                  <span><strong>Company:</strong> {project.company}</span>
                  <span><strong>Period:</strong> {project.period}</span>
                  <span><strong>Role:</strong> {project.role}</span>
                </div>
              </div>

              <p style={{ color: '#cbd5e1', marginBottom: '1rem' }}>{project.description}</p>

              <div style={{ marginBottom: '1rem' }}>
                <h4 style={{ color: '#e6eef6', marginBottom: '0.75rem', marginTop: 0 }}>Key Achievements:</h4>
                <ul style={{ color: '#cbd5e1', lineHeight: 1.6, margin: 0, paddingLeft: '1.5rem' }}>
                  {project.highlights.map((highlight, i) => (
                    <li key={i} style={{ marginBottom: '0.5rem' }}>{highlight}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 style={{ color: '#e6eef6', marginBottom: '0.75rem', marginTop: '1rem' }}>Technologies & Skills:</h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                  {project.skills.map((skill) => (
                    <span key={skill} style={{ padding: '0.35rem 0.65rem', borderRadius: '0.375rem', background: '#1e293b', color: '#22d3ee', fontSize: '0.85rem' }}>{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Certifications Section */}
        <section style={{ padding: '3rem 1.5rem', background: '#07101a' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '2rem', marginTop: 0 }}>Certifications & Training</h2>
            <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
              {certifications.map((cert) => (
                <div key={cert} style={{ background: '#0b1220', borderRadius: '0.75rem', padding: '1.25rem', border: '1px solid #1e293b' }}>
                  <p style={{ color: '#cbd5e1', margin: 0, fontSize: '0.95rem' }}>{cert}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section style={{ padding: '3rem 1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '2rem', marginTop: 0 }}>Education</h2>
          {education.map((edu, idx) => (
            <div key={idx} style={{ background: '#0b1220', borderRadius: '0.75rem', padding: '1.5rem', border: '1px solid #1e293b' }}>
              <h3 style={{ margin: '0 0 0.5rem 0', color: '#22d3ee', fontSize: '1.125rem' }}>{edu.degree}</h3>
              <p style={{ margin: '0 0 0.5rem 0', color: '#e6eef6' }}>{edu.field}</p>
              <p style={{ margin: '0 0 0.5rem 0', color: '#94a3b8', fontSize: '0.95rem' }}>{edu.institution}</p>
              <p style={{ margin: 0, color: '#64748b', fontSize: '0.9rem' }}>{edu.year}</p>
            </div>
          ))}
        </section>

        {/* Contact Section */}
        <section id="contact" style={{ padding: '3rem 1.5rem', background: '#07101a' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1rem', marginTop: 0 }}>Let's Connect</h2>
            <p style={{ color: '#94a3b8', marginBottom: '2rem', fontSize: '1.05rem' }}>
              I'm open to Oracle Integration Cloud Developer opportunities, integration support roles, and enterprise integration projects. Let me know how I can help!
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
              <a href="mailto:lodhihariom28@gmail.com" style={{ padding: '0.85rem 2rem', borderRadius: '0.5rem', background: '#06b6d4', color: '#0f172a', textDecoration: 'none', fontWeight: 600, display: 'inline-block' }}>
                Email me
              </a>
              <a href="https://www.linkedin.com/in/l-hariom/" target="_blank" rel="noreferrer" style={{ padding: '0.85rem 2rem', borderRadius: '0.5rem', border: '1px solid #334155', color: '#e6eef6', textDecoration: 'none', display: 'inline-block' }}>
                LinkedIn Profile
              </a>
                <a href={`${import.meta.env.BASE_URL}Hariom_Lodhi_Resume.pdf`} target="_blank" rel="noreferrer" style={{ padding: '0.85rem 2rem', borderRadius: '0.5rem', border: '1px solid #22d3ee', color: '#22d3ee', textDecoration: 'none', display: 'inline-block', fontWeight: 600 }}>
                  Download Resume
                </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer style={{ padding: '2rem 1.5rem', textAlign: 'center', color: '#64748b', borderTop: '1px solid #1e293b' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ margin: 0 }}>© {new Date().getFullYear()} Hariom Lodhi — Oracle Integration Cloud Developer</p>
          <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.9rem' }}>Specialized in OIC, Oracle Fusion ERP/HCM, and enterprise integration solutions.</p>
        </div>
      </footer>
    </div>
  );
}
