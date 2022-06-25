import { useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import API from "../../services/api";
import { IUser } from "./interface";

export function TableComponent() {
  const [users, setUsers] = useState<IUser[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const response = API.get("https://randomuser.me/api/?results=10");

    setLoading(true);

    response
      .then((data) => {
        setUsers(data.data.results);

        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  return (
    <TableContainer>
      <Table
        border="1px solid"
        borderColor="gray.200"
        borderRadius="lg"
        width="100%"
        maxWidth="100%"
        overflow="auto"
        fontSize="sm"
        fontFamily="body"
        fontWeight="normal"
      >
        <>
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Gender</Th>
              <Th>Birth</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          {users.map((user) => (
            <Tbody key={user.id.value}>
              <Tr>
                <Td>
                  {" "}
                  {user.name.first} {user.name.last}
                </Td>
                <Td>{user.gender}</Td>
                <Td>inches</Td>
              </Tr>
            </Tbody>
          ))}
        </>
      </Table>
    </TableContainer>
  );
}

export default TableComponent;
