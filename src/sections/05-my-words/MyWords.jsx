import { useState } from "react";
import wordsData from "./data/my-words-data.json"
import { WordsCard } from "./components/WordsCard"
import "./my-words.css"
import { Button } from "../../global-componets/Button"
import { H2, H2ExtraMargin } from "../../global-componets/typography"
import { Section } from "../../global-componets/Section"



export const MyWords = () => {
  // State to track if "See more projects" has been clicked
  const [showAll, setShowAll] = useState(false)

  const handleSeeMoreClick = () => {
    setShowAll(prev => !prev); // Toggle true <-> false
  }
  return (
    <>
      <Section className="my-words-section">
        <H2ExtraMargin>My Words</H2ExtraMargin>
        <div className="word-card">
          {wordsData.words
            .filter(card => showAll || card.displayCard !== "none")
            .map((word) => (
              <WordsCard
                key={word.id}
                image={word.img}
                title={word.title}
                text={word.text}
                date={word}
              />
            )
            )}
        </div>
        <Button onClick={handleSeeMoreClick} text={"See more projects"} icon={"./Ic-ArrowDown.svg"} />
      </Section>

    </>
  )
}