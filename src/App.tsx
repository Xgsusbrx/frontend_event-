import './App.css'
import { useCounter } from './hooks/useCounter'

function App() {
  const counter = useCounter()






return (
    <div>
    <h2>El pibe </h2>
    <p>contador:{counter.state} </p>
    <button onClick={counter.add}> sumar</button>  
    <button onClick={counter.substract}>restar</button> 
    <button onClick={counter.reset}>resetear</button>

    </div>
  )
  
}

export default App
