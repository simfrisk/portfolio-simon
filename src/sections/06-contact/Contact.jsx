import { H2, P } from "../../global-componets/typography"
import { Section } from "../../global-componets/Section"

export const Contact = () => {
  return (
    <>
      <Section secondarySection className="black-section">
        <H2 secondaryH2>Lets talk</H2>
        <img src="/simon5.webp" alt="" />
        <P secondaryP>Simon Frisk</P>
        <P secondaryP>+46(0)73 433 30 61</P>
        <P secondaryP>simoncarlfrisk@gmail.com</P>
      </Section>
    </>
  )
} 