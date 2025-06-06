import data from "./data/skills-data.json"
import { SkillCategory } from "./components/SkillCategory"
import { H2 } from "../../global-componets/typography"
import { Section } from "../../global-componets/Section"
import styled from "styled-components"
import { media } from "../../styles/media"

const Skills = styled.div`

  display: flex;
  flex-direction: column;

  @media ${media.desktop} {

    display: flex;
    flex-direction: row;
    justify-content: center;
    column-gap: 24px;
}
`

export const SkillsSection = () => {
  return (
    <>
      <Section secondarySection className="black-section">
        <H2>Skills</H2>
        <Skills>
          <SkillCategory title="Code" skills={data.SkillsData.Code} />
          <SkillCategory title="Toolbox" skills={data.SkillsData.Toolbox} />
          <SkillCategory title="Upcoming" skills={data.SkillsData.Upcoming} />
          <SkillCategory title="More" skills={data.SkillsData.More} />
        </Skills>
      </Section>
    </>
  )
}