/* eslint-disable @typescript-eslint/ban-types */
import { extendTheme, Theme } from '@chakra-ui/react';

export const theme = extendTheme({
  fonts: {
    body: 'Montserrat600',
    heading: '"Quicksand", sans-serif',
  },
  bgColor: {
    blue: {
      default: '#1E1BFF',
    },
  },
  colors: {
    blue: {
      default: '#1E1BFF',
      black: '#000',
      link: '#355BFF',
      '500': '#1E1BFF',
    },
    white: {
      '100': '#FFFF',
    },
    pink: {
      '500': '#FC4F9E',
    },
    accent: {
      lemonMeringue: '#FDEEBE',
      spanishPink: '#FDBEBE',
      lightGreen: '#A9F389',
    },
    gray: {
      '900': '#100A2E',
      '800': '#343A3F',
      '700': '#444444',
      '600': '#828282',
      '500': '#505050',
      '400': '#F4F6FB',
      title: '#333333',
    },
    turquoise: {
      '900': '#00C1DB',
    },
    advise: {
      warning: '#F0B647',
      danger: '#EB5757',
      dark: {
        '100': '#100A2E',
      },
    },
  },
  styles: {
    global: {
      html: {
        scrollBehavior: 'smooth',
      },
      body: {
        bg: 'white',
        color: 'gray.800',
      },
    },
  },
  fontWeights: {
    title: '700',
  },
  components: {
    Heading: {
      baseStyle: {
        color: 'blue.default',
      },
    },
    Input: {
      baseStyle: {
        field: {
          _focus: {
            bg: 'transparent',
          },
          _autofill: {
            boxShadow: '0 0 0px 1000px #ffffff inset',
          },
        },
      },
    },
  },
} as Theme | {});
