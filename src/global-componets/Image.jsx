import styled from "styled-components";
import { media } from "../styles/media";

export const Image = styled.img`
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border-radius: 12px;

  @media ${media.tablet} {
    width: 200px;
    height: 100%;
    aspect-ratio: 9 / 16;
  }

  @media ${media.desktop} {
    width: 479px;
    height: 100%;
  

  }
`