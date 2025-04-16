import { words } from "../../../data/my-words-data.json"

export const WordsCard = ({ title, text, image }) => {
  return (
    <>
      <img src={image} alt="" />
      <p className="date">July 14th</p>
      <h3>{title}</h3>
      <p>{text}</p>
      <button>Read Article</button>
    </>
  )
}