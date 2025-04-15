import { React } from "react"
import { IntroSection } from "./components/01-main-sections/Intro-section"
import { TechSection } from "./components/01-main-sections/tech-section"
import { FeaturedProjectSection } from "./components/01-main-sections/FeaturedProjectsSection"


export const App = () => {
  return (
    <>
      <IntroSection />
      <TechSection />
      <FeaturedProjectSection />
    </>
  )
}
