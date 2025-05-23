import { useState } from "react" // Import useState
import { ProjectCard } from "./components/ProjectCard"
import data from "./data/card-data.json"
import { Button } from "../../global-componets/Button"
import { H2ExtraMargin } from "../../global-componets/typography"
import { Section } from "../../global-componets/Section"

export const FeaturedProjectSection = () => {
  // State to track if "See more projects" has been clicked
  const [showAll, setShowAll] = useState(false)

  const handleSeeMoreClick = () => {
    setShowAll(prev => !prev); // Toggle true <-> false
  }
  return (
    <>
      <Section>
        <H2ExtraMargin>Featured Projects</H2ExtraMargin>
        {data.cardData
          .filter(card => showAll || card.displayCard !== "none")
          .map((card, id) => (
            <ProjectCard
              key={id}
              title={card.title}
              description={card.description}
              languageTag={card.languageTag}
              img={card.img}
              livePageLink={card.livePageLink}
              gitHubLink={card.gitHubLink}
              flippedOrder={id % 2 !== 0}
            />
          ))}
        <Button
          text={showAll ? "Show less" : "See more projects"}
          icon={showAll ? "./Ic-ArrowUp.png" : "./Ic-ArrowDown.svg"}
          onClick={handleSeeMoreClick} />
      </Section >
    </>
  )
}