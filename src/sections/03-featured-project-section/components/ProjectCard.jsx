import { Button } from "../../../global-componets/Button.jsx"
import { H3, PExtraMargin, A, P } from "../../../global-componets/typography.jsx"
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
    max-width: 1300px;
  }
`

const LanguageTagContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;


  @media (min-width: 1024px) {
    justify-content: flex-start;
  }
`

const LanguageTag = styled.p`
  display: flex;
  border: solid black 1px;
  border-radius: 4px;
  padding: 6px;
  justify-content: center;
  width: 100%;
`

const ProjectImg = styled.img`
  height: 300px;
  width: 300px;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  border-radius: 12px;
  object-fit: cover;
  box-shadow: 10px 10px 30px 5px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 100%;
    height: auto;
  aspect-ratio: 16 / 9;
  }


  @media (min-width: 1024px) {
    width: 479px;
    height: 479px;
    margin: ${prop => (prop.flippedOrder ? "0 0px 0 128px" : "0 128px 0 0")};
  }
`;

const TextContent = styled.div`
h3 {
  text-align: left;
  margin-left: 0;
}

  p {
    text-align: left;
    margin-left: 0;
  }

  button {
    margin: 12px 0;
  }
`


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
        <TextContent className="card-content-container">
          <LanguageTagContainer>
            {languageTag.map((lang, id) => (
              <LanguageTag key={id}>{lang}</LanguageTag>
            ))}
          </LanguageTagContainer>
          <H3>{title}</H3>
          <PExtraMargin>{description}</PExtraMargin>
          <A href={livePageLink} target="_blank" rel="noopener noreferrer">
            <Button primaryBtn text={"Live Demo"} icon={"./Ic-Web.png"} />
          </A>
          <A href={gitHubLink} target="_blank" rel="noopener noreferrer">
            <Button primaryBtn text={"View Code"} icon={"./ic-github-2.svg"} />
          </A>
        </TextContent>

        <br />
        <br />
      </ProjectCardContainer>
    </>
  )
}
