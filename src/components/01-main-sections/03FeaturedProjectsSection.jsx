import { ProjectCard } from "../sections/03-featured-project-section/ProjectCard"
import { CardData } from "../sections/03-featured-project-section/CardData"


export const FeaturedProjectSection = () => {
  return (
    <>
      <section>
        <h2>Featured Projects</h2>
        {CardData.map((card, index) => (
          <ProjectCard key={index} title={card.title} description={card.description} />
        ))}
        <button>See more projects</button>
      </section>
    </>
  )
}