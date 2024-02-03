import { Tbody, Td, Th, Thead, Tr, Table, ContainerTable } from "../styles/TableStyle";
import React from "react";

const Tabela = () => {
  return (
    <ContainerTable>
      <Table>
        <Thead>
          <Tr>
            <Th>Grupos</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>A</Td>
            <Td>B</Td>
            <Td>C</Td>
            <Td>D</Td>
          </Tr>
        </Tbody>
      </Table>
      <Table>
        <Thead>
          <Tr>
            <Th>Grupos</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>A</Td>
            <Td>B</Td>
            <Td>C</Td>
            <Td>D</Td>
          </Tr>
        </Tbody>
      </Table>
      <Table>
        <Thead>
          <Tr>
            <Th>Grupos</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>A</Td>
            <Td>B</Td>
            <Td>C</Td>
            <Td>D</Td>
          </Tr>
        </Tbody>
      </Table>
      <Table>
        <Thead>
          <Tr>
            <Th>Grupos</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>A</Td>
            <Td>B</Td>
            <Td>C</Td>
            <Td>D</Td>
          </Tr>
        </Tbody>
      </Table>
    </ContainerTable >
  );
};

export default Tabela;
