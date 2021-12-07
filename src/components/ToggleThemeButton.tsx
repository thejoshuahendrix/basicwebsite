import styled from "styled-components";

export const ToggleThemeButton = styled.div<{ active: boolean }>`
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.textSecondary};
  padding: 1rem;
  text-align: center;
  font-size: 14px;
  height: 120px;
  width: 100px;
  border-radius: ${({ theme }) => theme.card.borderRadius};
  overflow: hidden;
  &:after {
    content: "O";
    position: relative;
    top: 30px;
    color: rgba(0, 0, 0, 0);
    ${({ active }) => (active ? "right:0px;" : "right: calc(70% + 0px);")};
    width: 20px;
    font-size: 20px;
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, 0.4);
    background-color: ${({ active }) => (active ? "#252525 " : "#e9e9e9")};
    transition: 500ms right;
  }
  
`;
