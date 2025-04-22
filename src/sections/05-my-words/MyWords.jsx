import wordsData from "./data/my-words-data.json"
import { WordsCard } from "./components/WordsCard"
import "./my-words.css"
import { Button } from "../../global-componets/Button"

export const MyWords = () => {
  return (
    <>
      <section className="my-words-section">
        <h2>My Words</h2>
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