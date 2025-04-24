import { Button } from "../../../global-componets/Button"
import { H3, P, PExtraMargin } from "../../../global-componets/typography"
import { Image } from "../../../global-componets/Image"
import styled from "styled-components"

const WordsCardWrapper = styled.div`
  display: block;

  @media (min-width: 1024px) {
    display: flex;
    column-gap: 125px;
    margin-bottom: 64px;
  }
`

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 24px;

  @media (min-width: 1024px) {
    justify-content: flex-start;
    align-items: flex-start;
    margin-bottom: 0;
  }
`

const TextContent = styled.div`
  @media (min-width: 1024px) {
  text-align: left;

  h3 {
    text-align: left;
    margin-left: 0;
    margin-right: auto;
  }

  button {
    display: inline-block;
    margin-left: 0;
    margin-right: auto;
  }
}
`

export const WordsCard = ({ title, text, image }) => {
  return (
    <WordsCardWrapper>
      <ImageWrapper>
        <Image src={image} alt="" />
      </ImageWrapper>
      <TextContent>
        <P className="date">July 14th</P>
        <H3>{title}</H3>
        <PExtraMargin>{text}</PExtraMargin>
        <Button primaryBtn text={"Read article"} />
      </TextContent>
    </WordsCardWrapper>
  )
}