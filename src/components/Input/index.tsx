
import { InputGroup, InputLeftElement } from '@chakra-ui/react'
import { IInputProps } from './interface'
import {MdPersonSearch} from 'react-icons/md'


export function Input({
  name,
  type = 'text',
  title,
  isError,
  errorMessage,
  ...rest
}: IInputProps) {
  return (
     <InputGroup>
    <InputLeftElement
      pointerEvents='none'
      children={<MdPersonSearch color='gray.300' />}
    />
  </InputGroup>

  )
}