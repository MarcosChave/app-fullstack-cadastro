//JSX - misturar html com js.
import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios' // biblioteca para consumir api
import People from '../../Assets/people.svg'
import Seta from '../../Assets/arrow.svg'

import {
  Container,
  Image,
  ContainerItens,
  H1,
  InputLabel,
  Input,
  Button
} from './style'

//ESTADO -> é uma variável, quando alterado ele renderiza e mostra. Utilizado para fazer alterações na aplicação.
const App = () => {
  const [users, setUsers] = useState([])
  const inputName = useRef()
  const inputAge = useRef()
  const navigate = useNavigate()

  //axios espera duas informações: endereço, objeto com dados que o back espera receber
  //para consumir a api necessita do async e await
  async function addNewUser() {
    const { data: newUser } = await axios.post('http://localhost:3001/users', {
      name: inputName.current.value,
      age: inputAge.current.value
    }) //colocando o metodo de gravar usuário

    setUsers([...users, newUser])

    navigate('/usuarios')
  }

  return (
    <Container>
      <Image alt="logo-image" src={People} />
      <ContainerItens>
        <H1>Olá</H1>
        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Nome" />

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder="Idade" />

        <Button onClick={addNewUser}>
          Cadastrar <img alt="seta" src={Seta} />
        </Button>
      </ContainerItens>
    </Container>
  )
}

export default App
