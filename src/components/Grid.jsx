import React from "react";
import { Table, Tbody, Td, Th, Thead, Tr } from "../styles/GridStyle";
import { FaEdit } from "react-icons/fa";

const Grid = () => {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Time 1</Th>
          <Th>Time 2</Th>
          <Th>Gols Time 1</Th>
          <Th>Gols Time 2</Th>
          <Th>Dia</Th>
          <Th>Data</Th>
          <Th>Hora</Th>
          <Th>Local</Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td width="5%">A</Td>
          <Td width="5%">B</Td>
          <Td width="5%">1</Td>
          <Td width="5%">2</Td>
          <Td width="5%">Quarta</Td>
          <Td width="5%">22-10-20</Td>
          <Td width="5%">22:00</Td>
          <Td width="5%">Quadra 1</Td>
          <Td alignCenter width="2%">
            <FaEdit />
          </Td>
        </Tr>
      </Tbody>
    </Table>
  );
};

export default Grid;
