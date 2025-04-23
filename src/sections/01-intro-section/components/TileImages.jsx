import styled from "styled-components"

const TitleImagesWrapper = styled.div`
    position: relative;
    height: 250px;
    width: 100%;
`

const TileImage1 = styled.img`
  width: 160px;
  height: 160px;
  object-fit: cover;
  border-radius: 12px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(0%, -45%) rotate(5deg);

  @media (min-width: 1024px) {
    width: 200px;
    height: 200px;
  }
`
const TileImage2 = styled.img`
  width: 160px;
  height: 160px;
  object-fit: cover;
  border-radius: 12px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;

  @media (min-width: 1024px) {
    width: 200px;
    height: 200px;
  }
`
const TileImage3 = styled.img`
  width: 160px;
  height: 160px;
  object-fit: cover;
  border-radius: 12px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-100%, -45%) rotate(-5deg);

  @media (min-width: 1024px) {
    width: 200px;
    height: 200px;
  }
`

export const TileImages = () => {
  return (
    <>
      <TitleImagesWrapper>
        <TileImage1 className="intro-img-1" src="/simon3.webp" alt="" />
        <TileImage2 className="intro-img-2" src="/simon1.webp" alt="" />
        <TileImage3 className="intro-img-3" src="/simon2.webp" alt="" />
      </TitleImagesWrapper>
    </>
  )
}