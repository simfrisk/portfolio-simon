import { React } from "react"

export const TileImg = ({ image, name }) => {
  return (
    <>
      <img src={image} alt={name} srcset="" />
    </>
  )
}