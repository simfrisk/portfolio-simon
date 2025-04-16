import wordsData from "../../data/my-words-data.json"
import { WordsCard } from "../sections/05-my-words/WordsCard"

export const MyWords = () => {
  return (
    <>
      <section>
        <h2>My Words</h2>
        {wordsData.words.map((word) => (
          <WordsCard
            key={word.id}
            image={word.img}
            title={word.title}
            text={word.text}
          />
        )
        )}
        <p>Se more articles</p>
      </section>

    </>
  )
}