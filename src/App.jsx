import { React } from "react"
import { IntroSection } from "./sections/01-intro-section/IntroSection"
import { TechSection } from "./sections/02-tech-section/TechSection"
import { FeaturedProjectSection } from "./sections/03-featured-project-section/FeaturedProjectsSection"
import { SkillsSection } from "./sections/04-skills-section/SkillsSection"
import { MyWords } from "./sections/05-my-words/MyWords"
import { Contact } from "./sections/06-contact/Contact"
import { WhiteBtn } from "./global-componets/WhiteBtn"


export const App = () => {
  return (
    <>
      <IntroSection />
      <TechSection />
      <FeaturedProjectSection />
      <SkillsSection />
      <MyWords />
      <Contact />
    </>
  )
}
