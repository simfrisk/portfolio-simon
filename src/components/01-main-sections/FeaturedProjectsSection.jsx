import { React } from "react"
import { ProjectCard } from "../sections/featured-project-section/ProjectCard"

const cards = [
  {
    title: "Accessibility focused Quiz",
    description: "An interactive, accessibility-first quiz application built with JavaScript. Designed to deliver a seamless and inclusive user experience, it demonstrates a strong focus on clean design, responsive functionality, and user-centric development."
  },
  {
    title: "Weather App with API",
    description: "A dynamic weather application powered by a real-time API, delivering up-to-date current conditions and a weekly forecast. Users can easily search and switch between cities, with a sleek interface designed for both speed and clarity. Built to be responsive, intuitive, and reliable."
  },
  {
    title: "Recepie finder with API",
    description: "A dynamic recipe application powered by an API, offering users the ability to filter and sort recipes by cuisine, preparation time, and price. With a user-friendly interface and personalized search options, it makes discovering and planning meals both easy and enjoyable."
  }
];



export const FeaturedProjectSection = () => {
  return (
    <>
      <h2>Featured Projects</h2>
      {cards.map((card, index) => (
        <ProjectCard key={index} title={card.title} description={card.description} />
      ))}
      <button>See more projects</button>
    </>
  )
}