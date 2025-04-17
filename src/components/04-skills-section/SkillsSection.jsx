import data from "./data/skills-data.json"
import { SkillCategory } from "./components/SkillCategory"
import "./skills-section.css"

export const SkillsSection = () => {
  return (
    <>
      <section className="black-section">
        <h2>Skills</h2>
        <div className="skills">
          <SkillCategory title="Code" skills={data.SkillsData.Code} />
          <SkillCategory title="Toolbox" skills={data.SkillsData.Toolbox} />
          <SkillCategory title="Upcoming" skills={data.SkillsData.Upcoming} />
          <SkillCategory title="More" skills={data.SkillsData.More} />
        </div>
      </section>
    </>
  )
}