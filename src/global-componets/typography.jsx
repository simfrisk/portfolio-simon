import styled from "styled-components"

//#region --- H1 ---
export const H1 = styled.h1`
  text-align: center;
  font-size: 52px;
  font-style: normal;
  font-weight: 700;
  line-height: 56px; 

@media (min-width: 1025px) {
  font-size: 100px;
  line-height: normal;
}
`
//#endregion

//#region --- H2 ---
export const H2 = styled.h2`
  text-align: center;
  font-size: 60px;
  font-style: normal;
  font-weight: 700;
  line-height: 56px; 

@media (min-width: 1025px) {
  font-size: 80px;
}

`
//#endregion

//#region --- H3 ---
export const H3 = styled.h3`
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

@media (min-width: 1025px) {
  font-size: 30px;
}
`
//#endregion

//#region --- P ---
export const P = styled.p`
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;

@media (min-width: 1025px) {
  font-size: 18px;
}
`
//#endregion

//#region --- A ---
export const A = styled.a`
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
text-decoration: none;

@media (min-width: 1025px) {
  font-size: 18px;
}
`
//#endregion