import { useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
  Modal,
  useDisclosure,
  ModalHeader,
} from "@chakra-ui/react";
import API from "../../services/api";
import { IUser } from "./interface";
import { format } from "date-fns";
import { ContainerButton, Container } from "./style";
import userDetails from "./userDetails";
import { Link } from "react-router-dom";

export function TableComponent() {
  const [users, setUsers] = useState<IUser[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const response = API.get("https://randomuser.me/api/?results=50");
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

  function loadMoreUsers() {
    const response = API.get("https://randomuser.me/api/?results=10");

    setLoading(true);

    response
      .then((data) => {
        setUsers([...users, ...data.data.results]);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }





  return (
    <>
      <Container>

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
                    {user.name.first} {user.name.last}
                  </Td>
                  <Td>{user.gender}</Td>
                  <Td>{format(new Date(user.dob.date), "dd/MM/yyyy")}</Td>
                  <Td>
                    <Button>
                      <Link
                      to={`/user/${user.name.first}`}
                      >
                       visualizar
                      </Link>
                     </Button>
                  </Td>
                </Tr>
              </Tbody>
            ))}
          </Table>
          <ContainerButton>
            {loading && <p>Carregando...</p>}
            {error && <p>Erro ao carregar os dados</p>}
            <Button onClick={loadMoreUsers}>Carregar mais</Button>
          </ContainerButton>
        </TableContainer>
      </Container>
    </>
  );
}

export default TableComponent;
