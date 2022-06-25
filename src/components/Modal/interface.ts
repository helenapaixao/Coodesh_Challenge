import { ReactElement } from 'react';
import { ModalProps } from '@chakra-ui/react';

export interface IModal extends ModalProps {
  children: ReactElement;
}
