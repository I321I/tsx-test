import { Fragment, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AnimeList } from './components/AnimeList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Fragment>
      <div className='container'>
      <AnimeList></AnimeList>

      </div>
    </Fragment>
  )
}

export default App

