import * as React from "react";
import Home from './views/Home'

import { ChakraProvider } from "@chakra-ui/react";
function App() {
  return (
    <ChakraProvider>
      <Home/>
    </ChakraProvider>
  );
}

export default App;
