import { useState,useEffect } from 'react'
import ContainerMain from './component/container'
import Container from './component/container'

function App() {
      // useEffect(()=>{
      //   fetch('https://api.github.com/users').then(e=>e.json()).then(e=>{console.log(e)})
      // })
  return (
    <div className="App relative w-full h-[100vh] dark:bg-github-bg-dark">
        <ContainerMain/>
    </div>
  )
}

export default App
