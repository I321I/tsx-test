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
  const routes = navigationConfig.map((item) =>
    <Route path={item.to} element={item.element} />
  )

  return (
    <Fragment>
      <div className='container'>
        <Navigation></Navigation>
        <Routes>{/* 動態的根據網址顯示內容 */}
          {routes}
        </Routes>
      </div>
    </Fragment>
  )
}

export default App

