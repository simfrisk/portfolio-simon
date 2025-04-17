import { TitleSimonFrisk } from "./components/TitleSimonFrisk"
import { TileImages } from "./components/TileImages"
import { WhoAmI } from "./components/WhoAmI"
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