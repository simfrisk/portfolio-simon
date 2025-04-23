import { TitleSimonFrisk } from "./components/TitleSimonFrisk"
import { TileImages } from "./components/TileImages"
import { WhoAmI } from "./components/WhoAmI"
import { Section } from "../../global-componets/Section"

export const IntroSection = () => {
  return (
    <>
      <Section>
        <TitleSimonFrisk />
        <TileImages />
        <WhoAmI />
      </Section>
    </>

  )
}