import React from 'react'
import './App.css'
import { BrowserRouter, Route } from 'react-router-dom'
// 세부 페이지 불러오기
import Detail from './Detail'
import Home from './Home'

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/detail" exact component={Detail} />
      <Route path="/detail/:id" component={Detail} />
    </BrowserRouter>
  )
}

export default App
