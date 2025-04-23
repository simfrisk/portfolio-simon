import { H3, P } from "../../../global-componets/typography";

export const SkillCategory = ({ title, skills }) => {
  return (
    <div>
      <H3 className="skill-title">{title}</H3>
      {
        skills.map((skill, index) => (
          <P key={index}>{skill}</P>
        ))
      }
    </div >
  );
};