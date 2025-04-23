import { useState } from "react" // Import useState
import { ProjectCard } from "./components/ProjectCard"
import data from "./data/card-data.json"
import "./featured-project-section.css"
import { Button } from "../../global-componets/Button"
import { H2 } from "../../global-componets/typography"
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
        <H2>Featured Projects</H2>
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
          icon={"./Ic-ArrowDown.svg"}
          onClick={handleSeeMoreClick} />
      </Section>
    </>
  )
}