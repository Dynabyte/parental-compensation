import styled from "styled-components";
import { colors } from "../../../../utilities";

export const Icon = styled.span`
  border: 3px solid ${colors.danger};
  border-radius: 50%;
  padding: 2px 4px 0;
  margin-right: 10px;
  font-size: 12px;
  align-self: center;

  &::before {
    content: "X";
    color: ${colors.danger};
    font-weight: bold;
  }
`;
