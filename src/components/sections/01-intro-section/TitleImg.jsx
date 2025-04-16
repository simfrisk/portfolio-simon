import { React } from "react"

let classCount = 0

export const TileImg = ({ image, name }) => {

  return (
    <>
      <img
        src={image}
        alt={name}
        srcSet=""
      />
    </>
  )
}