import styled from "styled-components"

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

  img{
   height: 31px;
   width: 31px;
   filter: ${props => (props.primaryBtn ? "invert(100%)" : "invert(0%)")};
  }

  &:hover{
   background-color: ${props => (props.primaryBtn ? "white" : "black")}; 
   color: ${props => (props.primaryBtn ? "black" : "white")};

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

