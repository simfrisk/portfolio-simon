import styled from "styled-components"

//#region --- H1 ---
export const H1 = styled.h1`
  text-align: center;
  font-size: 52px;
  font-style: normal;
  font-weight: 700;
  line-height: 56px; 
  margin: 16px;

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
  padding: 20px;
  margin: 16px;

@media (min-width: 1025px) {
  font-size: 80px;
}

`
//#endregion

//#region --- H2 extra padding ---
export const H2ExtraMargin = styled(H2)`
  margin-bottom: 64px;

  @media (min-width: 1025px) {
    margin-bottom: 128px;
  }
`;

//#endregion

//#region --- H3 ---
export const H3 = styled.h3`
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 16px;

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
margin: 16px auto;

@media (min-width: 1025px) {
  font-size: 18px;
  max-width: 782px;
}
`
//#endregion

//#region --- P extra padding ---
export const PExtraMargin = styled(P)`
  margin-bottom: 32px;
`;
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