import { React } from "react"
import { IntroSection } from "./components/01-main-sections/01IntroSection"
import { TechSection } from "./components/01-main-sections/02TechSection"
import { FeaturedProjectSection } from "./components/01-main-sections/03FeaturedProjectsSection"
import { SkillsSection } from "./components/01-main-sections/04SkillsSection"
import { MyWords } from "./components/01-main-sections/05MyWords"
import { Contact } from "./components/01-main-sections/06Contact"


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
