import { ProjectCard } from "./components/ProjectCard"
import data from "./data/card-data.json"
import "./featured-project-section.css"
import { WhiteBtn } from "../../global-componets/WhiteBtn"


export const FeaturedProjectSection = () => {
  return (
    <>
      <section>
        <h2>Featured Projects</h2>
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
        <WhiteBtn><img className="down-arrow" src="./Ic-ArrowDown.svg" alt="" />Se more projects</WhiteBtn>
      </section>
    </>
  )
}