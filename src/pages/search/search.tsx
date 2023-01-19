import { ArrowsClockwise } from 'phosphor-react'
import { useNavigate } from 'react-router-dom'

import logo from '../../assets/image.svg'

import { Header, Wrap } from './styles'

export function Search() {
  const navigate = useNavigate()

  function handleSubmit() {
    navigate('/')
  }
  return (
    <Header>
      <button type="submit" value="enviar" onClick={handleSubmit}>
        <ArrowsClockwise size={25} />
        Nova Pesquisa
      </button>
      <Wrap>
        <img src={logo} height={100} alt="" />
      </Wrap>
    </Header>
  )
}
