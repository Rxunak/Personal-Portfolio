import React, { useEffect, useMemo, useState } from 'react';
import './App.css';
import content from './content';

const Icon = ({ name }) => {
  const props = { width: 24, height: 24, 'aria-hidden': true, focusable: false };
  switch (name) {
    case 'github':
      return (
        <svg {...props} viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.1-.75.09-.73.09-.73 1.22.09 1.87 1.26 1.87 1.26 1.08 1.86 2.83 1.32 3.52 1.01.11-.78.43-1.32.77-1.62-2.67-.3-5.48-1.34-5.48-5.96 0-1.32.47-2.39 1.24-3.24-.12-.3-.54-1.51.12-3.14 0 0 1-.32 3.3 1.23a11.4 11.4 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.66 1.63.24 2.84.12 3.14.77.85 1.24 1.92 1.24 3.24 0 4.63-2.82 5.65-5.5 5.95.44.38.82 1.12.82 2.26v3.35c0 .32.22.7.82.58A12 12 0 0 0 12 .5Z"
          />
        </svg>
      );
    case 'linkedin':
      return (
        <svg {...props} viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5Zm.02 5.98H2V21h3V9.48Zm4.75 0H7.76V21h3.99v-5.83c0-1.54.29-3.03 2.2-3.03 1.9 0 1.93 1.74 1.93 3.13V21H20V14.7c0-3.02-.65-5.35-4.2-5.35-1.7 0-2.85.93-3.32 1.8h-.05v-1.67Z"
          />
        </svg>
      );
    default:
      return null;
  }
};

const SocialLinks = ({ className }) => (
  <ul className={`socials ${className || ''}`.trim()} aria-label="Social media profiles">
    {content.socials.map((social) => (
      <li key={social.label}>
        <a href={social.url} target="_blank" rel="noreferrer" aria-label={social.label}>
          <Icon name={social.icon} title={social.label} />
        </a>
      </li>
    ))}
  </ul>
);

const ThemeToggle = ({ theme, onToggle }) => {
  const isDark = theme === 'dark';
  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={onToggle}
      aria-pressed={isDark}
      aria-label={`Toggle to ${isDark ? 'light' : 'dark'} mode`}
    >
      {isDark ? (
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path
            fill="currentColor"
            d="M21 12.79A9 9 0 0 1 11.21 3 7 7 0 1 0 21 12.79Z"
          />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path
            fill="currentColor"
            d="M12 4.5a1 1 0 0 1 1 1V7a1 1 0 1 1-2 0V5.5a1 1 0 0 1 1-1Zm0 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm6.5-1a1 1 0 0 1 1 1V15a1 1 0 1 1-2 0v-1.5a1 1 0 0 1 1-1ZM12 17a1 1 0 0 1 1 1v1.5a1 1 0 0 1-2 0V18a1 1 0 0 1 1-1Zm-6.5-4a1 1 0 0 1 1 1V15a1 1 0 0 1-2 0v-1.5a1 1 0 0 1 1-1ZM7.05 6.464a1 1 0 0 1 1.414 0l1.06 1.06a1 1 0 1 1-1.414 1.415L7.05 7.88a1 1 0 0 1 0-1.415Zm8.486 8.486a1 1 0 0 1 1.414 0l1.06 1.06a1 1 0 0 1-1.414 1.415l-1.06-1.06a1 1 0 0 1 0-1.415ZM4.5 12a1 1 0 0 1 1-1H7a1 1 0 1 1 0 2H5.5a1 1 0 0 1-1-1Zm11-4.5a1 1 0 0 1 1.414-1.414l1.06 1.06A1 1 0 0 1 17.56 8.56l-1.06-1.06a1 1 0 0 1 0-1.414Z"
          />
        </svg>
      )}
      <span>{isDark ? 'Dark' : 'Light'} mode</span>
    </button>
  );
};

const SkillList = () => (
  <section className="skills" aria-labelledby="skills-title">
    <div className="divider" aria-hidden="true" />
    <h2 id="skills-title" className="sr-only">
      Skills
    </h2>
    <div className="skills__grid">
      {content.skills.map((skill) => (
        <div key={skill.name} className="skill">
          <p className="skill__name">{skill.name}</p>
          <p className="skill__exp">{skill.experience}</p>
        </div>
      ))}
    </div>
  </section>
);

