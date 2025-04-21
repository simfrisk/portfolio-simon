import "../featured-project-section.css"

export const ProjectCard = ({ title, description, languageTag, id, img, livePageLink, gitHubLink }) => {
  return (
    <>
      <img className="project-img" src={img} alt="" />
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="language-tag-container">
        {languageTag.map((lang, id) => (
          <p className="language-tag" key={id}>{lang}</p>
        ))}
      </div>
      <a href={livePageLink} target="_blank" rel="noopener noreferrer">
        <button className="web-btn">
          <img className="web-icon" src="./ic-web.svg" alt="" />
          Live Demo
        </button>
      </a>
      <a href={gitHubLink} target="_blank" rel="noopener noreferrer">
        <button className="web-btn">
          <img className="web-icon" src="./Ic-Github.svg" alt="" />
          View Code
        </button>
      </a>
      <br />
      <br />
    </>
  )
}
