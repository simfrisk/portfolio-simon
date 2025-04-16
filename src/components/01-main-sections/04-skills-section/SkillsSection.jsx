import { SkillsData } from "../../sections/04-skills-section/SkillsData"
import { SkillCategory } from "../../sections/04-skills-section/SkillCategory"
import "./skills-section.css"

export const SkillsSection = () => {
  return (
    <>
      <section className="black-section">
        <h2>Skills</h2>
        <div className="skills">
          <SkillCategory title="Code" skills={SkillsData.Code} />
          <SkillCategory title="Toolbox" skills={SkillsData.Toolbox} />
          <SkillCategory title="Upcoming" skills={SkillsData.Upcoming} />
          <SkillCategory title="More" skills={SkillsData.More} />
        </div>
      </section>
    </>
  )
}