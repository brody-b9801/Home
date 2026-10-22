import { useEffect, useState } from 'react'
import { sections, site } from './data/projects.js'

export default function App() {
  const [open, setOpen] = useState(null)

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(null)
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <div className="header">
        <h1>{site.name}</h1>
      </div>
      <p className="intro">{site.intro}</p>
      <div className="buttonContainer">
        <a className="link githubLink" href={site.github} aria-label="GitHub">
          <svg className="githubIcon" viewBox="0 0 16 16" aria-hidden="true">
            <path fill="currentColor" d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" />
          </svg>
        </a>
        <a className="link" href={site.linkedin} aria-label="LinkedIn">
          <svg className="githubIcon" viewBox="0 0 16 16" aria-hidden="true">
            <path fill="currentColor" d="M0 1.15C0 .52.52 0 1.15 0h13.7C15.48 0 16 .52 16 1.15v13.7c0 .63-.52 1.15-1.15 1.15H1.15C.52 16 0 15.48 0 14.85V1.15Zm4.94 12.24V6.17H2.54v7.22h2.4Zm-1.2-8.21c.84 0 1.36-.55 1.36-1.25-.02-.71-.52-1.25-1.35-1.25-.82 0-1.36.54-1.36 1.25 0 .7.52 1.25 1.33 1.25h.02Zm4.9 8.21V9.36c0-.22.02-.43.08-.59.18-.43.57-.88 1.23-.88.87 0 1.21.66 1.21 1.63v3.87h2.4V9.25c0-2.22-1.18-3.25-2.76-3.25-1.27 0-1.84.7-2.16 1.19v.03h-.02l.02-.03V6.17h-2.4c.03.68 0 7.22 0 7.22h2.4Z" />
          </svg>
        </a>
      </div>
      {sections.map((section) => (
        <section key={section.title}>
          <hr className="pagebreak" />
          <h2 className="sectionTitle">{section.title}</h2>
          {section.projects.length === 0 ? (
            <p className="comingSoon">Coming soon</p>
          ) : (
            <div className="thumbnailContainer">
              {section.projects.map((project) => {
                const content = (
                  <>
                    <img
                      src={project.thumbnail}
                      alt={project.alt ?? ''}
                      className="thumbnailImage"
                      style={project.thumbnailBg ? { backgroundColor: project.thumbnailBg } : undefined}
                    />
                    <p className="thumbnailTitle">{project.title}</p>
                    <p className="thumbnailDesc">{project.description}</p>
                  </>
                )
                return project.embedUrl ? (
                  <button key={project.url} className="thumbnail" onClick={() => setOpen(project)}>
                    {content}
                  </button>
                ) : (
                  <a key={project.url} className="thumbnail" href={project.url} target="_blank" rel="noreferrer">
                    {content}
                  </a>
                )
              })}
            </div>
          )}
        </section>
      ))}

      {open && (
        <div className="overlay" onClick={() => setOpen(null)}>
          <div className="popup" role="dialog" aria-label={open.title} onClick={(e) => e.stopPropagation()}>
            <a
              className="popupButton externalButton"
              href={open.url ?? open.embedUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Open in new tab"
              title="Open in new tab"
            >
              <svg viewBox="0 0 16 16" aria-hidden="true">
                <path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9 2h5v5M14 2 7 9M12 10v4H2V4h4" />
              </svg>
            </a>
            <button className="popupButton closeButton" aria-label="Close" onClick={() => setOpen(null)} autoFocus>
              ✕
            </button>
            <iframe
              className="popupFrame"
              src={open.embedUrl}
              title={open.title}
              allow="autoplay; fullscreen; gamepad"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  )
}