const ProjectCard = ({ project }) => (
  <article className="project-card">
    <div className="project-card__image" role="img" aria-label={`${project.title} cover`}>
      <img src={project.image} alt="" loading="lazy" />
    </div>
    <div className="project-card__body">
      <h3>{project.title}</h3>
      <p className="project-card__description">{project.description}</p>
      <ul className="tags" aria-label="Technologies used">
        {project.tech.map((tag) => (
          <li key={tag} className="tag">
            {tag}
          </li>
        ))}
      </ul>
      <div className="project-card__actions">
        {project.live && project.live !== '#' ? (
          <a className="text-link" href={project.live} target="_blank" rel="noreferrer">
            View Project
          </a>
        ) : (
          <span className="text-link text-link--disabled" aria-disabled="true">
            View Project
          </span>
        )}
        <a className="text-link" href={project.repo} target="_blank" rel="noreferrer">
          View Code
        </a>
      </div>
    </div>
  </article>
);

const ContactForm = ({ email, formName = 'contact' }) => {
  const initialState = useMemo(
    () => ({
      name: '',
      email: '',
      message: '',
    }),
    []
  );
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('');

  const validate = () => {
    const nextErrors = {};
    if (!formData.name.trim()) nextErrors.name = 'Please add your name.';
    if (!formData.email.trim()) {
      nextErrors.email = 'Email is required.';
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/i.test(formData.email.trim())) {
      nextErrors.email = 'Please use a valid email format.';
    }
    if (!formData.message.trim()) nextErrors.message = 'Please include a short message.';
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('');
    if (!validate()) return;
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error('Failed to send message');
      setStatus('Thanks! Your message was sent.');
      setFormData(initialState);
    } catch (error) {
      setStatus('Hmm, something went wrong. Please email me directly.');
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  return (
    <form
      className="contact-form"
      name={formName}
      method="POST"
      onSubmit={handleSubmit}
      noValidate
    >
      <label className="field">
        <span className="field__label">Name</span>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? 'name-error' : undefined}
        />
        {errors.name && (
          <span id="name-error" className="field__error" role="alert">
            {errors.name}
          </span>
        )}
      </label>
      <label className="field">
        <span className="field__label">Email</span>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? 'email-error' : undefined}
        />
        {errors.email && (
          <span id="email-error" className="field__error" role="alert">
            {errors.email}
          </span>
        )}
      </label>
      <label className="field">
        <span className="field__label">Message</span>
        <textarea
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        {errors.message && (
          <span id="message-error" className="field__error" role="alert">
            {errors.message}
          </span>
        )}
      </label>
      <button type="submit" className="button">
        Send Message
      </button>
      {status && (
        <p className="form-status" role="status" aria-live="polite">
          {status}
        </p>
      )}
    </form>
  );
};

function App() {
  const [theme, setTheme] = useState(() => {
    const fallback = 'dark';
    if (typeof window === 'undefined') return fallback;
    const stored = window.localStorage.getItem('theme');
    const resolved =
      stored === 'dark' || stored === 'light'
        ? stored
        : window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
    if (typeof document !== 'undefined') {
      document.documentElement.dataset.theme = resolved;
    }
    return resolved;
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));

  return (
    <div className="page">
      <div className="bg-rings bg-rings--left" aria-hidden="true" />
      <div className="bg-rings bg-rings--right" aria-hidden="true" />
      <div className="shell">
        <header className="hero" id="top">
          <div className="hero__top">
            <p className="handle">{content.hero.handle}</p>
            <div className="hero__top-right">
              <ThemeToggle theme={theme} onToggle={toggleTheme} />
              <SocialLinks />
            </div>
          </div>
          <div className="hero__grid">
            <div className="hero__copy">
              <h1>
                Nice to meet you! I&apos;m{' '}
                <span className="accent-underline">{content.hero.name}</span>.
              </h1>
              <p className="lead">
                Based in {content.hero.location}, {content.hero.summary}
              </p>
              <a className="text-link" href="#contact">
                Contact me
              </a>
            </div>
            <div className="hero__portrait">
              <div className="portrait">
                <img src={content.hero.photo} alt={`Portrait of ${content.hero.name}`} />
                <div className="portrait__overlay">
                  <SocialLinks className="socials--floating" />
                </div>
              </div>
            </div>
          </div>
        </header>

        <SkillList />

        <section className="projects" id="projects" aria-labelledby="projects-title">
          <div className="section__header">
            <h2 id="projects-title">Projects</h2>
            <a className="text-link" href="#contact">
              Contact me
            </a>
          </div>
          <div className="projects__grid">
            {content.projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>

        <section className="contact" id="contact" aria-labelledby="contact-title">
          <div className="contact__intro">
            <h2 id="contact-title">Contact</h2>
            <p>{content.contact.blurb}</p>
          </div>
          <ContactForm email={content.contact.email} />
        </section>

        <footer className="footer">
          <p className="handle">{content.hero.handle}</p>
          <SocialLinks />
        </footer>
      </div>
    </div>
  );
}

export default App;
