import { H2, P } from "../../global-componets/typography"
import { Section } from "../../global-componets/Section"
import { Image } from "../../global-componets/Image"

export const Contact = () => {
  return (
    <>
      <Section secondarySection className="black-section">
        <H2>Lets talk</H2>
        <Image src="/simon5.webp" alt="" />
        <P>Simon Frisk</P>
        <P>+46(0)73 433 30 61</P>
        <P>simoncarlfrisk@gmail.com</P>
      </Section>
    </>
  )
} 