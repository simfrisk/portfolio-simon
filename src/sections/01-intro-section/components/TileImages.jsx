import styled from "styled-components"

const TitleImagesWrapper = styled.div`
    position: relative;
    height: 250px;
    width: 100%;
`

const TileImageBase = styled.img`
  width: 160px;
  height: 160px;
  object-fit: cover;
  border-radius: 12px;
  position: absolute;
  top: 50%;
  left: 50%;

  @media (min-width: 1024px) {
    width: 200px;
    height: 200px;
  }
`

const TileImage1 = styled(TileImageBase)`
  transform: translate(0%, -45%) rotate(5deg);
`
const TileImage2 = styled(TileImageBase)`
  transform: translate(-50%, -50%);
  object-position: 0 30%;
  z-index: 2;
`
const TileImage3 = styled(TileImageBase)`
  transform: translate(-100%, -45%) rotate(-5deg);
`

export const TileImages = () => {
  return (
    <>
      <TitleImagesWrapper>
        <TileImage1 src="/code-image-2.webp" alt="" />
        <TileImage2 src="/simon1.webp" alt="" />
        <TileImage3 src="code-image.webp" alt="" />
      </TitleImagesWrapper>
    </>
  )
}