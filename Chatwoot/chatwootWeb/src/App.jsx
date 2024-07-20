import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import ChatWoot from './ChatWoot'

const App=()=> {
  const [count, setCount] = useState(0)



  return (
    <div className="App">
      <header className="App-header">
        <div>
          <ChatWoot>

          </ChatWoot>
        </div>
        
        
      </header>
    </div>
  )
}

export default App
