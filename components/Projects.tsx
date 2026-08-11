import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { projectsData } from '../constants.ts';
import { GitHubIcon, ExternalLinkIcon } from './Icons.tsx';
import type { Project } from '../types.ts';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const modalBackdrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalPanel = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.18 } },
};

const categories = ['All', 'Trading & Low Latency', 'Microservices & Security', 'AI & Automation'];

const Projects: React.FC = () => {
  const [selected, setSelected] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [iframeMaybeBlocked, setIframeMaybeBlocked] = useState(false);

  useEffect(() => {
    let timer: number | undefined;
    if (selected) {
      document.body.style.overflow = 'hidden';
      setIframeLoaded(false);
      setIframeMaybeBlocked(false);
      timer = window.setTimeout(() => setIframeMaybeBlocked(true), 1500);
    } else {
      document.body.style.overflow = '';
      setIframeLoaded(false);
      setIframeMaybeBlocked(false);
    }
    return () => {
      if (timer) window.clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, [selected]);

  const openPreview = (project: Project) => {
    setSelected(project);
  };

  const closePreview = () => {
    setSelected(null);
  };

  const openInNewTab = (url?: string) => {
    if (!url) return;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const getPreviewUrl = (project: Project) => {
    return project.demoUrl || project.githubUrl || project.githubUrls?.frontend || project.githubUrls?.backend;
  };

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === activeCategory);

  return (
    <>
      <motion.h2
        className="text-4xl font-bold text-center mb-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={cardVariants}
      >
        Featured <span className="gradient-text">Projects & Works</span>
      </motion.h2>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 text-xs md:text-sm font-semibold rounded-full transition-all duration-300 ${
              activeCategory === cat
                ? 'bg-spidey-red text-white shadow-lg shadow-red-600/30'
                : 'bg-slate-800/80 text-slate-300 border border-slate-700 hover:border-slate-500 hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={index}
            className="glass-card rounded-xl overflow-hidden flex flex-col group cursor-pointer"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }} 
            style={{ transformStyle: 'preserve-3d' }}
            variants={cardVariants}
            whileHover={{
              y: -10,
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              transition: { duration: 0.3 }
            }}
            // onClick={() => openPreview(project)}
          >
            <div className="relative h-48 overflow-hidden">
              <img src={project.imageUrl} alt={project.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                { project.preview &&
                <button
                  onClick={(e) => { e.stopPropagation(); openPreview(project); }}
                  className="bg-spidey-red text-white px-4 py-2 rounded-md"
                >
                  Preview
                </button>
                }
              </div>
            </div>

            <div className="p-6 flex-grow flex flex-col">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-4">
                <h3 className="text-2xl font-bold text-slate-100 group-hover:text-spidey-red transition-colors duration-300">{project.title}</h3>

                <div className="flex flex-wrap items-center gap-2 z-10 shrink-0">
                  {project.demoUrl && (
                    <a
                      onClick={(e) => { e.stopPropagation(); openInNewTab(project.demoUrl); }}
                      className="px-2.5 py-1 text-xs font-semibold rounded-md bg-spidey-red/20 text-spidey-red border border-spidey-red/40 hover:bg-spidey-red hover:text-white transition-all duration-200 flex items-center gap-1.5 cursor-pointer shadow-sm"
                      aria-label="Open live demo"
                    >
                      <ExternalLinkIcon /> <span>Live Demo</span>
                    </a>
                  )}

                  {project.githubUrls ? (
                    <>
                      {project.githubUrls.frontend && (
                        <a
                          onClick={(e) => { e.stopPropagation(); openInNewTab(project.githubUrls?.frontend); }}
                          className="px-2.5 py-1 text-xs font-semibold rounded-md bg-slate-800 text-slate-300 border border-slate-700 hover:border-slate-500 hover:text-white transition-all duration-200 flex items-center gap-1.5 cursor-pointer shadow-sm"
                          title="Frontend Repository"
                        >
                          <GitHubIcon /> <span>Frontend</span>
                        </a>
                      )}
                      {project.githubUrls.backend && (
                        <a
                          onClick={(e) => { e.stopPropagation(); openInNewTab(project.githubUrls?.backend); }}
                          className="px-2.5 py-1 text-xs font-semibold rounded-md bg-slate-800 text-slate-300 border border-slate-700 hover:border-slate-500 hover:text-white transition-all duration-200 flex items-center gap-1.5 cursor-pointer shadow-sm"
                          title="Backend Repository"
                        >
                          <GitHubIcon /> <span>Backend</span>
                        </a>
                      )}
                    </>
                  ) : (
                    project.githubUrl && (
                      <a
                        onClick={(e) => { e.stopPropagation(); openInNewTab(project.githubUrl); }}
                        className="px-2.5 py-1 text-xs font-semibold rounded-md bg-slate-800 text-slate-300 border border-slate-700 hover:border-slate-500 hover:text-white transition-all duration-200 flex items-center gap-1.5 cursor-pointer shadow-sm"
                        aria-label="Open GitHub repo"
                      >
                        <GitHubIcon /> <span>Code</span>
                      </a>
                    )
                  )}
                </div>
              </div>

              <p className="text-slate-300 mb-4 flex-grow">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span key={i} className="bg-slate-700 text-red-300 text-xs font-medium px-2.5 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {selected && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={modalBackdrop}
        >
          <div
            className="absolute inset-0 bg-black/60"
            onClick={closePreview}
            aria-hidden
          />
          <motion.div
            className="relative w-full max-w-4xl h-[80vh] bg-slate-900 rounded-2xl overflow-auto border border-slate-700"
            variants={modalPanel}
            role="dialog"
            aria-modal="true"
            aria-label={`Preview ${selected.title}`}
          >


            <header className="flex flex-col md:flex-row md:items-center justify-between p-4 border-b border-slate-700 sticky top-0 bg-slate-900 z-10 gap-4">

              <div className="w-full md:w-auto">
                <h3 className="text-lg font-semibold text-slate-100">{selected.title}</h3>
                <p className="text-sm text-slate-400 line-clamp-1">{selected.tech.join(', ')}</p>
              </div>

              <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
                {selected.demoUrl && (
                  <button
                    onClick={() => openInNewTab(selected.demoUrl)}
                    className="flex-1 md:flex-none px-3 py-2 text-sm bg-spidey-red text-white rounded-md text-center whitespace-nowrap"
                  >
                    Open Project
                  </button>
                )}

                {selected.githubUrls ? (
                  <>
                    {selected.githubUrls.frontend && (
                      <button
                        onClick={() => openInNewTab(selected.githubUrls?.frontend)}
                        className="flex-1 md:flex-none px-3 py-2 text-sm bg-slate-700 text-slate-200 rounded-md hover:bg-slate-600 text-center whitespace-nowrap"
                      >
                        Frontend
                      </button>
                    )}
                    {selected.githubUrls.backend && (
                      <button
                        onClick={() => openInNewTab(selected.githubUrls?.backend)}
                        className="flex-1 md:flex-none px-3 py-2 text-sm bg-slate-700 text-slate-200 rounded-md hover:bg-slate-600 text-center whitespace-nowrap"
                      >
                        Backend
                      </button>
                    )}
                  </>
                ) : (
                  selected.githubUrl && (
                    <button
                      onClick={() => openInNewTab(selected.githubUrl)}
                      className="flex-1 md:flex-none px-3 py-2 text-sm bg-slate-700 text-slate-200 rounded-md hover:bg-slate-600 text-center whitespace-nowrap"
                    >
                      Repo
                    </button>
                  )
                )}

                <button
                  onClick={closePreview}
                  className="px-3 py-2 text-sm text-slate-300 hover:text-white ml-auto md:ml-0"
                >
                  Close
                </button>
              </div>
            </header>

            <div className="h-full">
              {(getPreviewUrl(selected) && selected.preview )? (
                <iframe
                  title={`Preview - ${selected.title}`}
                  src={getPreviewUrl(selected)}
                  className="w-full h-full bg-white"
                  onLoad={() => { setIframeLoaded(true); setIframeMaybeBlocked(false); }}
                  sandbox="allow-forms allow-scripts allow-same-origin allow-popups allow-presentation"
                />
              ) : (
                <div className="h-full flex items-center justify-center text-slate-300">
                  No preview available for this project.
                </div>
              )}
            </div>

            {/* <div className="absolute left-4 bottom-4 text-sm text-slate-300">
              {!iframeLoaded && iframeMaybeBlocked && (
                <div className="bg-yellow-900/40 px-3 py-2 rounded-md border border-yellow-800">
                  Preview may be blocked by the remote site. Use "Open Project" to view in a new tab.
                </div>
              )}
            </div> */}
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Projects;