import styled from "styled-components";

export const Section = styled.section`
  padding: 64px 50px;
  background-color: ${props => (props.secondarySection ? "black" : "white")};
  color: ${props => (props.secondarySection ? "white" : "black")};

  @media (min-width: 1025px) {
    padding: 128px 50px;
    margin: 0 auto;
    max-width: ${props => (props.secondarySection ? "100%" : "1500px")};
}
`