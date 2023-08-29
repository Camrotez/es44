import Count from "./assets/Count"
import { Routes,Route } from "react-router-dom"

function App() {

  return (
    <>
    <Routes>
      <Route path="/Count" element={<Count/>}/>
    </Routes>
    </>

  )
}

export default App
