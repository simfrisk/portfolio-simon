import { React } from "react"
import { IntroSection } from "./components/01-main-sections/01-intro-section/IntroSection"
import { TechSection } from "./components/01-main-sections/02-tech-section/TechSection"
import { FeaturedProjectSection } from "./components/01-main-sections/03-featured-project-section/FeaturedProjectsSection"
import { SkillsSection } from "./components/01-main-sections/04-skills-section/SkillsSection"
import { MyWords } from "./components/01-main-sections/05-my-words/MyWords"
import { Contact } from "./components/01-main-sections/06-contact/Contact"


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
