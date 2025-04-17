import "../featured-project-section.css"

export const ProjectCard = ({ title, description, languageTag, id }) => {
  return (
    <>
      <img src="/project1.png" alt="" />
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="language-tag-container">
        {languageTag.map((lang, id) => (
          <p className="language-tag" key={id}>{lang}</p>
        ))}
      </div>
      <button className="web-btn"><img className="web-icon" src="./ic-web.svg" alt="" />Live Demo</button>
      <button className="web-btn"><img className="web-icon" src="./Ic-Github.svg" alt="" />View Code</button>
      <br />
      <br />
    </>
  )
}
