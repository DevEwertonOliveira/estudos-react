/* import { useState } from 'react' */
import './App.css'
import CarDetails from './components/CarDetails'
/* import ShowUserName from './components/ShowUserName' */



function App() {
  /*  const name = "Joaquim"
   const [username] = useState("Maria") */

  const cars = [
    { id: 1, brand: "ferrari", color: "Amarela", newCar: true, km: 0 },
    { id: 2, brand: "KIA", color: "Branco", newCar: false, km: 34343 },
    { id: 3, brand: "Renault", color: "Azul", newCar: false, km: 234 }
  ]

  return (
    <div className="App">
      {/* <ShowUserName name={username} /> */}
      <CarDetails brand="VW" km={100000} color="Azul" newCar={false} />
      {/* Reaproveitando */}
      <CarDetails brand="Ford" color="Vermelha" km={0} newCar={true} />
      <CarDetails brand="Fiat" color="Branco" km={4500} newCar={false} />
    </div>
  )
}

export default App
