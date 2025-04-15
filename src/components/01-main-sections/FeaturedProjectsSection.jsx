import { React } from "react"
import { ProjectCard } from "../sections/featured-project-section/ProjectCard"
import { CardData } from "../sections/featured-project-section/CardData"


export const FeaturedProjectSection = () => {
  return (
    <>
      <h2>Featured Projects</h2>
      {CardData.map((card, index) => (
        <ProjectCard key={index} title={card.title} description={card.description} />
      ))}
      <button>See more projects</button>
    </>
  )
}