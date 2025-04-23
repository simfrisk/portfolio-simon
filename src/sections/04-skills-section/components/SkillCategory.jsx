import { H3, P } from "../../../global-componets/typography";

import styled from "styled-components";

export const SkillTag = styled.p`
  border: solid 2px rgb(255, 255, 255);
  padding: 6px;
  border-radius: 4px;
  text-align: center;
  font-size: 18px;
  width: 177px;
  margin: 0 auto;
`

export const SkillCategory = ({ title, skills }) => {
  return (
    <div>
      <SkillTag className="skill-title">{title}</SkillTag>
      {
        skills.map((skill, index) => (
          <P key={index}>{skill}</P>
        ))
      }
    </div >
  );
};