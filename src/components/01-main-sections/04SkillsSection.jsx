import { SkillsData } from "../sections/04-skills-section/SkillsData"
import { SkillCategory } from "../sections/04-skills-section/SkillCategory"

export const SkillsSection = () => {
  return (
    <>
      <h2>Skills</h2>
      <SkillCategory title="Code" skills={SkillsData.Code} />
      <SkillCategory title="Toolbox" skills={SkillsData.Toolbox} />
      <SkillCategory title="Upcoming" skills={SkillsData.Upcoming} />
      <SkillCategory title="More" skills={SkillsData.More} />
    </>
  )
}