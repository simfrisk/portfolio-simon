import { React } from "react"
import { TileImg } from "./TitleImg"


export const TileImages = () => {
  return (
    <>
      <div className="hello">
        <TileImg image="/simon1.webp" name="img 1" />
        <TileImg image="/simon2.webp" name="img 2" />
        <TileImg image="/simon3.webp" name="img 3" />
      </div>
    </>
  )
}