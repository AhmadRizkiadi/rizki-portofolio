import { useState } from "react";
import { ConfigProvider, Segmented, Timeline } from "antd";
import { AnimatePresence, motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, Download, Github, Linkedin, Mail, MapPin, Check } from "lucide-react";
import { Badge } from "./components/ui/badge";
import { Button } from "./components/ui/button";
import { ProjectDrawer } from "./components/ProjectDrawer";
import { explorations, practiceAreas, projects, skills, strengths } from "./data";

const filters = ["All", "Full-stack MERN", "AI & IoT", "Community System", "Academic Platform"];
const Motion = motion;

function HeroLanyard() {
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 160, damping: 20 });
  const smoothY = useSpring(pointerY, { stiffness: 160, damping: 20 });
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-7, 7]);
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [6, -6]);

  function handlePointerMove(event) {
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - bounds.left) / bounds.width - 0.5);
    pointerY.set((event.clientY - bounds.top) / bounds.height - 0.5);
  }

  function resetTilt() {
    pointerX.set(0);
    pointerY.set(0);
  }

  return (
    <div className="lanyard-stage" onPointerMove={handlePointerMove} onPointerLeave={resetTilt}>
      <span className="lanyard-pin" aria-hidden="true" />
      <Motion.div
        className="lanyard-rig"
        initial={reduceMotion ? undefined : { rotate: -2, y: -4 }}
        animate={reduceMotion ? undefined : { rotate: [2, -1.2, 0.6, 0], y: 0 }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="lanyard-straps" aria-hidden="true"><span /><span /></div>
        <Motion.figure
          className="lanyard-card"
          style={reduceMotion ? undefined : { rotateX, rotateY }}
          whileHover={reduceMotion ? undefined : { y: -4 }}
        >
          <div className="lanyard-card-top"><span>POLINES</span><span>PORTFOLIO / 26</span></div>
          <div className="lanyard-photo">
            <img src="/diri.jpg" alt="Profile photo of Ahmad Rizkiadi" />
            <span aria-hidden="true">R</span>
          </div>
          <figcaption>
            <strong>Ahmad Rizkiadi</strong>
            <span>Backend Developer</span>
          </figcaption>
          <small>Semarang, Indonesia</small>
        </Motion.figure>
      </Motion.div>
    </div>
  );
}

