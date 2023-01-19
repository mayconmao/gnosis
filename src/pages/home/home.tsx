import { useState, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/image.svg'
import { MagnifyingGlass } from 'phosphor-react'

import { Container, SearchFormContainer, Wrap } from './styles'

export function Home() {
  const navigate = useNavigate()
  const [search, setSearch] = useState('')

  function SearchFor(event: FormEvent) {
    // event.preventDefault()
    if (search === '') {
      alert('Digite algo para procurar')
      return
    }
    // alert(search)
    navigate('/search')
  }

  return (
    <Container>
      <Wrap>
        <img src={logo} alt="" />
        <SearchFormContainer onSubmit={SearchFor}>
          <div>
            <MagnifyingGlass size={25} color="#717171" />
            <input
              type="text"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
          </div>
          <button type="submit" value="enviar">
            Pesquisar
          </button>
        </SearchFormContainer>
      </Wrap>
    </Container>
  )
}
