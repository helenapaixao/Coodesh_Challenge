import styled from "@emotion/styled";
import { Input } from "@chakra-ui/react";
import { TitleProps } from "./interface";

export const Text = styled.h1<TitleProps>`
  font-family: "Monteserrat400";
  font-size: 16px;
  margin-bottom: 8px;
  color: ${(props) => (props.isInvalid ? "#eb5757" : "#100A2E")};
`;

export const FormInput = styled(Input)`
  font-family: "Monteserrat400";
  font-size: 16px;
  width: 100%;
  height: 40px;
  background-color: transparent;
  text-indent: 5px;

  ::placeholder {
    color: #71777d;
    opacity: 0.7;
  }

  @media (max-width: 1100px) {
    width: 720px;
  }
`;

export const ErrorDescription = styled.p`
  font-family: "Montserrat400";
  font-size: 13px;
  color: #eb5757;
  margin-top: 3px;
`;
