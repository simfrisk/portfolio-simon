import { TitleSimonFrisk } from "../../sections/01-intro-section/TitleSimonFrisk"
import { TileImages } from "../../sections/01-intro-section/TileImages"
import { WhoAmI } from "../../sections/01-intro-section/WhoAmI"
import "./introSection.css"

export const IntroSection = () => {
  return (
    <>
      <section className="intro-section">
        <TitleSimonFrisk />
        <TileImages />
        <WhoAmI />
      </section>
    </>

  )
}