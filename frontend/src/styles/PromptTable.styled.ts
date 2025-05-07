// ======= TABLE VIEW =======
import styled from "styled-components";
import thnTheme from "./globalStyles";

export const TableScroll = styled.div`
    overflow-x: auto;
    width: 100%;
    min-width: 920px;
    border-radius: 1.2rem;
    background: ${thnTheme.cardGlass};
    box-shadow: 0px 5px 38px #8b5cf644;
`;
export const PromptTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  th, td {
    font-size: 0.94em;
    padding: 0.61em 0.4em 0.55em 0.8em;
    text-align: left;
    vertical-align: top;
    font-family: inherit;
    color: #fff;
  }
  th {
    background: #201945;
    position: sticky;
    top: 0;
    font-weight: 700;
    letter-spacing: 0.03em;
    z-index: 2;
    border-top-left-radius: 1.2em;
    border-top-right-radius: 1.2em;
  }
`;
export const PromptTableRow = styled.tr<{ $active: boolean }>`
  background: ${(p) => p.$active ? "#15151ee6" : "#232349cc"};
  &:hover {
    background: #28254a;
  }
`;
export const DomainCellChip = styled.span`
  background: linear-gradient(90deg,#06d6a0,#8b5cf6);
  color: #15151e;
  border-radius: 11px;
  font-size: 0.87em;
  font-weight: 700;
  padding: 0.16em 0.58em;
  margin-right: 0.18em;
`;
export const TableActionBtn = styled.button<{ $copied?: boolean }>`
    background: ${(p) => p.$copied ? thnTheme.gradientMain : thnTheme.cardGlass};
    color: ${(p) => (p.$copied ? "#15151e" : "#fff")};
    border-radius: 7px;
    border: none;
    font-weight: 700;
    font-size: 1.01em;
    padding: 0.28em 0.87em;
    margin-right: 0.38em;
    min-width: 56px;
    cursor: pointer;

    &:hover, &:focus {
        background: ${thnTheme.gradientAlt};
        color: #15151e;
        box-shadow: 0 0 9px #ff00cc99;
    }

    transition: background 0.12s, color 0.13s;
`;