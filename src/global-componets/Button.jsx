import styled from "styled-components"
import { media } from "../styles/media"

// #region --- CSS ---
const ButtonWrapper = styled.button`
  display: flex;
  background-color: ${props => (props.primaryBtn ? "black" : "white")};
  color: ${props => (props.primaryBtn ? "white" : "black")};
  border: solid black 2px;
  font-size: 18px;
  width: 303px;
  height: 48px;
  padding: 0 16px;
  border-radius: 12px;
  align-items: center;
  align-content: center;
  margin: 12px auto;
  gap: 16px;
  cursor: pointer;
  transition: ease .3s;

  @media ${media.smallMobile} {
   width: 203px;
   height: 48px;
    }
  
  img{
   height: 31px;
   width: 31px;
   filter: ${props => (props.primaryBtn ? "invert(100%)" : "invert(0%)")};
  }

  &:hover{
   background-color: ${props => (props.primaryBtn ? "white" : "black")}; 
   color: ${props => (props.primaryBtn ? "black" : "white")};
   transform: scale(.97);

   img {
   filter: ${props => (props.primaryBtn ? "invert(0%)" : "invert(100%)")}
   }
   
}
`
//#endregion

export const Button = ({ primaryBtn, text, icon, onClick }) => {
   return (
      <ButtonWrapper primaryBtn={primaryBtn} onClick={onClick}>
         {icon?.trim() && <img src={icon} alt="" />}
         {text}
      </ButtonWrapper>
   )
}

