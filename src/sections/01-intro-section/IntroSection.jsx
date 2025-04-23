import { TitleSimonFrisk } from "./components/TitleSimonFrisk"
import { TileImages } from "./components/TileImages"
import { WhoAmI } from "./components/WhoAmI"
import "./introSection.css"
import { Section } from "../../global-componets/Section"

export const IntroSection = () => {
  return (
    <>
      <Section className="intro-section">
        <TitleSimonFrisk />
        <TileImages />
        <WhoAmI />
      </Section>
    </>

  )
}