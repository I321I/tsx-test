import { Fragment, useState } from 'react'
import Navigation, { navigationConfig } from './components/Navigation'
import { Route, Routes } from 'react-router'

function App() {
  const [count, setCount] = useState(0)
  const [url, setUrl] = useState("DataPosition")
  const routes = navigationConfig.map((item) =>
    <Route path={item.to} element={item.element(url, (data: string) => { setUrl(data), console.log(data) })
    } />)


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

