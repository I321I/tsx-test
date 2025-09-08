import { Fragment, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { AnimeList } from './components/AnimeList'
import styled from 'styled-components'

const ContainerDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1080px;
`

function App() {
  const [count, setCount] = useState(0)

  return (
    <Fragment>
      <ContainerDiv>
        <AnimeList></AnimeList>
      </ContainerDiv>
    </Fragment>
  )
}

export default App

