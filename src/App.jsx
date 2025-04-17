import { React } from "react"
import { IntroSection } from "./components/01-intro-section/IntroSection"
import { TechSection } from "./components/02-tech-section/TechSection"
import { FeaturedProjectSection } from "./components/03-featured-project-section/FeaturedProjectsSection"
import { SkillsSection } from "./components/04-skills-section/SkillsSection"
import { MyWords } from "./components/05-my-words/MyWords"
import { Contact } from "./components/06-contact/Contact"


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
