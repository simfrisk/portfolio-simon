import wordsData from "./data/my-words-data.json"
import { WordsCard } from "./components/WordsCard"
import "./my-words.css"
import { Button } from "../../global-componets/Button"
import { H2 } from "../../global-componets/typography"

export const MyWords = () => {
  return (
    <>
      <section className="my-words-section">
        <H2>My Words</H2>
        <div className="word-card">
          {wordsData.words.map((word) => (
            <WordsCard
              key={word.id}
              image={word.img}
              title={word.title}
              text={word.text}
            />
          )
          )}
        </div>
        <Button text={"See more projects"} icon={"./Ic-ArrowDown.svg"} />
      </section>

    </>
  )
}