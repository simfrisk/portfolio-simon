
export const SkillCategory = ({ title, skills }) => {
  return (
    <div>
      <h3>{title}</h3>
      {skills.map((skill, index) => (
        <p key={index}>{skill}</p>
      ))}
    </div>
  );
};