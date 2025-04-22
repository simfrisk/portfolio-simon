import "../featured-project-section.css"
import { ProjectCardContainer } from "../../../global-componets/ProjectCardContainer.jsx"
import { Button } from "../../../global-componets/Button.jsx"
import { H3, P, A } from "../../../global-componets/typography.jsx"

export const ProjectCard = ({ title, description, languageTag, id, img, livePageLink, gitHubLink }) => {
  return (
    <>
      <ProjectCardContainer>
        <div className="card-img-container">
          <img className="project-img" src={img} alt="" />
        </div>
        <div className="card-content-container">
          <H3>{title}</H3>
          <P>{description}</P>
          <div className="language-tag-container">
            {languageTag.map((lang, id) => (
              <p className="language-tag" key={id}>{lang}</p>
            ))}
          </div>
          <A href={livePageLink} target="_blank" rel="noopener noreferrer">
            <Button primaryBtn text={"Live Demo"} icon={"./Ic-Web.png"} />
          </A>
          <A href={gitHubLink} target="_blank" rel="noopener noreferrer">
            <Button primaryBtn text={"View Code"} icon={"./ic-github-2.svg"} />
          </A>
        </div>

        <br />
        <br />
      </ProjectCardContainer>
    </>
  )
}
