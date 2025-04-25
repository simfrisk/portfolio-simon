import styled from "styled-components";

export const Image = styled.img`
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border-radius: 12px;

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 200px;
    height: 100%;
    aspect-ratio: 9 / 16;
  }

  @media (min-width: 1024px) {
    width: 100%;
  height: auto;
  aspect-ratio: 4 / 3;
  }
`