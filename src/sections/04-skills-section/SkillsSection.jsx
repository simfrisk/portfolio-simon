import data from "./data/skills-data.json"
import { SkillCategory } from "./components/SkillCategory"
import "./skills-section.css"
import { H2 } from "../../global-componets/typography"
import { Section } from "../../global-componets/Section"

export const SkillsSection = () => {
  return (
    <>
      <Section secondarySection className="black-section">
        <H2>Skills</H2>
        <div className="skills">
          <SkillCategory title="Code" skills={data.SkillsData.Code} />
          <SkillCategory title="Toolbox" skills={data.SkillsData.Toolbox} />
          <SkillCategory title="Upcoming" skills={data.SkillsData.Upcoming} />
          <SkillCategory title="More" skills={data.SkillsData.More} />
        </div>
      </Section>
    </>
  )
}