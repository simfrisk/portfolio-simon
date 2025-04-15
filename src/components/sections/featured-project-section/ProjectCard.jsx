import { React } from "react"
import { CodeUsed } from "./CodeUsed"

export const ProjectCard = ({ title, description }) => {
  return (
    <>
      <img src="/project1.png" alt="" />
      <h3>{title}</h3>
      <p>{description}</p>
      <CodeUsed />
      <button>Live Demo</button>
      <button>View Code</button>
      <br />
      <br />
    </>
  )
}
