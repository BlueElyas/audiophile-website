import { Routes, Route } from "react-router-dom"
import { Layout } from "./components/main-components/Layout"
import { Headphones } from "./pages/Headphones"
import { Speakers } from "./pages/Speakers"
import { Earphones } from "./pages/Earphones"
import { Home } from "./pages/Home"
import { ProductDetails } from "./pages/ProductDetails"

function App() {
  return (
    <>    
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="/headphones" element={<Headphones/>}/>
          <Route path="/headphones/:slug" element={<ProductDetails/>}/>
          <Route path="/speakers" element={<Speakers/>}/>
          <Route path="/speakers/:slug" element={<ProductDetails/>}/>
          <Route path="/earphones" element={<Earphones/>}/>
          <Route path="/earphones/:slug" element={<ProductDetails/>}/>

        </Route>
      </Routes>
    </>

  )
}

export default App