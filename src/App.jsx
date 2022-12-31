import { useState,useEffect } from 'react'
import ContainerMain from './component/container'

function App() {
      // useEffect(()=>{
      //   fetch('https://api.github.com/users').then(e=>e.json()).then(e=>{console.log(e)})
      // })
  return (
    <div className="App relative transition-all duration-200 font-space-mono grid p-3 place-items-center w-full pt-8 h-[100vh] bg-github-bg dark:bg-github-bg-dark dark:selection:bg-github-marker">
        <ContainerMain/>
    </div>
  )
}

export default App
