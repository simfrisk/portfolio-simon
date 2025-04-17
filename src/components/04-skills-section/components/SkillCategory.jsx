
export const SkillCategory = ({ title, skills }) => {
  return (
    <div>
      <h3 className="skill-title">{title}</h3>
      {skills.map((skill, index) => (
        <p key={index}>{skill}</p>
      ))}
    </div>
  );
};