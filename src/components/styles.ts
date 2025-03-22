import styled from "styled-components";

export const SummaryContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const SummaryHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SummaryAnchors = styled.div`
  display: flex;
  gap: 1rem;
  div {
    display: flex;
    align-items: center;
  }
  span {
    margin-left: 0.5rem;
  }
`;
