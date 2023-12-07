import { Routes, Route } from "react-router-dom"
import { Layout } from "./components/main-components/Layout"
import { Headphones } from "./pages/Headphones"
import { Speakers } from "./pages/Speakers"
import { Earphones } from "./pages/Earphones"
import { Home } from "./pages/Home"

function App() {
  return (
    <>    
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="/headphones" element={<Headphones/>}/>
          <Route path="/speakers" element={<Speakers/>}/>
          <Route path="/earphones" element={<Earphones/>}/>
        </Route>
      </Routes>
    </>

  )
}

export default App