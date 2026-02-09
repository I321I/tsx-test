import { Fragment, useState, type JSX } from 'react'
import Navigation from './components/Navigation'
import { Route, Routes } from 'react-router'
import { navigationConfig } from './components/Navigation.const'

function App() {
  const [url, setUrl] = useState("DataPosition")
  const routes = navigationConfig.map((item: { to: string; label: string; element: (data: unknown, onClick?: (url: string) => void) => JSX.Element }) =>
    <Route path={item.to} element={item.element(url, (data: string) => { setUrl(data); console.log(data); })
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

