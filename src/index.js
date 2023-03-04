//imports sempre com lentra MAIÚSCULA!!
import React from 'react'
import ReactDOM from 'react-dom/client'
import MyRoutes from './Routes/routes'
import GlobalStyle from './GlobalStyle'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <MyRoutes /> <GlobalStyle />
  </>
)
