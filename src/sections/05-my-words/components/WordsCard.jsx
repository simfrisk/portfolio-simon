import { Button } from "../../../global-componets/Button"
import { H3, P, PExtraMargin } from "../../../global-componets/typography"
import { Image } from "../../../global-componets/Image"
import styled from "styled-components"
import { media } from "../../../styles/media"

const WordsCardWrapper = styled.div`
  display: block;

  @media ${media.tablet} {
    display: flex;
    align-items: center;
    column-gap: 24px;
    margin-bottom: 64px;
  }

  @media ${media.desktop} {
    column-gap: 125px;
    display: flex;
    margin-bottom: 64px;
  }
`

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 24px;


  @media ${media.desktop} {
    justify-content: flex-start;
    align-items: flex-start;
    margin-bottom: 0;
  }
`

const TextContent = styled.div`
@media ${media.tabletAndBeyond} {
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

const CenteredP = styled(P)`
  text-align: center;
  border: solid black 1px;
  padding: 6px;
  border-radius: 4px;
  width: 142px;

  @media ${media.tabletAndBeyond} {
    margin-right: auto;
    margin-left: 0;
  }
`

export const WordsCard = ({ title, text, image, date, link }) => {
  return (
    <WordsCardWrapper>
      <ImageWrapper>
        <Image src={image} alt="" />
      </ImageWrapper>
      <TextContent>
        <CenteredP>{date}</CenteredP>
        <H3>{title}</H3>
        <PExtraMargin>{text}</PExtraMargin>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <Button primaryBtn text={"Read article"} />
        </a>
      </TextContent>
    </WordsCardWrapper >
  )
}