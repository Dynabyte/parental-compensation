import styled from "styled-components";
import { mediaQuery } from "../index";
interface IProps {
  col: number;
  reqCol?: boolean;
}

const Row = styled.div<IProps>`
  display: grid;

  ${mediaQuery.maxSizePhone} {
    grid-row-gap: 30px;
    margin-bottom: 10px;

    ${({ reqCol = false, col }) =>
      reqCol ? `grid-template-columns: repeat(${col}, 1fr);` : ""}
  }

  ${mediaQuery.minSizeTabletAndUp} {
    grid-template-columns: repeat(${({ col }) => col}, 1fr);
    grid-column-gap: 18px;
    grid-row-gap: 10px;
  }
`;

export default Row;
