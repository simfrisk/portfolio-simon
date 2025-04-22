import { ProjectCard } from "./components/ProjectCard"
import data from "./data/card-data.json"
import "./featured-project-section.css"
import { Button } from "../../global-componets/Button"
import { H2 } from "../../global-componets/typography"


export const FeaturedProjectSection = () => {
  return (
    <>
      <section>
        <H2>Featured Projects</H2>
        {data.cardData.map((card, id) => (
          <ProjectCard
            key={id}
            title={card.title}
            description={card.description}
            languageTag={card.languageTag}
            img={card.img}
            livePageLink={card.livePageLink}
            gitHubLink={card.gitHubLink} />
        ))}
        <Button text={"See more projects"} icon={"./Ic-ArrowDown.svg"} />
      </section>
    </>
  )
}