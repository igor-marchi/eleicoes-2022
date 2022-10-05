import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;

  > div {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
  }

  > h1 {
    text-align: center;
    margin-bottom: 2rem;
    font-family: "Roboto" "sans-serif";
    font-weight: 900;
    font-size: 3rem;
  }
`;
