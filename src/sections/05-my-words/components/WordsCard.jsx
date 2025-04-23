import { Button } from "../../../global-componets/Button"
import { H3, P } from "../../../global-componets/typography"

export const WordsCard = ({ title, text, image }) => {
  return (
    <>
      <img src={image} alt="" />
      <P className="date">July 14th</P>
      <H3>{title}</H3>
      <P>{text}</P>
      <Button primaryBtn text={"Read article"} />
    </>
  )
}