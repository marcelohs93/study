import {Response, Request} from 'express'
import createUser from './services/CreateUser'

export function helloWorld(request: Request, response: Response){
  const user = createUser({
    email: 'marcelohenrique@santander.com.br',
    password:'Santos',
    techs: ['Node', 'React', {title: 'Marcelo', experience: 100}]
  })
  return response.json({message: "Hello World"})
}