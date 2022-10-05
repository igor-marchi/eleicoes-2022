import styled from "styled-components";

export const CardContainer = styled.div`
  width: 12.5rem;
  border: 1px solid ${(props) => props.theme["gray-border"]};
  border-radius: 0.8rem;
  padding: 1rem;
  margin-bottom: 2rem;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const CardTitle = styled.h2`
  background-color: black;
  border-radius: 0.4rem;
  padding: 0.4rem;
`;
