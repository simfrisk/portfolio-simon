import "../featured-project-section.css"
import { ProjectCardContainer } from "../../../global-componets/ProjectCardContainer.jsx"
import { Button } from "../../../global-componets/Button.jsx"

export const ProjectCard = ({ title, description, languageTag, id, img, livePageLink, gitHubLink }) => {
  return (
    <>
      <ProjectCardContainer>
        <div className="card-img-container">
          <img className="project-img" src={img} alt="" />
        </div>
        <div className="card-content-container">
          <h3>{title}</h3>
          <p>{description}</p>
          <div className="language-tag-container">
            {languageTag.map((lang, id) => (
              <p className="language-tag" key={id}>{lang}</p>
            ))}
          </div>
          <a href={livePageLink} target="_blank" rel="noopener noreferrer">
            <Button primaryBtn text={"Live Demo"} icon={"./Ic-Web.png"} />
          </a>
          <a href={gitHubLink} target="_blank" rel="noopener noreferrer">
            <Button primaryBtn text={"View Code"} icon={"./ic-github-2.svg"} />
          </a>
        </div>

        <br />
        <br />
      </ProjectCardContainer>
    </>
  )
}