function App() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);
  
  const shownProjects = filter === "All" ? projects : projects.filter((project) => project.type === filter);

  return (
    <ConfigProvider theme={{ token: { colorPrimary: "var(--color-accent)", borderRadius: 4, fontFamily: "var(--font-body)" } }}>
      <main>
        <nav className="nav">
          <a href="#top" className="wordmark" aria-label="Back to top">RZ.</a>
          <div className="nav-links">
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#toolbox">Toolbox</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <header className="hero" id="top">
          <div className="hero-meta">
            <span>Semarang, Indonesia</span>
            <span>Open to internships</span>
          </div>
          <div className="hero-intro">
            <Motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              Clear logic.<br />Useful software.
            </Motion.h1>
            <HeroLanyard />
          </div>
          <div className="hero-bottom">
            <div>
              <span className="hero-name">Ahmad Rizkiadi Budi Wirawan</span>
              <p>A Computer Engineering Technology student building dependable web systems, secure APIs, and practical digital products.</p>
            </div>
            <div className="hero-actions">
              <Button asChild>
                <a href="#work">View selected work <ArrowDown size={17} /></a>
              </Button>
              <Button asChild variant="outline">
                <a href="/Ahmad-Rizkiadi-Budi-Wirawan-Backend.pdf" target="_blank" rel="noreferrer">Download CV <Download size={17} /></a>
              </Button>
            </div>
          </div>
        </header>

        <section className="work" id="work">
          <div className="section-heading">
            <div>
              <p className="section-label">Selected work · 2024–2026</p>
              <h2>Real problems, resolved in code.</h2>
            </div>
            <Segmented options={filters} value={filter} onChange={setFilter} className="project-filter" />
          </div>

          <Motion.div layout className="project-grid">
            <AnimatePresence mode="popLayout">
              {shownProjects.map((project, index) => (
                <Motion.article
                  layout
                  key={project.key}
                  className={`project-card project-${project.key}`}
                  role="button"
                  tabIndex={0}
                  onClick={() => setSelected(project)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      setSelected(project);
                    }
                  }}
                  initial={{ opacity: 0, y: 14, clipPath: "inset(0 0 100% 0)" }}
                  animate={{ opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" }}
                  exit={{ opacity: 0, y: -8, clipPath: "inset(0 0 100% 0)" }}
                  transition={{ duration: 0.42, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="project-image"><img src={project.image} alt={`${project.title} project preview`} loading="lazy" width="1200" height="675" /></div>
                  <div className="project-copy">
                    <div className="project-top"><span>{project.type}</span><span>{project.year}</span></div>
                    <h3>{project.title}</h3>
                    <p>{project.summary}</p>
                    <div className="project-footer">
                      <div>{project.stack.slice(0, 3).map((item) => <Badge key={item}>{item}</Badge>)}</div>
                      <span className="open-project">View details <ArrowUpRight size={15} /></span>
                    </div>
                  </div>
                </Motion.article>
              ))}
            </AnimatePresence>
          </Motion.div>
        </section>


        <section className="about" id="about">
          <div className="section-intro">
            <p className="section-label">About me</p>
            <h2>I like understanding the whole system before writing the solution.</h2>
          </div>
          <div className="about-layout">
            <div className="about-copy">
              <p className="about-lead">I build high-performance backend systems and the secure API contracts that keep applications dependable.</p>
              <p>My foundation started with algorithms, networks, and databases. It now spans web applications, API security, machine learning, and connected devices. I enjoy tracing a problem from the database schemas to the services, servers, and hardware that keep the result dependable.</p>
              <div className="about-current">
                <span>Current direction</span>
                <strong>Backend internships where careful system thinking matters.</strong>
              </div>
            </div>
            <div className="experience">
              <h3>Experience</h3>
              <Timeline items={[
                { color: "var(--color-accent)", children: <><strong>Politeknik Negeri Semarang</strong><span>Computer Engineering Technology · 2023–present</span></> },
                { children: <><strong>Project Based Learning II</strong><span>Backend Developer · Mar–Jun 2025</span></> },
                { children: <><strong>Project Based Learning I</strong><span>Backend Developer · Sep 2024–Jan 2025</span></> },
                { children: <><strong>Telkom Indonesia</strong><span>Web Developer Intern · Jul–Dec 2022</span></> },
              ]} />
            </div>
          </div>
          <div className="practice-map" id="practice">
            {practiceAreas.map((area, index) => (
              <article key={area.label}>
                <span className="practice-index">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <small>{area.label}</small>
                  <h3>{area.title}</h3>
                </div>
                <p>{area.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="explorations">
          <div className="section-intro section-intro-light">
            <p className="section-label">Beyond web interfaces</p>
            <h2>Software also becomes models, devices, and safer boundaries.</h2>
            <p>These are supporting areas I have explored through coursework and project work.</p>
          </div>
          <div className="exploration-list">
            {explorations.map((item) => (
              <article key={item.area}>
                <small>{item.area}</small>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
                <span className="exploration-tools">{item.tools}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="toolbox" id="toolbox">
          <div className="section-intro">
            <p className="section-label">Toolbox</p>
            <h2>Technologies I have used to ship working projects.</h2>
            <p>Grouped by role so the stack is easier to scan.</p>
          </div>
          <div className="skill-list">
            {skills.map((skill) => (
              <div className="skill-row" key={skill.group}>
                <h3>{skill.group}</h3>
                <div className="skill-track">
                  {skill.items.map((item, index) => (
                    <span className="skill-name" key={item}>
                      {item}
                      {index < skill.items.length - 1 && <i aria-hidden="true">·</i>}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <footer>
          <div className="footer-strengths">
            <div className="section-intro section-intro-light">
              <p className="section-label">How I work</p>
              <h2>Careful with foundations, practical with delivery.</h2>
            </div>
            <div className="strength-list">
              {strengths.map((strength) => (
                <article key={strength.number}>
                  <h3>{strength.title}</h3>
                  <p>{strength.copy}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="footer-main" id="contact">
            <div className="contact-heading">
              <p className="section-label">Contact Ahmad Rizkiadi Budi Wirawan</p>
              <h2>Have a useful problem to solve?</h2>
              <span>I am open to internships, project collaborations, and conversations about dependable software.</span>
            </div>
            <div className="contact-links">
              <a href="mailto:rizkiahmad7396@gmail.com">
                <span className="contact-icon"><Mail size={22} /></span>
                <span><small>Email</small><strong>Send an email</strong></span>
                <ArrowUpRight size={20} />
              </a>
              <a href="https://github.com/AhmadRizkiadi" target="_blank" rel="noreferrer">
                <span className="contact-icon"><Github size={22} /></span>
                <span><small>GitHub</small><strong>View profile</strong></span>
                <ArrowUpRight size={20} />
              </a>
              <a href="https://www.linkedin.com/in/ahmad-rizkiadi-budi-wirawan/" target="_blank" rel="noreferrer">
                <span className="contact-icon"><Linkedin size={22} /></span>
                <span><small>LinkedIn</small><strong>Connect on LinkedIn</strong></span>
                <ArrowUpRight size={20} />
              </a>
            </div>
          </div>

          <div className="footer-meta">
            <span><MapPin size={14} /> Semarang, Indonesia</span>
            <span>© 2026 Ahmad Rizkiadi Budi Wirawan</span>
          </div>
        </footer>
      </main>
      <ProjectDrawer project={selected} onClose={() => setSelected(null)} />
    </ConfigProvider>
  );
}

export default App;
