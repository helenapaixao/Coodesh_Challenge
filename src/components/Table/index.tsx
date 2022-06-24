
import { useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import API from "../../services/api";
import {IUser} from './interface'

export function TableComponent() {
  const [user, setUsers] = useState<IUser[]>([]);


  useEffect(() => {
   
  
  }, [])
  
  return (
    <TableContainer>
      <Table>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Gender</Th>
            <Th>Birth</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>

        <Tbody>
          <Tr>
            <Td>inches</Td>
            <Td>inches</Td>
            <Td>inches</Td>
            <Td>inches</Td>
          </Tr>
          <Tr>
            <Td>inches</Td>
            <Td>inches</Td>
            <Td>inches</Td>
            <Td>inches</Td>
          </Tr>
          <Tr>
            <Td>inches</Td>
            <Td>inches</Td>
            <Td>inches</Td>
            <Td>inches</Td>
          </Tr>
          <Tr>
            <Td>inches</Td>
            <Td>inches</Td>
            <Td>inches</Td>
            <Td>inches</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default TableComponent;
