import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Counters from './componentes/Counters'
import HideShow from './componentes/HideShow'
import LiveCounter from './componentes/LiveConter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Counters />
        <HideShow />
        <LiveCounter />
      </div>
       
    </>
  )
}

export default App
