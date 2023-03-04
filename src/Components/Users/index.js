//JSX - misturar html com js.
import React, { useState, useEffect } from 'react'

import axios from 'axios' // biblioteca para consumir api
import Avatar from '../../Assets/avatar.svg'
import Seta from '../../Assets/arrow.svg'
import Trash from '../../Assets/trash.svg'
import { Container, Image, ContainerItens, H1, Button, User } from './style'

//ESTADO -> é uma variável, quando alterado ele renderiza e mostra. Utilizado para fazer alterações na aplicação.
const Users = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    async function fetchUsers() {
      const { data: newUser } = await axios.get(
        'https://backend-users.vercel.app/users'
      )

      setUsers(newUser) //trazendo os usuários cadastrados
    }
    fetchUsers()
  }, [])

  async function deleteUser(userId) {
    await axios.delete(`https://backend-users.vercel.app/users/${userId}`)
    const newUser = users.filter(user => user.id !== userId)
    setUsers(newUser)
  }

  return (
    <Container>
      <Image alt="logo-image" src={Avatar} />
      <ContainerItens>
        <H1>Usuários</H1>

        <ul>
          {users.map(user => (
            <User key={user.id}>
              {/*sempre que for usar uma ferramenta de iteração que haja vários iténs o react exige o key para que cada item tenha uma identificação única */}
              <p>{user.name}</p> <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}>
                <img src={Trash} alt="item-lixo"></img>
              </button>
            </User>
          ))}
        </ul>

        <Button to="/">
          <img alt="seta" src={Seta} /> Voltar
        </Button>
      </ContainerItens>
    </Container>
  )
}

export default Users
