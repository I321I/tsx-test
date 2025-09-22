import { Fragment, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { AnimeList } from './components/AnimeList'
import styled from 'styled-components'
import Navigation, { navigationConfig } from './components/Navigation'
import { Route, Routes } from 'react-router'
import EmptyContent from './components/EmptyContent'

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
      <div className='container'>
        <Navigation></Navigation>
        <Routes>{/* 動態的根據網址顯示內容 */}
          <Route path={navigationConfig[0].to} element={navigationConfig[0].element} />
          <Route path={navigationConfig[1].to} element={navigationConfig[1].element} />
          <Route path={navigationConfig[2].to} element={navigationConfig[2].element} />
        </Routes>
      </div>
    </Fragment>
  )
}

export default App

