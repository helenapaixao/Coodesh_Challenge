import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
} from '@chakra-ui/react';
import { IModal } from './interface';

export function Modal({ children, ...rest }: IModal) {
  return (
    <ChakraModal {...rest}>
      <ModalOverlay />

      <ModalContent top="21%">{children}</ModalContent>
    </ChakraModal>
  );
}
