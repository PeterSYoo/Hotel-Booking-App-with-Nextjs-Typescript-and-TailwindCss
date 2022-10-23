import axios from "axios";

const client = axios.create({
  baseURL: 'http://localhost:3000/api/db'
})

export const request = ({...options}) => {
  const onSuccess = (response: any) => response
  const onError = (error: any) => {
    return error
  }
  return client(options).then(onSuccess).catch(onError)
}