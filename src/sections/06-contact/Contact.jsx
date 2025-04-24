import { H2, P } from "../../global-componets/typography"
import { Section } from "../../global-componets/Section"
import styled from "styled-components"

const ContactImage = styled.img`
  width: 164px;
  height: 164px;
  object-fit: cover;
  border-radius: 200px;
  object-position: 0 30%;

`
const IconContainer = styled.div`
filter: invert(100%);
display: flex;
justify-content: center;
gap: 32px;
`

export const Contact = () => {
  return (
    <>
      <Section secondarySection className="black-section">
        <H2>Lets talk</H2>
        <ContactImage src="/simon5.webp" alt="" />
        <P>Simon Frisk</P>
        <P>+46(0)73 433 30 61</P>
        <P>simoncarlfrisk@gmail.com</P>
        <IconContainer>
          <a href="https://www.linkedin.com/in/simon-frisk-59aba7bb/" target="_blank">
            <img src="Btn-linkedin.svg" alt="LinkIn logo" />
          </a>
          <a href="https://github.com/simfrisk" target="_blank">
            <img src="ic-github-2.svg" alt="Github logo" />
          </a>
          <a href="https://www.instagram.com/simfrisk/" target="_blank">
            <img src="Btn-instagram.svg" alt="Instagram logo" />
          </a>
        </IconContainer>
      </Section>
    </>
  )
} 