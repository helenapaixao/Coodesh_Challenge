import React, { createContext, useState } from 'react'

//Tipando os dados que quero para o usuario
type UserType = {
  gender: string
  name: {
    title: string
    first: string
    last: string
  }
  location: {
    street: {
      number: string
      name: string
    }
    city: string
    state: string
    country: string
  }
  email: string
  dob: {
    date: string
    age: string
  }
  phone: string
  id: {
    name: string
    value: string
  }
  picture: {
    large: string
    medium: string
    thumbnail: string
  }
  nat: string
}

type PropsUserContext = {
  state: UserType
  setState: React.Dispatch<React.SetStateAction<UserType>>
}

const DEFAULT_VALUE = {
  state: {
    gender: '',
    name: {
      title: '',
      first: '',
      last: '',
    },
    location: {
      street: {
        number: '',
        name: '',
      },
      city: '',
      state: '',
      country: '',
    },
    email: '',
    dob: {
      date: '',
      age: '',
    },
    phone: '',
    id: {
      name: '',
      value: '',
    },
    picture: {
      large: '',
      medium: '',
      thumbnail: '',
    },
    nat: '',
  },
  setState: () => {},
}

const UserContext = createContext<PropsUserContext>(DEFAULT_VALUE)

const UserContextProvider: React.FC = ({ children }) => {
  const [state, setState] = useState(DEFAULT_VALUE.state)
  return (
    <UserContext.Provider
      value={{
        state,
        setState,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export { UserContextProvider }
export default UserContext
