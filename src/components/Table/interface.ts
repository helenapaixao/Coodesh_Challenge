
export interface IUser {
  gender: string;
  name: {
        title: string,
        first: string,
        last: string
      },
  location: {
        street: {
          number: number,
          name: string
        },
        city: string,
        state: string,
        country: string,
  /*       "postcode": 64034,
        "coordinates": {
          "latitude": "21.8616",
          "longitude": "79.9941" */
     /*    }, */
     /*    "timezone": {
          "offset": "+5:45",
          "description": "Kathmandu"
        } */
      },
      email: string,
      phone: string,
      "cell": "081-392-1901",
      id: {
        name: string,
        value: string
      },
      picture: {
        large: string,
        medium: string,
        thumbnail: string
      },
      nat: string
    }
 



