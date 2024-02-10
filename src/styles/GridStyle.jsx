import styled from "styled-components";

export const Td = styled.td`
  padding-top: 15px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  width: ${(props) => (props.width ? props.width : "auto")};
`;

export const Table = styled.table`
  width: 90%;
  background-color: #272727;
  padding: 20px;
  border-radius: 5px;
  max-width: 1120px;
  margin: 20px auto;
  word-break: break-all;
  color: white;

  @media (max-width: 400px) {
    width: 60%;
  }
`;

export const Thead = styled.thead``;

export const Tr = styled.tr``;

export const Th = styled.th`
  text-align: ${(props) => (props.alignRight ? "end" : "start")};
  border-bottom: inset;
  padding-bottom: 5px;
`;

export const Tbody = styled.tbody``;

export const Tfoot = styled.tfoot``;
