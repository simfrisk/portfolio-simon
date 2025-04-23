import "../featured-project-section.css"
import { Button } from "../../../global-componets/Button.jsx"
import { H3, P, A } from "../../../global-componets/typography.jsx"
import styled from "styled-components"


const ProjectCardContainer = styled.div`
  max-width: 100%;
  margin: 0 auto;

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: ${prop => (prop.flippedOrder ? "row-reverse" : "row")};
    justify-content: space-between; 
    align-items: center;
    /* background-color: green; */
    margin: 0 auto 64px;
  }
`

const ProjectImg = styled.img`
  height: 300px;
  width: 300px;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  border-radius: 12px;
  object-fit: cover;
  box-shadow: 10px 10px 30px 5px rgba(0, 0, 0, 0.1);


  @media (min-width: 1024px) {
    width: 479px;
    height: 479px;
    margin: ${prop => (prop.flippedOrder ? "0 0px 0 128px" : "0 128px 0 0")};
  }
`;


export const ProjectCard = ({
  title,
  description,
  languageTag,
  id,
  img,
  livePageLink,
  gitHubLink,
  flippedOrder
}) => {
  return (
    <>
      <ProjectCardContainer flippedOrder={flippedOrder}>
        <div className="card-img-container">
          <ProjectImg flippedOrder={flippedOrder} src={img} alt="" />
        </div>
        <div className="card-content-container">
          <div className="language-tag-container">
            {languageTag.map((lang, id) => (
              <p className="language-tag" key={id}>{lang}</p>
            ))}
          </div>
          <H3>{title}</H3>
          <P>{description}</P>
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
