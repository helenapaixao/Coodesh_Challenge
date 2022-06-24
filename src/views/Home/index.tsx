import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { TableComponent } from "../../components/Table";

import {ContainerTable} from './styles'

const Home = () => {
  return (
    <>
      <div>
        <Header />
        <Input
          maxLength={100}
          name="input"
          type="text"
          isError={false}
          placeholder="Searching"
        />
      </div>
      <ContainerTable>
      <TableComponent />
      </ContainerTable>
    </>
  );
};

export default Home;
