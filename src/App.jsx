import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  const pRef = useRef(null);

  useEffect( ()=> {
    console.log(2);

    // // Display

    window.addEventListener('keypress', () => {
      console.log('Hello')
    })

    const p = document.getElementById('myID');
    p.innerText = `P tag changed 2`

    pRef.current.innerText = 'new Heading'

    // return () => {
    //   window.removeEventListener('keypress')
    // }


    //it will run whenever count changes
  },[count])

  


  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <p>Hello</p>
      </div>
      <h1

      ref={pRef}>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>

          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p id='myID' className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
