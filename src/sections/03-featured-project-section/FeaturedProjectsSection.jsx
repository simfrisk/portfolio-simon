import { ProjectCard } from "./components/ProjectCard"
import data from "./data/card-data.json"
import "./featured-project-section.css"
import { Button } from "../../global-componets/Button"
import { H2 } from "../../global-componets/typography"
import { Section } from "../../global-componets/Section"

export const FeaturedProjectSection = () => {
  return (
    <>
      <Section>
        <H2>Featured Projects</H2>
        {data.cardData
          .filter(card => card.displayCard !== "none")
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
        <Button text={"See more projects"} icon={"./Ic-ArrowDown.svg"} />
      </Section>
    </>
  )
}